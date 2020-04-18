import UIDGenerator from 'uid-generator';


// Generate UID to associate each specific user Default is a 128-bit UID encoded in base58
const UIDGenerator = require('uid-generator');
const uidgen = new UIDGenerator();
let UID = uidgen.generateSync();
console.log(UID);

export default UID;