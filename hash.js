const crypto = require('crypto');

const hash = crypto.createHash('sha256');
hash.update('b');
console.log(hash.digest('hex'));