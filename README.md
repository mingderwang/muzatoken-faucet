# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

## deploy to Polygon Mumbai

```shell
$ npx hardhat run scripts/deployMuzaToken.ts       
MuzaToken is deployed to 0x33825f022Dce205EE3554023412be6D0C809c3E7
```

### verify

```shell
$ npx hardhat verify --contract contracts/MuzaToken.sol:MuzaToken 0x33825f022Dce205EE3554023412be6D0C809c3E7 1000000000000000000000
Nothing to compile
No need to generate any newer typings.
Successfully submitted source code for contract
contracts/MuzaToken.sol:MuzaToken at 0x33825f022Dce205EE3554023412be6D0C809c3E7
for verification on the block explorer. Waiting for verification result...

Successfully verified contract MuzaToken on Etherscan.
https://mumbai.polygonscan.com/address/0x33825f022Dce205EE3554023412be6D0C809c3E7#code
```