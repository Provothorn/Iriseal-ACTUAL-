const NodeRSA = require('node-rsa');
const { ThirdwebStorage } = require("@thirdweb-dev/storage");
const fs = require("fs");



// Test for Ipfs
const storage = new ThirdwebStorage();

const key = new NodeRSA({b: 512});
let upload




(async () => {
    upload = await storage.upload(fs.readFileSync("test.pdf"));

     //used for encryption
    var user_key= key.exportKey('public');
    
    var universal_key= key.exportKey('private')

    console.log("=========================================================================================================")
    
    console.log(user_key)
    // console.log(typeof (user_key))
    
    console.log("=======================================================================================================")
    
    
    //console.log(universal_key)
    // console.log(typeof (universal_key))
    
    
    const newUserKey = new NodeRSA(user_key)
    
    console.log("Good upto here...")
    
    const newUniversalKey = new NodeRSA(universal_key)
    
    
    
    console.log("Good upto here...as well...")
    
    var encrytedData= newUserKey.encrypt(upload,'base64')
    
    
    
    console.log(encrytedData);
    
    var decryptedData= newUniversalKey.decrypt(encrytedData,'utf8')
    
    console.log(decryptedData);





    

  })();


  
//   import { useStorageUpload } from "@thirdweb-dev/react";
//   import React, { useState } from "react";
  
//   export default function upload() {
//     const [file, setFile] = useState();
//     const { mutateAsync: upload } = useStorageUpload();
  
//     const uploadToIpfs = async () => {
//       const uploadUrl = await upload({
//         data: [file],
//         options: { uploadWithGatewayUrl: true, uploadWithoutDirectory: true },
//       });
//       alert(uploadUrl);
//     };
  
//     return (
//       <div>
//         <input type="file" onChange={(e) => setFile(e.target.files[0])} />
//         <button onClick={uploadToIpfs}>Upload</button>
//       </div>
//     );
//   }