pragma solidity ^0.8.9;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GameToken is ERC20 {
    constructor() ERC20("FakeBitcoin", "FBC") {
    }

    function mint(address to, uint value) public {
        _mint(to,value);
    }
}