const NodeRSA = require('node-rsa');

const IpfsUrlHsh="will begenerating soon"
const key = new NodeRSA({b: 512});




// used for encryption
var user_key= key.exportKey('public');

var universal_key= key.exportKey('private')

console.log(user_key)
// console.log(typeof (user_key))




console.log(universal_key)
// console.log(typeof (universal_key))


const newUserKey = new NodeRSA(user_key)

console.log("Good upto here...")

const newUniversalKey = new NodeRSA(universal_key)



console.log("Good upto here...as well...")

var encrytedData= newUserKey.encrypt(IpfsUrlHsh,'base64')



console.log(encrytedData);

var decryptedData= newUniversalKey.decrypt(encrytedData,'utf8')

console.log(decryptedData);