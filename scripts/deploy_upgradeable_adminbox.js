// scripts/deploy_upgradeable_adminbox.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const AdminBox = await ethers.getContractFactory("AdminBox");
  console.log("Deploying AdminBox...");
  const adminBox = await upgrades.deployProxy(
    AdminBox,
    ["0x611586817af4e77e23951524Df7D8fcEeCf5B3C8"],
    { initializer: "initialize" }
  );
  await adminBox.deployed();
  console.log("AdminBox deployed to:", adminBox.address);
}

main();
