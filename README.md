UPDATE - 8/27/2017 -- Vote for us in the [Dappathon Community Vote!](https://goo.gl/forms/ey0y0o6UoYEFMPE62)

# You've Got ETH

Easily send [Ethereum](https://www.ethereum.org/) to an email.

# Demo

Play with the demo at [https://youvegoteth.github.io/](https://youvegoteth.github.io/) .  The demo app supports

* TestRPC
* Ropsten
* Mainnet

Or watch the below video:
<a href="https://www.youtube.com/watch?v=dk_Qz_cwNVk"><img src='https://github.com/youvegoteth/youvegoteth.github.io/raw/master/images/Image%202017-08-27%20at%2011.25.28%20AM.png'></a>


## Project Overview

Want to pay your friends in [Ethereum](https://www.ethereum.org/), but they don't have a wallet? Now with [You've Got ETH](https://youvegoteth.github.io/) you can send [Ethereum](https://www.ethereum.org/) to an email address.

# Architecture

<img src='https://github.com/youvegoteth/youvegoteth.github.io/raw/master/images/architecture.png'>

# How it works

Eth that is in escrow in the system is stored in [the smart contract](https://github.com/youvegoteth/youvegoteth.github.io/blob/master/contracts/contracts/TransferIndex.sol).

This contract is deployed on the mainnet at ropsten at :

* Mainnet: [0x7aca51dbe152313987adca472ac1d033b640f771](https://etherscan.io/address/0x7aca51dbe152313987adca472ac1d033b640f771
)
* Ropsten: [0xE95215CdbEfDbeB58559D231E07278880FcaeC15](https://ropsten.etherscan.io/address/0xE95215CdbEfDbeB58559D231E07278880FcaeC15)

When ETH is placed into the smart contract, it is stored in such a way that it can only be accessed by the private key of an ephemeral address, generated on the fly during the checkout process.  

This private key is then passed to the receipient, and after the user is educated about metamask and Ethereum, the private key is what is used to forward the ETH to a secure ethereum wallet.

For an end to end visualization of the flow, [please see this youtube video](https://www.youtube.com/watch?v=dk_Qz_cwNVk).

# Running on testRPC

1. Run 

```
bash helper_scripts/testrpc.bash
```

2. Then, in another tab, run

```
cd contracts; truffle deploy
```

3. Set your Metamask to point to your testRPC instance.

4. Load [https://youvegoteth.github.io/](https://youvegoteth.github.io/) and use the app!

# Running on mainnet or ropsten

You should be good to go if you 

1. Set Metamask to point at the correct network.

2. Load [https://youvegoteth.github.io/](https://youvegoteth.github.io/) and use the app!


## Authors

* [Brent Kirkland](https://github.com/brentkirkland)
* [Kevin Owocki](https://github.com/owocki)
* [Kevin Seagraves](https://github.com/captnseagraves)
* [Paul Foley](https://github.com/paulfoley)

## Contributors

Please visit [Contributors](https://github.com/youvegoteth/youvegoteth.github.io/graphs/contributors) for details on who contributed to the project.

## License

MIT Liscense (see liscense.txt)

## Acknowledgments

* [BCG Digital Ventures](https://bcgdv.com/)
* [Dappathon](http://dappathon.com/)

<!-- Google Analytics -->
<img src='https://ga-beacon.appspot.com/UA-105392375-1/youvegoteth/youvegoteth.github.io' style='width:1px; height:1px;' >

