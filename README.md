# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

## preparation

To create your .env file

```shell
cp .env.example .env
vi .env
```

cat .env.example (Don't use these example keys, you need to apply your own key and change it in .env file)
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
      ✔ Should have the decimals as 18


·-------------------------|---------------------------|-------------|-----------------------------·
|  Solc version: 0.8.17   ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 30000000 gas  │
··························|···························|·············|······························
|  Methods                                                                                        │
·············|············|·············|·············|·············|···············|··············
|  Contract  ·  Method    ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
·············|············|·············|·············|·············|···············|··············
|  Lock      ·  withdraw  ·          -  ·          -  ·      33820  ·            7  ·          -  │
·············|············|·············|·············|·············|···············|··············
|  Deployments            ·                                         ·  % of limit   ·             │
··························|·············|·············|·············|···············|··············
|  Lock                   ·          -  ·          -  ·     204517  ·        0.7 %  ·          -  │
··························|·············|·············|·············|···············|··············
|  MuzaToken              ·          -  ·          -  ·     626893  ·        2.1 %  ·          -  │
·-------------------------|-------------|-------------|-------------|---------------|-------------·

  13 passing (7s)

✨  Done in 17.92s.
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

## multiple network deployment (xdeployer)

```shell
$ npx hardhat xdeploy                                      
Generating typings for: 8 artifacts in dir: typechain-types for target: ethers-v5
Successfully generated 46 typings!
Compiled 7 Solidity files successfully

The deployment is starting... Please bear with me, this may take a minute or two. Anyway, WAGMI!

Your deployment parameters will lead to the following contract address: 0x8A1976539880A5E8E1A820233BD41ca7BBee69f5

=> If this does not match your expectation, given a previous deployment, you have either changed the value of
the salt parameter or the bytecode of the contract!


----------------------------------------------------------
><><><><           XDEPLOY DEPLOYMENT 1           ><><><><
----------------------------------------------------------

Deployment status: successful

Network: hardhat

Chain ID: 31337

Contract name: MuzaToken

Contract creation transaction: 0x90c820acb91da78f3a142c056d6ab4a30db0f9d97b2e3a4912b2f067af84e64b

Contract address: 0x8A1976539880A5E8E1A820233BD41ca7BBee69f5

Transaction details written to: /Users/ming/src/HH/muzatoken-faucet/deployments/hardhat_deployment.json


Your deployment parameters will lead to the following contract address: 0xEB0F3CcdE8C2cc06DaEA35b68548408711aaC4D6

=> If this does not match your expectation, given a previous deployment, you have either changed the value of
the salt parameter or the bytecode of the contract!


----------------------------------------------------------
><><><><           XDEPLOY DEPLOYMENT 2           ><><><><
----------------------------------------------------------

Deployment status: successful

Network: goerli

Chain ID: 5

Contract name: MuzaToken

Contract creation transaction hash: https://goerli.etherscan.io/tx/0xb74674fb43e8de1315e2369fb7d3744b6e843db20b2d0d9ced402940f1d46235

Contract address: https://goerli.etherscan.io/address/0xEB0F3CcdE8C2cc06DaEA35b68548408711aaC4D6

Transaction details written to: /Users/ming/src/HH/muzatoken-faucet/deployments/goerli_deployment.json


Your deployment parameters will lead to the following contract address: 0xEB0F3CcdE8C2cc06DaEA35b68548408711aaC4D6

=> If this does not match your expectation, given a previous deployment, you have either changed the value of
the salt parameter or the bytecode of the contract!


----------------------------------------------------------
><><><><           XDEPLOY DEPLOYMENT 3           ><><><><
----------------------------------------------------------

Deployment status: successful

Network: mumbai

Chain ID: 80001

Contract name: MuzaToken

Contract creation transaction hash: https://mumbai.polygonscan.com/tx/0x0b0ddab8e0a4ad8b82547e9befd996d071ea5a8e9705f3ae0a9d11ccee1037d4

Contract address: https://mumbai.polygonscan.com/address/0xEB0F3CcdE8C2cc06DaEA35b68548408711aaC4D6

Transaction details written to: /Users/ming/src/HH/muzatoken-faucet/deployments/mumbai_deployment.json
```

## verification on the same address for both mumbai and goerli networks

### mumbai

```shell
$ npx hardhat verify --contract contracts/MuzaToken.sol:MuzaToken 0xEB0F3CcdE8C2cc06DaEA35b68548408711aaC4D6  1000000000000000000000 --network mumbai

Generating typings for: 1 artifacts in dir: typechain-types for target: ethers-v5
Successfully generated 34 typings!
Compiled 1 Solidity file successfully
Successfully submitted source code for contract
contracts/MuzaToken.sol:MuzaToken at 0xEB0F3CcdE8C2cc06DaEA35b68548408711aaC4D6
for verification on the block explorer. Waiting for verification result...

Successfully verified contract MuzaToken on Etherscan.
https://mumbai.polygonscan.com/address/0xEB0F3CcdE8C2cc06DaEA35b68548408711aaC4D6#code
```

### goerli

You need to change POLYGONSCAN_KEY in .env file to your Etherscan API key.

```shell
npx hardhat verify --contract contracts/MuzaToken.sol:MuzaToken 0xEB0F3CcdE8C2cc06DaEA35b68548408711aaC4D6  1000000000000000000000 --network goerli

Nothing to compile
No need to generate any newer typings.
Successfully submitted source code for contract
contracts/MuzaToken.sol:MuzaToken at 0xEB0F3CcdE8C2cc06DaEA35b68548408711aaC4D6
for verification on the block explorer. Waiting for verification result...

Successfully verified contract MuzaToken on Etherscan.
https://goerli.etherscan.io/address/0xEB0F3CcdE8C2cc06DaEA35b68548408711aaC4D6#code
```

or to change POLYGONSCAN_KEY in CLI as follow;

```shell
$ POLYGONSCAN_KEY=J4V5S8SIF5SAUSNI3TE1VX3KDQYZDEDD71 npx hardhat verify --contract contracts/MuzaToken.sol:MuzaToken 0xEB0F3CcdE8C2cc06DaEA35b68548408711aaC4D6  1000000000000000000000 --network goerli
Nothing to compile
No need to generate any newer typings.
Error in plugin @nomiclabs/hardhat-etherscan: Contract source code already verified

For more info run Hardhat with --show-stack-traces
```


## upgradeable token

```shell
$ npx hardhat run --network localhost scripts/deploy_mytoken.js

Warning: A proxy admin was previously deployed on this network

    This is not natively used with the current kind of proxy ('uups').
    Changes to the admin will have no effect on this new proxy.

MyToken deployed to: 0xbf2ad38fd09F37f50f723E35dd84EEa1C282c5C9
```

### deploy upgradeable token to mumbai

```shell
$ npx hardhat run --network mumbai scripts/deploy_mytoken.js

MyToken deployed to: 0xcd969e6355F128B3AF1F11d0a72ac439Fb7DC044
```

and

```shell
$ npx hardhat verify --contract contracts/MyToken.sol:MyToken 0xcd969e6355F128B3AF1F11d0a72ac439Fb7DC044 0x611586817af4e77e23951524Df7D8fcEeCf5B3C8  --network mumbai
Verifying implementation: 0xf0533fA376fa61226D42Cd9b3FEC2A8A5d1b531A
Nothing to compile
No need to generate any newer typings.
Failed to verify implementation contract at 0xf0533fA376fa61226D42Cd9b3FEC2A8A5d1b531A: The constructor for contracts/MyToken.sol:MyToken has 0 parameters
but 1 arguments were provided instead.
Verifying proxy: 0xcd969e6355F128B3AF1F11d0a72ac439Fb7DC044
Contract at 0xcd969e6355F128B3AF1F11d0a72ac439Fb7DC044 already verified.
Linking proxy 0xcd969e6355F128B3AF1F11d0a72ac439Fb7DC044 with implementation
Failed to link proxy 0xcd969e6355F128B3AF1F11d0a72ac439Fb7DC044 with its implementation. Reason: The implementation contract at 0xf0533fa376fa61226d42cd9b3fec2a8a5d1b531a does not seem to be verified. Please verify and publish the contract source before proceeding with this proxy verification.
An unexpected error occurred:

Error: Verification completed with the following errors.

Error 1: Failed to verify implementation contract at 0xf0533fA376fa61226D42Cd9b3FEC2A8A5d1b531A: The constructor for contracts/MyToken.sol:MyToken has 0 parameters
but 1 arguments were provided instead.

Error 2: Failed to link proxy 0xcd969e6355F128B3AF1F11d0a72ac439Fb7DC044 with its implementation. Reason: The implementation contract at 0xf0533fa376fa61226d42cd9b3fec2a8a5d1b531a does not seem to be verified. Please verify and publish the contract source before proceeding with this proxy verification.

$ npx hardhat verify --contract contracts/MyToken.sol:MyToken 0xf0533fa376fa61226d42cd9b3fec2a8a5d1b531a --network mumbai 
Nothing to compile
No need to generate any newer typings.
Successfully submitted source code for contract
contracts/MyToken.sol:MyToken at 0xf0533fa376fa61226d42cd9b3fec2a8a5d1b531a
for verification on the block explorer. Waiting for verification result...

Successfully verified contract MyToken on Etherscan.
https://mumbai.polygonscan.com/address/0xf0533fa376fa61226d42cd9b3fec2a8a5d1b531a#code
```

## ERC1155 upgradeable and verify proxy example

```shell
ming:muzatoken-faucet/ (main✗) $ npx hardhat run scripts/deploy_mytoken.js --network mumbai

MyToken deployed to: 0xb2D06DF1faF16cf95155dEEea60Ca561d528d25f
ming:muzatoken-faucet/ (main✗) $ npx hardhat verify --contract contracts/MuzaToken2.sol:MuzaToken2 0xb2D06DF1faF16cf95155dEEea60Ca561d528d25f  --network mumbai
Verifying implementation: 0xa81AC3cbeE49dC4C13d57Dbd5Dd0b1bDb5502764
Nothing to compile
No need to generate any newer typings.
Successfully submitted source code for contract
contracts/MuzaToken2.sol:MuzaToken2 at 0xa81AC3cbeE49dC4C13d57Dbd5Dd0b1bDb5502764
for verification on the block explorer. Waiting for verification result...

Successfully verified contract MuzaToken2 on Etherscan.
https://mumbai.polygonscan.com/address/0xa81AC3cbeE49dC4C13d57Dbd5Dd0b1bDb5502764#code
Verifying proxy: 0xb2D06DF1faF16cf95155dEEea60Ca561d528d25f
Contract at 0xb2D06DF1faF16cf95155dEEea60Ca561d528d25f already verified.
Linking proxy 0xb2D06DF1faF16cf95155dEEea60Ca561d528d25f with implementation
Successfully linked proxy to implementation.

Proxy fully verified.
```

```shell
ming:muzatoken-faucet/ (main✗) $ npx hardhat verify --contract contracts/MuzaToken2.sol:MuzaToken2 0xb2D06DF1faF16cf95155dEEea60Ca561d528d25f  --network mumbai
Verifying implementation: 0xa81AC3cbeE49dC4C13d57Dbd5Dd0b1bDb5502764
Nothing to compile
No need to generate any newer typings.
Implementation 0xa81AC3cbeE49dC4C13d57Dbd5Dd0b1bDb5502764 already verified.
Verifying proxy: 0xb2D06DF1faF16cf95155dEEea60Ca561d528d25f
Contract at 0xb2D06DF1faF16cf95155dEEea60Ca561d528d25f already verified.
Linking proxy 0xb2D06DF1faF16cf95155dEEea60Ca561d528d25f with implementation
Successfully linked proxy to implementation.

Proxy fully verified.
```


## upgrade MuzaToken2.sol to MuzaToken3.sol

```shell
$ npx hardhat run scripts/upgrade_mytoken.js --network mumbai

Compiled 1 Solidity file successfully
Upgrading MuzaToken...
MuzaToken3 upgraded
```

new address is 0x77bBc15D959C10055361A67FB75939E3523d52c4, need to verify again.

```shell
$ npx hardhat verify --contract contracts/MuzaToken3.sol:MuzaToken3 0x77bBc15D959C10055361A67FB75939E3523d52c4  --network mumbai
Nothing to compile
No need to generate any newer typings.
Successfully submitted source code for contract
contracts/MuzaToken3.sol:MuzaToken3 at 0x77bBc15D959C10055361A67FB75939E3523d52c4
for verification on the block explorer. Waiting for verification result...

Successfully verified contract MuzaToken3 on Etherscan.
https://mumbai.polygonscan.com/address/0x77bBc15D959C10055361A67FB75939E3523d52c4#code
```