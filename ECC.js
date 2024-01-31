const crypto = require('crypto');

// ECC 키 쌍 생성
const { publicKey, privateKey } = crypto.generateKeyPairSync('ec', {
    namedCurve: 'secp256k1' // 타원 곡선을 지정, Bitcoin 및 Ethereum에서 널리 사용됨
});

// 디지털 서명 생성
const sign = crypto.createSign('SHA256');
sign.update('메시지');
const signature = sign.sign(privateKey, 'hex');

// console.log('sign : ',sign);
// console.log('signature : ',signature);
// sign :  Sign {
//     _events: {
//       close: undefined,
//       error: undefined,
//       prefinish: undefined,
//       finish: undefined,
//       drain: undefined
//     },
//     _writableState: WritableState {
//       highWaterMark: 16384,
//       length: 0,
//       corked: 0,
//       onwrite: [Function: bound onwrite],
//       writelen: 0,
//       bufferedIndex: 0,
//       pendingcb: 0,
//       [Symbol(kState)]: 17580812,
//       [Symbol(kBufferedValue)]: null
//     },
//     _maxListeners: undefined,
//     [Symbol(kHandle)]: Sign {},
//     [Symbol(shapeMode)]: true,
//     [Symbol(kCapture)]: false
//   }
//   signature :  3045022100c28997065e00e06068cea54c79d7deec2ff65c192056da09f08ef366728905aa022073a24502fea2c4656de6a60423bb5bbc7d1053a21533a7cea53b06faeedee4ba


// 디지털 서명 검증
const verify = crypto.createVerify('SHA256');
verify.update('메시지');
const isVerified = verify.verify(publicKey, signature, 'hex');

// console.log('verify : ',verify);
// console.log('isVerified : ',isVerified);
// verify :  Verify {
//     _events: {
//       close: undefined,
//       error: undefined,
//       prefinish: undefined,
//       finish: undefined,
//       drain: undefined
//     },
//     _writableState: WritableState {
//       highWaterMark: 16384,
//       length: 0,
//       corked: 0,
//       onwrite: [Function: bound onwrite],
//       writelen: 0,
//       bufferedIndex: 0,
//       pendingcb: 0,
//       [Symbol(kState)]: 17580812,
//       [Symbol(kBufferedValue)]: null
//     },
//     _maxListeners: undefined,
//     [Symbol(kHandle)]: Verify {},
//     [Symbol(shapeMode)]: true,
//     [Symbol(kCapture)]: false
//   }
//   isVerified :  true