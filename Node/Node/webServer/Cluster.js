const cluster = require('cluster');
const http = require('http');
const os = require('os');

if (cluster.isMaster) {
    console.log(`마스터 프로세스 : ${process.pid}`)
    const numCPUs= os.cpus().length
    for (let i= 0; i < numCPUs; i++){
        cluster.fork() // 클러스터 워커들 생성
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커 종료`)
        console.log(`code: ${code} / signal : ${signal}`);
        cluster.fork();
    })
} else {
    http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Cluster</h1<')
        setTimeout(()=>{
            process.exit(1);
        },3000) // 3초에 하나씩 워커 종료
    }).listen(8080);
    console.log(`${process.pid} 워커 실행`)
}