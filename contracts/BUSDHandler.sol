// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

//Created by Collins Ihezie on 03/08/203

//Add import for erc20 token standard
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract BUSDHandler is ERC20 {
    //address of the owner or deployer
    address public _owner;

    //Token name
    string private _tokenName = "BUSDToken";

    //Token symbol
    string private _tokenSymbol = "BUSD";
    
    //A constructor that accept an initialSupply which is used by the _mint method
    constructor(uint256 initialSupply) ERC20(_tokenName, _tokenSymbol){
        //set _owner variable to msg.sender which the address deploying the contract
        _owner = msg.sender;

        //mint busd token to owner address
        _mint(_owner, initialSupply);
    }

    //Only the owner
    modifier restricted() {
        require(msg.sender == _owner);
        _;
    }

   //get ether balance of caller
    function getEtherBalance() public view returns(uint256) {
        return address(msg.sender).balance;
    }

    //get ether balance of the contract.
    function getContractBalance() public view restricted returns(uint256) {
        return address(this).balance;
    }

    //get get BUSD Token balance of the caller
    function getBusdBalanceOf(address account) public view returns(uint256) {
        //calling ERC20 contract balanceOf method which returns uint256
        return balanceOf(account);
    }

    //Transfer the sepcicified amount of BUSD Token to the supplied address
    function transferBusdToken(address to, uint256 amount) public payable {
        //Add a check for amounts that are less that zero
        require(amount > 0, "Amount must greater than zero");

        //Add a check to make sure user don't send above their balance
        require(balanceOf(msg.sender) > amount, "Insufficient balance");

        //Set the amount of allowance the spender is allowed to transfer.
        approve(msg.sender, amount);

        //Call Erc20 transferFrom method to transfer BUSDToken
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