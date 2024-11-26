const fs = require('fs')

// const writeStream = fs.createWriteStream('./서시완.txt')

// writeStream.on('finish', ()=>{
//     console.log('파일 쓰기 완료')
// })

// writeStream.write('별을 노래하는 마음으로 \n')
// writeStream.write('모든 죽어가는 것을 사랑해야지 \n')
// writeStream.write('그리고 나한테 주어진 길을 \n')
// writeStream.write('걸어가야겠다. \n')
// writeStream.write('오늘 밤에도 별이 바람에 스치운다. \n')
// writeStream.end()

const readStream = fs.createReadStream('./서시완.txt',{highWaterMark: 16})
const data= []

readStream.on('data', (chunk)=>{
    data.push(chunk)
})
readStream.on('end', ()=>{
    console.log('end :', Buffer.concat(data),toString())
})
readStream.on('error', (err)=>{
    console.log('err',err)
})