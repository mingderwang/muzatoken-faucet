import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("MuzaToken", function () {
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const MuzaToken = await ethers.getContractFactory("MuzaToken");
    const muzatoken = await MuzaToken.deploy(10000000000000000);

    return { muzatoken, owner, otherAccount };
  }

  describe("Deployment", async function () {
    it("Should set decimals to 18", async function () {
      const { muzatoken } = await loadFixture(deployOneYearLockFixture);
      console.log("tested");
      expect(await muzatoken.decimals()).to.equal(18);
    });
  });
});
