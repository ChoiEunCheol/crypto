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

// example.txt : file fingerprint를 테스트하기 위한 예시 파일입니다.
// File fingerprint: 837fda7c8870b9add8b3e4feaeb495031b22e1b33a6f8f26c68edfd3b99021c9

// example.txt의 내용을 바꿈

// file fingerprint를 테스트하기 위한 예시 파일입니다. 기존 파일의 내용이 변경되면?
// File fingerprint: 85e566343d7cc7a89f23d5b02be7ca80ca006bf7b4ccf346d8c928fd860a4f14