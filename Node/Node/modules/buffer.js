const buffer = Buffer.from('Hello World')

console.log(buffer) // buffer의 내용 출력 
console.log(buffer.length) // buffer의 길이 출력
console.log(buffer.toString()) // buffer를 문자열로 변환

const arr = [Buffer.from('나보기가'), Buffer.from('역겨워 가실때에는'), Buffer.from('말없이 고이 보내드리오리다.')]
const bufferJin = Buffer.concat(arr)

console.log(bufferJin.toString())

const buffer3 = Buffer.alloc(5)
console.log(buffer3)