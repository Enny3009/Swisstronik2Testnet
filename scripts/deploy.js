const hre = require("hardhat");

async function main() {
<<<<<<< HEAD
  const contract = await hre.ethers.deployContract("TestToken");

  await contract.waitForDeployment();

  console.log(`deployed to ${contract.target}`);
}

=======

  const contract = await hre.ethers.deployContract("Swisstronik", ["Hello Swisstronik!!"]);

  await contract.waitForDeployment();

  console.log(`Swisstronik contract deployed to ${contract.target}`);
}
>>>>>>> 97be9823631705caa7b46ef8b45f3ead09ed5180
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
