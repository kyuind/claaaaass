console.log(1);
setTimeout(delayPrint, 1000); //비동기 함수
console.log(3);

function delayPrint(){
    console.log(2)
} //callback 함수


const myPromise = new Promise((resolve, rejeck) => {
    const condition = false;
    if (condition) {
        resolve('성공');
    }else{
        rejeck('실패');
    }
});

myPromise.then(res =>{
    console.log(res);
}).catch(err=>{
    console.error(err);
})