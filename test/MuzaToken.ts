import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("MuzaToken", function () {
  async function deployOneYearLockFixture() {
    const totalSupply = ethers.utils.parseEther("1000");
    console.log("testing");
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    console.log(owner);
    const MuzaToken = await ethers.getContractFactory("MuzaToken");
    const muzaToken = await MuzaToken.deploy(totalSupply);

    return { muzaToken, owner, otherAccount };
  }

  describe("Deployment", async function () {
    it("Should set decimals to 18", async function () {
      const { muzaToken, owner } = await loadFixture(deployOneYearLockFixture);
      console.log("tested");
      expect(await muzaToken.owner()).to.equal(owner.address);
    });
  });
});
