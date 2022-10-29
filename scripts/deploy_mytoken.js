// scripts/deploy_mytoken.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const MyToken = await ethers.getContractFactory("MyToken");

  const mt = await upgrades.deployProxy(
    MyToken,
    ["0x611586817af4e77e23951524Df7D8fcEeCf5B3C8"],
    { initializer: "initialize" }
  );

  await mt.deployed();
  console.log("MyToken deployed to:", mt.address);
}

main();
