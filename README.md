# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

## preparation

To create your .env file

```shell
cp .env.example .env
vi .env
```

cat .env.example
```
POLYGONSCAN_KEY=YHRM33PWZ3Q1GUG1YPTHCD1PN4R8APGAGQ
MUMBAI_URL=https://polygon-mumbai.g.alchemy.com/v2/kqrbMP1SLI1kxkU-4BNN9-AVKg0Iiyy_
POLYGON_URL=https://polygon.g.alchemy.com/v2/kqrbMP1SLI1kxkU-4BNN9-AVKg0Iiyy_
PRIVATE_KEY=828516166b1b030645f0aa20927b3fffd5c0f341b4f36dd9016a8f628ae6e916
```

To apply above keys from [alchemy](https://www.alchemy.com/), [polygonscan](https://polygonscan.com/), and export your private key from your [metamask](https://metamask.io/) account. (You need some deplosit on this account for deploying smart contracts)

To get some fake MATICs from the [Mumbai facuet](https://mumbaifaucet.com/) if you don't have any.

## test it on hardhat first

To set defaultNetwork in your hardhat.config.ts file to 'hardhat'

```shell
yarn
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat run scripts/deployMuzaToken.ts
```

test example
```shell
$ yarn test                                        
yarn run v1.22.19
$ npx hardhat test


  Lock
    Deployment
      ✔ Should set the right unlockTime (4853ms)
      ✔ Should set the right owner (57ms)
      ✔ Should receive and store the funds to lock
      ✔ Should fail if the unlockTime is not in the future (371ms)
    Withdrawals
      Validations
        ✔ Should revert with the right error if called too soon
        ✔ Should revert with the right error if called from another account (39ms)
        ✔ Shouldn't fail if the unlockTime has arrived and the owner calls it (45ms)
      Events
        ✔ Should emit an event on withdrawals (48ms)
      Transfers
        ✔ Should transfer the funds to the owner (48ms)

  MuzaToken
    Deployment
      ✔ Should have the symbol called MUZA (442ms)
      ✔ Should have the name called Muzha Mint Token
      ✔ Should have the totalSupply 1000000000000000000000
      ✔ Should have the decimals as 18 1000000000000000000000


  13 passing (6s)

✨  Done in 11.88s.
```

## deploy to Polygon Mumbai

To set defaultNetwork in your hardhat.config.ts file to 'mumbai'

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

