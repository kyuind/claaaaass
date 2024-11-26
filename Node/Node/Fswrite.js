const fs = require('fs').promises

const context = ('./진달래꽃.txt')


//promises 형태의 사용법 비동기
// fs.writeFile('test.txt',context, 'utf8')
//     .then((data)=>{
//         console.log('파일 쓰기 완료')
//     })
//     .catch((err)=>{
//         console.log(err)
//     })

// async awit(비동기 수행을 알려주는)형태의 사용법 비동기 async가 붙어 있어도 function으로 취급 await 붙으면서 비동기처리
async function writeFile(path,context) { 
    try{
        await fs.writeFile(path,context,'utf8')
        console.log('파일 쓰기 완료')
    }
    catch (err){
        console.log('파일 쓰기 실패',err)
    }
    
}

writeFile('./test.txt',context)

