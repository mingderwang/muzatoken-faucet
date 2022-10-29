// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  console.log("Upgrading Box...");
  await upgrades.upgradeProxy(
    "0x313F922BE1649cEc058EC0f076664500c78bdc0b",
    BoxV2
  );
  console.log("Box upgraded");
}

main();
