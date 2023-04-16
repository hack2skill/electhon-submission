const DemocracyChain = artifacts.require("DemocracyChain");

module.exports = function(deployer,network,accounts) {
    console.log(accounts)
  deployer.deploy(DemocracyChain,accounts[0]);
};

