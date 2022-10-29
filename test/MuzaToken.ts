import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

const totalSupply = ethers.utils.parseEther("1000");

describe("MuzaToken", function () {
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    const MuzaToken = await ethers.getContractFactory("MuzaToken");
    const muzaToken = await MuzaToken.deploy(totalSupply);

    return { muzaToken, owner, otherAccount };
  }

  describe("Deployment", async function () {
    it("Should have the symbol called MUZA", async function () {
      const { muzaToken, owner } = await loadFixture(deployOneYearLockFixture);
      expect(await muzaToken.symbol()).to.equal("MUZA");
    });

    it("Should have the name called Muzha Mint Token", async function () {
      const { muzaToken, owner } = await loadFixture(deployOneYearLockFixture);
      expect(await muzaToken.name()).to.equal("Muzha Mint Token");
    });

    it(`Should have the totalSupply ${totalSupply}`, async function () {
      const { muzaToken, owner } = await loadFixture(deployOneYearLockFixture);
      expect(await muzaToken.totalSupply()).to.equal(totalSupply);
    });

    it("Should have the decimals as 18", async function () {
      const { muzaToken, owner } = await loadFixture(deployOneYearLockFixture);
      expect(await muzaToken.decimals()).to.equal(18);
    });
  });
});
