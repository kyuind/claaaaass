const fs = require('fs');

// const writeStream = fs.createWriteStream('./서시.txt')
// writeStream.on('finish', ()=>{
//     console.log('파일 쓰기 완료')
// })
// writeStream.write('죽는 날까지 하늘을 우러러 \n')
// writeStream.write('한 점 부끄럽이 없기를, \n')
// writeStream.write('잎새에 이는 바람에도 \n')
// writeStream.write('나는 괴로워했다.')
// writeStream.end()

// const readStream = fs.createReadStream('./서시.txt', {highWaterMark : 16})
// const data= []

// readStream.on('data', (chunk)=>{
//     data.push(chunk);
// })

// readStream.on('end', ()=>{
//     console.log('end :', Buffer.concat(data).toString())
// })

// readStream.on('error', (err)=>{
//     console.log('err', err);
// })

const readStream = fs.createReadStream('./서시.txt');
const writeStream = fs.createWriteStream('./서시2.txt')

readStream.pipe(writeStream)
