const crypto = require('crypto');

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,  // 키의 크기 (비트 단위)
});

console.log( `publicKey :`, publicKey);
console.log( `privateKey :`, privateKey)

//publicKey : PublicKeyObject [KeyObject] { [Symbol(kKeyType)]: 'public' }
//privateKey : PrivateKeyObject [KeyObject] { [Symbol(kKeyType)]: 'private' }