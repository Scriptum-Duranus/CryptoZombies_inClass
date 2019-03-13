pragma solidity ^0.5.0;

contract HelloWorld {
  string public message = "Hello Ethereum Salon!";
  
  constructor HelloWorld() {
    // constructor
  }

  function GetMessage() returns (string memory) {
    return message;
  }
}