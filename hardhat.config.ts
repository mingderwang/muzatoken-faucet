import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "xdeployer";

dotenv.config();
const defaultNetwork = "hardhat";

const config: HardhatUserConfig = {
  defaultNetwork,
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
    },
    polygon: {
      url: process.env.POLYGON_URL || "",
      chainId: 137,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    mumbai: {
      url: process.env.MUMBAI_URL || "",
      chainId: 80001,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    goerli: {
      url: process.env.GOERLI_URL || "",
      chainId: 5,
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    hardhat: {
      forking: {
        url:
          `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}` ||
          "",
      },
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_KEY || "", // or apiKey: process.env.ETHERSCAN_KEY || "",
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  xdeploy: {
    contract: "MuzaToken",
    constructorArgsPath: "./deploy-args.ts",
    salt: "de13c19b1e2ea4e3e4ef36f3c8263caff154bff3bed2e4e9320fc0f2b86719d2",
    signer: process.env.PRIVATE_KEY,
    networks: ["goerli", "mumbai"],
    rpcUrls: [process.env.GOERLI_URL, process.env.MUMBAI_URL],
    gasLimit: 1.2 * 10 ** 6,
  },
};

export default config;
