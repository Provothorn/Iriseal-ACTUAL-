import React from 'react';
import { ethers } from "ethers";
import abi from '../abi/abi.json'

import { Link } from 'react-router-dom';


export default Signuppage;

const string1=`[{"Name":"JPEG","Parent":null,"IsEmpty":false,"Tags":[{"Type":-3,"TagType":-3,"Description":"Baseline","HasName":true,"HasTagName":true,"Name":"Compression Type","TagName":"Compression Type","DirectoryName":"JPEG"},{"Type":0,"TagType":0,"Description":"8 bits","HasName":true,"HasTagName":true,"Name":"Data Precision","TagName":"Data Precision","DirectoryName":"JPEG"},{"Type":1,"TagType":1,"Description":"280 pixels","HasName":true,"HasTagName":true,"Name":"Image Height","TagName":"Image Height","DirectoryName":"JPEG"},{"Type":3,"TagType":3,"Description":"320 pixels","HasName":true,"HasTagName":true,"Name":"Image Width","TagName":"Image Width","DirectoryName":"JPEG"},{"Type":5,"TagType":5,"Description":"1","HasName":true,"HasTagName":true,"Name":"Number of Components","TagName":"Number of Components","DirectoryName":"JPEG"},{"Type":6,"TagType":6,"Description":"Y component: Quantization table 0, Sampling factors 1 horiz/1 vert","HasName":true,"HasTagName":true,"Name":"Component 1","TagName":"Component 1","DirectoryName":"JPEG"}],"TagCount":6,"HasError":false,"Errors":[]},{"Name":"JFIF","Parent":null,"IsEmpty":false,"Tags":[{"Type":5,"TagType":5,"Description":"1.1","HasName":true,"HasTagName":true,"Name":"Version","TagName":"Version","DirectoryName":"JFIF"},{"Type":7,"TagType":7,"Description":"none","HasName":true,"HasTagName":true,"Name":"Resolution Units","TagName":"Resolution Units","DirectoryName":"JFIF"},{"Type":8,"TagType":8,"Description":"1 dot","HasName":true,"HasTagName":true,"Name":"X Resolution","TagName":"X Resolution","DirectoryName":"JFIF"},{"Type":10,"TagType":10,"Description":"1 dot","HasName":true,"HasTagName":true,"Name":"Y Resolution","TagName":"Y Resolution","DirectoryName":"JFIF"},{"Type":12,"TagType":12,"Description":"0","HasName":true,"HasTagName":true,"Name":"Thumbnail Width Pixels","TagName":"Thumbnail Width Pixels","DirectoryName":"JFIF"},{"Type":13,"TagType":13,"Description":"0","HasName":true,"HasTagName":true,"Name":"Thumbnail Height Pixels","TagName":"Thumbnail Height Pixels","DirectoryName":"JFIF"}],"TagCount":6,"HasError":false,"Errors":[]},{"Name":"Huffman","Parent":null,"IsEmpty":false,"Tags":[{"Type":1,"TagType":1,"Description":"2 Huffman tables","HasName":true,"HasTagName":true,"Name":"Number of Tables","TagName":"Number of Tables","DirectoryName":"Huffman"}],"TagCount":1,"HasError":false,"Errors":[]},{"Name":"File Type","Parent":null,"IsEmpty":false,"Tags":[{"Type":1,"TagType":1,"Description":"JPEG","HasName":true,"HasTagName":true,"Name":"Detected File Type Name","TagName":"Detected File Type Name","DirectoryName":"File Type"},{"Type":2,"TagType":2,"Description":"Joint Photographic Experts Group","HasName":true,"HasTagName":true,"Name":"Detected File Type Long Name","TagName":"Detected File Type Long Name","DirectoryName":"File Type"},{"Type":3,"TagType":3,"Description":"image/jpeg","HasName":true,"HasTagName":true,"Name":"Detected MIME Type","TagName":"Detected MIME Type","DirectoryName":"File Type"},{"Type":4,"TagType":4,"Description":"jpg","HasName":true,"HasTagName":true,"Name":"Expected File Name Extension","TagName":"Expected File Name Extension","DirectoryName":"File Type"}],"TagCount":4,"HasError":false,"Errors":[]},{"Name":"File","Parent":null,"IsEmpty":false,"Tags":[{"Type":1,"TagType":1,"Description":"tmpB7BF.tmp","HasName":true,"HasTagName":true,"Name":"File Name","TagName":"File Name","DirectoryName":"File"},{"Type":2,"TagType":2,"Description":"12161 bytes","HasName":true,"HasTagName":true,"Name":"File Size","TagName":"File Size","DirectoryName":"File"},{"Type":3,"TagType":3,"Description":"Fri Jul 14 06:34:37 +00:00 2023","HasName":true,"HasTagName":true,"Name":"File Modified Date","TagName":"File Modified Date","DirectoryName":"File"}],"TagCount":3,"HasError":false,"Errors":[]}]'`
const pub="hyJLQs+OFHstkxW1+EFgkkoe1u5paDNJugJll/gLmpqU6jBP5sMUblugQEiqWuyn6LKvDBvEf9qVoXDwhn5cEGJLRRF9JvWlMZu+SdTkgGFtu/koz3+dg8V97TqVIGR6baunbnVfOEApmELz7NfyBK3KmPYdKexmHTU1kP0SoJqgpHA8J3mdIhBReOT/V+iSZPBIWANr18xN3vGulCOZHjsiw0bp5dn5FW8f3lPsDEJwANH7XmqtW8XqAPCnPeKD"
const pri=`MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALoQtbsCs0+F/nGKiUtDXMWWhkRa+sB0oKTZ9nsAiPt8QOE1l6bKSp8kxwLEBKqozAEc5x6DXDgEQs1Oeak7Js0CAwEAAQ==`
const connnectToBlock=async()=>{

  const provider = new ethers.providers.Web3Provider(window.ethereum)
 const Address= "0xe66AEc217CBef290F3cbFe74bc2659Cf8AdE3474"

await provider.send("eth_requestAccounts", []);
const signer = provider.getSigner()
const contract = new ethers.Contract(Address, abi, provider)
const C_Signer = contract.connect(signer),
tx = C_Signer.AddUserToPublicKey(string1,pri,pub)


}




function Signuppage(){
    return(
      <div class="logindivv" id="glassmorphicc">
        <img class="logo" src="https://cdn.shopify.com/s/files/1/0655/6853/products/L_handle2_a96eaa77-2acf-484c-9c13-a0cb0663c8fc_2048x.jpg?v=1594473759" height="120" width="250"/>
        <br/><br/>
        <form action="">
          <div class="form-group">
      <label for="name"><b>Name</b></label>
      <input type="text" class="form-control" id="exampleInputname"  placeholder="Enter Name"/>
     
    </div>
          <br/>
      <div class="form-group">
      <label for="exampleInputEmail1"><b>Phone number</b></label>
      <input type="text" class="form-control" id="exampleInputnum"  placeholder="Enter phone number"/>
     
    </div>
          <br/>
    <div class="form-group">
      <label for="exampleInputEmail1"><b>Email address</b></label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
     
    </div>
          <br/>
    <div class="form-group">
      <label for="exampleInputPassword1"><b>Password</b></label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>

    <div class="form-group">
      <label for="exampleInputIris"><b>Iris File</b></label>
      <input type="file" class="form-control" id="exampleInputPassword1" placeholder="Your Iris"/>
    </div>

    <br/>
    <Link to="/homepage">
    <button type="submit" class="btn btn-primary" onClick={connnectToBlock}>Submit</button>
    </Link>
  </form>
     
        </div>
    )
  }
   
  