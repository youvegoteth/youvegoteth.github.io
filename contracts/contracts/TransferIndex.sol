pragma solidity ^0.4.8;

contract TransferIndex {

  // ------------------------------
  // config
  // ------------------------------
  uint256 devteam_expiry_fee_pct = 5;
  uint256 default_developer_tip_pct = 1;
  uint256 minimum_wei_amount = 30000; // should be at least 2x gas amount
  uint256 maximum_wei_amount = 1000000000000000000 * 100; // 100 eth
  uint256 send_gas_amount = 3000000;

  // ------------------------------
  // indexed object
  // ------------------------------
  struct transfer {
    bool active;
    uint amount;
    uint developer_tip_pct;
    bool initialized;
    uint expiration_time;
    address from;
    address owner;
  }

  // ------------------------------
  // constructor & constructed objects
  // ------------------------------
  address devteam;
  mapping (address => transfer) public transfers;

  function TransferIndex() {
    devteam = '0xD3d280C2866eAa795FC72BD850C48E7cCE166E23';
  }

  // ------------------------------
  // modifiers
  // ------------------------------
  modifier requireInitialized(address _idx){
    require(transfers[_idx].initialized == true);
    _;
  }

  modifier requireSenderIsIdx(address _idx){
    require(_idx == msg.sender);
    _;
  }

  modifier requireFromAddress(address _idx){
    require( transfers[_idx].from == msg.sender );
    _;
  }

  modifier requireExpired(address _idx){
    require( transfers[_idx].expiration_time < now );
    _;
  }

  modifier requireNotExpired(address _idx){
    require( transfers[_idx].expiration_time > now );
    _;
  }

  modifier requireActive(address _idx){
    require( transfers[_idx].active );
    _;
  }

  //default function
  function() public payable {
    revert();
  }

  // create new transfer
  function newTransfer(bool _disableDeveloperTip, address _owner) public payable {
    
    //validation
    require(msg.value > minimum_wei_amount);
    require(msg.value < maximum_wei_amount);
    require(_owner != 0x0);

    //adds an index to the transfer index.
    transfer memory t;
    //set data that we have now
    t.amount = msg.value - send_gas_amount;
    t.expiration_time = now + (60* 60 * 24 * 7); // 7 days
    t.from = msg.sender;
    t.initialized = true;
    t.developer_tip_pct = default_developer_tip_pct;
    if(_disableDeveloperTip){
      t.developer_tip_pct = 0;
    }
    t.owner = _owner;
    t.active = true;
    transfers[_owner] = t;

    //send eth to the ephemeral address
    _owner.transfer(send_gas_amount);


  }

  // claim a transfer
  function claimTransfer(address _idx, address _to) public 
  requireNotExpired(_idx) 
  requireActive(_idx)
  requireSenderIsIdx(_idx)
  returns (bool){

    distributeFunds(_idx, transfers[_idx].developer_tip_pct, _to );

    transfers[_idx].active = false;
    
  }

  // transfer expires
  function expireTransfer(address _idx) public 
  requireInitialized(_idx) 
  requireExpired(_idx) 
  {
 
    distributeFunds(_idx, devteam_expiry_fee_pct, transfers[_idx].from );

    transfers[_idx].active = false;
 
  }

  //getter function for transfer details
  function getTransferDetails(address _idx) public returns (bool, uint, uint, bool, uint, address, address){

    transfer memory t = transfers[_idx];
    return (t.active, t.amount, t.developer_tip_pct, t.initialized, t.expiration_time, t.from, t.owner);

  }

  //actually sends the function to the sender
  function distributeFunds(address _idx, uint256 _pct_to_dev_team, address _main_to_address ) private{

    // devteam fee transfer
    if (_pct_to_dev_team > 0 ){
      uint256 dev_team_fee = (transfers[_idx].amount * _pct_to_dev_team / 100);
      devteam.transfer(dev_team_fee);
    }

    // expiration transfer
    uint256 main_address_transfer = (transfers[_idx].amount * (100 - _pct_to_dev_team) / 100);
    _main_to_address.transfer(main_address_transfer);

  }

  // ------------------------------
  // events
  // ------------------------------
  event transferSubmitted(address _from, uint amount, bytes32 index);
  event transferExpired(address _from, uint amount, bytes32 index);
  event transferClaimed(address _to, uint amount, bytes32 index);



}
