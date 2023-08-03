// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

//Add import for erc20 token standard
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract BUSDHandler is ERC20 {
    address public _owner;
    string private _tokenName = "BUSDToken";
    string private _tokenSymbol = "BUSD";

    constructor(uint256 initialSupply) ERC20(_tokenName, _tokenSymbol){
        _owner = msg.sender;
        //mint busd token to owner address
        _mint(_owner, initialSupply);
    }

    //Only the owner
    modifier restricted() {
        require(msg.sender == _owner);
        _;
    }

    function getEtherBalance() public view returns(uint256) {
        return address(msg.sender).balance;
    }

    function getContractBalance() public view restricted returns(uint256) {
        return address(this).balance;
    }

    function getBusdBalanceOf(address account) public view returns(uint256) {
        //calling ERC20 contract balanceOf method which returns uint256
        return balanceOf(account);
    }

    function transferBusdToken(address to, uint256 amount) public payable {
        require(amount < 0, "Amount must greater than zero");
        //Set the amount of allowance the spender is allowed to transfer.
        approve(msg.sender, amount);
        transferFrom(msg.sender, to, amount);
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {
      //console.log('Receive Hook called %s', gasleft());
    }

    //Fallback function is called when msg.data is not empty
    fallback() external payable {
      //console.log('Fallback Hook called %s', gasleft());
    }
}