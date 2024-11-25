const min = 2 // 시작숫자
const max = 10_000_000 // 끝나는 숫자 (js 문법)
const primes= [] // 소수이면 배열에 넣겠다.

function findPrime(start, range) {
    let isPrime = true;
    const end = start+ range;
    for (let i = start; i < end; i++){ //소수의 호부 탐색
        for (let j = min; j < Math.sqrt(end); j++){ // 해당 값이 소수인지 판단하는 영역
            if (i !== j && i%j === 0 ){
                isPrime = false;
                break
            }
        }
        if (isPrime) {
            primes.push(i)
        }
        isPrime = true;
    }
}

console.time('prime');
findPrime(min,max);
console.timeEnd('prime');
console.log(primes.length)