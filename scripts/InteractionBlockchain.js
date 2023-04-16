const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(
  `https://mainnet.infura.io/v3/${API_KEY}`
);

const readBlockchai = async () => {
  const block = await provider.getBlockNumber();
  //   console.log(block);

  const balance = await provider.getBalance("address"); //addresss 0x...
};

readBlockchai();

const contractAddress = "";
const ABI = [];

const contractRead = async () => {
  const contract = new ethers.Contract(contractAddress, ABI, provider);

  const num = await contract.getX();
};

contractRead();

// in react using metamask as signer
// no need of infura metamask already using it itself!

const contractWrite = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);

  const signer = provider.getSigner();
  const Contracct = new ethers.Contract(contractAddress, ABI, signer);
  await Contracct.setX(100);
};

// call the write function
