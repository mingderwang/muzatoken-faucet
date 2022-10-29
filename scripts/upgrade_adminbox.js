// scripts/upgrade_adminbox.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const AdminBoxV2 = await ethers.getContractFactory("AdminBoxV2");
  console.log("Upgrading AdminBox...");
  await upgrades.upgradeProxy(
    "0xB9d9e972100a1dD01cd441774b45b5821e136043",
    AdminBoxV2
  );
  console.log("Box upgraded");
}

main();
