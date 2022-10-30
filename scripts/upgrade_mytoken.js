// scripts/upgrade_mytoken.js
const { ethers, upgrades } = require("hardhat");

async function main() {
  const MuzaToken3 = await ethers.getContractFactory("MuzaToken3");
  console.log("Upgrading MuzaToken...");
  await upgrades.upgradeProxy(
    "0xb2D06DF1faF16cf95155dEEea60Ca561d528d25f",
    MuzaToken3
  );
  console.log("MuzaToken3 upgraded");
}

main();
