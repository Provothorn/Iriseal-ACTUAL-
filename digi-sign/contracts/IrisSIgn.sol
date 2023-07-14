// SPDX-License-Identifier: MIT


pragma solidity ^0.8.19;


contract IrisSign{


struct UserSignature{

string  IrisData;
string publicKey;
string privateKey;


}



mapping (string => UserSignature) private irisdataToUser;



function getPublicKey (string memory irisdata) public view returns ( string memory ){

    return irisdataToUser[irisdata].publicKey;

}



function getPrivateKey (string memory irisdata) public view returns (string memory){

    return irisdataToUser[irisdata].privateKey;

}


function AddUserToPublicKey(string  memory _irisdata,string memory  _publicKey,string memory _privateKey) public  {

    UserSignature memory tempUser =  UserSignature(_irisdata,_publicKey,_privateKey);
     
     irisdataToUser[_irisdata]= tempUser;
    

}

    


}