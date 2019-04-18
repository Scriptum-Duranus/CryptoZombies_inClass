
const Instructor = artifacts.require("Courses");

module.exports = function(deployer) {
  deployer.deploy(Instructor);
};
