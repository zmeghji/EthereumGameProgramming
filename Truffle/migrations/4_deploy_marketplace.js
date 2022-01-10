const PowerUp = artifacts.require("PowerUp");
const Marketplace = artifacts.require("Marketplace");

module.exports = async function (deployer) {
  await deployer.deploy(Marketplace, PowerUp.address);

  var marketPlaceInstance = await Marketplace.deployed();
  var powerUpInstance = await PowerUp.deployed();
  
  await powerUpInstance.mint(marketPlaceInstance.address, 1, 30000, web3.utils.fromUtf8(""));
  await powerUpInstance.mint(marketPlaceInstance.address, 2, 20000, web3.utils.fromUtf8(""));
  await powerUpInstance.mint(marketPlaceInstance.address, 3, 10000, web3.utils.fromUtf8(""));

};
