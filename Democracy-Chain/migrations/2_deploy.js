const ElectionDAO = artifacts.require("ElectionDAO.sol");

module.exports = function(deployer) {
  deployer.deploy(ElectionDAO);
};