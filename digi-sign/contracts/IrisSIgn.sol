// SPDX-License-Identifier: MIT


pragma solidity ^0.8.19;


contract IrisSign{


struct UserSignature{

bytes32  IrisData;
string publicKey;
string privateKey;


}



mapping (bytes32 => UserSignature) private irisdataToUser;



function getPublicKey (bytes32 irisdata) public view returns ( string memory ){

    return irisdataToUser[irisdata].publicKey;

}



function getPrivateKey (bytes32 irisdata) public view returns (string memory){

    return irisdataToUser[irisdata].privateKey;

}


function AddUserToPublicKey(bytes32 _irisdata,string memory  _publicKey,string memory _privateKey) public  {

    UserSignature memory tempUser =  UserSignature(_irisdata,_publicKey,_privateKey);
     
     irisdataToUser[_irisdata]= tempUser;
    

}

    


}