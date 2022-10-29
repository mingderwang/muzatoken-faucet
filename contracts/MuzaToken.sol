// contracts/MuzaToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
//import "xdeployer/src/contracts/Create2Deployer.sol"; // only require for localhost and hardhat
   
//contract Create2DeployerLocal is Create2Deployer {}  // only require for localhost and hardhat
   
contract MuzaToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Muzha Mint Token", "MUZA") {
        _mint(msg.sender, initialSupply);
    }
}
