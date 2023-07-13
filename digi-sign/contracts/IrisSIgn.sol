// SPDX-License-Identifier: MIT


pragma solidity ^0.8.19;


contract IrisSign{


struct UserSignature{

bytes32  IrisData;
bytes32 publicKey;
bytes32 privateKey;


}



mapping (bytes32 => UserSignature) private irisdataToUser;



function getPublicKey (bytes32 irisdata) public view returns ( bytes32){

    return irisdataToUser[irisdata].publicKey;

}



function getPrivateKey (bytes32 irisdata) public view returns ( bytes32){

    return irisdataToUser[irisdata].privateKey;

}


function AddUserToPublicKey(bytes32 _irisdata,bytes32 _publicKey,bytes32 _privateKey) public  {

    UserSignature memory tempUser =  UserSignature(_irisdata,_publicKey,_privateKey);
     
     irisdataToUser[_irisdata]= tempUser;
    

}

    


}