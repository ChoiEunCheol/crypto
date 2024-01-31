const crypto = require('crypto');
const fs = require('fs');

function fileFingerprint(filePath) {
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash('sha256');
        const stream = fs.createReadStream(filePath);

        stream.on('data', (chunk) => {
            hash.update(chunk);
        });

        stream.on('end', () => {
            const fingerprint = hash.digest('hex');
            resolve(fingerprint);
        });

        stream.on('error', (err) => {
            reject(err);
        });
    });
}

// 파일 지문 생성 예시
fileFingerprint('./example.txt')
    .then(fingerprint => console.log('File fingerprint:', fingerprint))
    .catch(err => console.error('Error:', err));
