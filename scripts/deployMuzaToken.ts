import { ethers } from "hardhat";

async function main() {
  const totalSupply = ethers.utils.parseEther("1000");

  const MuzaToken = await ethers.getContractFactory("MuzaToken");
  const muzaToken = await MuzaToken.deploy(totalSupply);

  await muzaToken.deployed();

  console.log(`MuzaToken is deployed to ${muzaToken.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
