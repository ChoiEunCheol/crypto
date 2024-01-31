const crypto = require('crypto');

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,  // 키의 크기 (비트 단위)
});

// console.log( `publicKey :`, publicKey);
//publicKey : PublicKeyObject [KeyObject] { [Symbol(kKeyType)]: 'public' }
// console.log( `privateKey :`, privateKey)
//privateKey : PrivateKeyObject [KeyObject] { [Symbol(kKeyType)]: 'private' }

function encryptData(data, publicKey) {
    const encryptedData = crypto.publicEncrypt(
        {
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
        },
        Buffer.from(data)
    );

    return encryptedData.toString("base64");
}

const data = "암호화할 데이터";
const encrypted = encryptData(data, publicKey);
console.log("Encrypted Data:", encrypted);
//Encrypted Data: F7kDU2S6mZoZlOUfPmRCbT+ZD9bDXbo2O//SM8cJzKix1zrOmUGYj7exLUWZyAB4HbGTlPsEHLpdZp8SjqmVoJdTLoZeEYBJt2M0PY+Indcw31c0qnXpIefpLeBS/F7Q8CWpHOkFnlHt6NwMokp8vYOvVCV9jOsH70JXW3UNClpVr6y13cp3NFMpnhuFSluPOwP9n77e8tplLDuCJqZPvJXNE94YBG49+MUQxCXaBlLJYbzbDMqB31oVrC+p6QRnyHzRzUMntJ+51zd9cU/6jWHNSbM95aowTFUxEFQes6r7tWSYn6HubY8JcMXT1gFKCUnCCBHOXgbd/bmZg62pyg==
