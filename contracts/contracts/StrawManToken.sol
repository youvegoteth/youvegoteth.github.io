pragma solidity ^0.4.11;


import './zeppelin/StandardToken.sol';

contract StrawManToken is StandardToken {

  function mint(address addy, uint256 _value) returns (bool) {
    balances[addy] = balances[addy].add(_value);
    return true;
  }

}
