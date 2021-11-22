const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyGame');
    const gameContract = await gameContractFactory.deploy(
      ["Ed", "Hank", "Al"],       // Names
      ["https://i.imgur.com/LPYSPZr.jpg", // Images
      "https://i.imgur.com/sluLbvY.jpeg", 
      "https://i.imgur.com/7NR3mHF.jpeg"],
      [120, 200, 300],                    // HP values
      [100, 65, 30],                       // Attack damage values
      "Rooney", // Boss name
      "https://i.imgur.com/EbrIYsZ.jpeg", // Boss image
      10000, // Boss hp
      50, // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
    
    // let txn;
    // txn = await gameContract.mintCharacterNFT(0);
    // await txn.wait();
    // console.log("Minted NFT #1");

    // txn = await gameContract.mintCharacterNFT(1);
    // await txn.wait();
    // console.log("Minted NFT #2");

    // txn = await gameContract.mintCharacterNFT(2);
    // await txn.wait();
    // console.log("Minted NFT #3");
  

    // Get the value of the NFT's URI.
    // let returnedTokenUri = await gameContract.tokenURI(1);
    // console.log("Token URI:", returnedTokenUri);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();