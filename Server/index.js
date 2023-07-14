const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();
const { ThirdwebStorage } = require("@thirdweb-dev/storage");
const fs = require("fs");



app.use(express.json());
app.use(cors());
//app.use(fileUpload());

app.post("/upload-to-ipfs", async(req, res) => {
  const file = req.file
  // let uploadPath =  __dirname+"./Data/" + filename;

  // file.mv(uploadPath, (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  // });



  const storage = new ThirdwebStorage();

  try {

   const ipfsHash = await storage.upload(file.buffer);
   res.status(200).send({msg:'Success',hash:ipfsHash});

    
  } catch (error) {
    console.log(error);
    res.status(500).send({msg:'error',});
  }



  
  
});

app.listen(8080, () => {
    console.log('Server is running on port 3000');
  });
  