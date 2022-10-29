// scripts/deploy_mytoken.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const MuzaToken2 = await ethers.getContractFactory("MuzaToken2");

  const mt = await upgrades.deployProxy(
    MuzaToken2,
    ["0x611586817af4e77e23951524Df7D8fcEeCf5B3C8"],
    { initializer: "initialize" }
  );

  await mt.deployed();
  console.log("MyToken deployed to:", mt.address);
}

main();
