const hre = require("hardhat");

async function main() {
  const Demo = await hre.ethers.getContractFactory("Demo");
  const demo = await Demo.deploy();

  await demo.deployed();

  console.log(`deployed to ${demo.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
