//소수 판별 함수
function isPrime(num) {
  if (num < 2) return false; //2보다 작은 수 중에 소수는 없다
  //2부터 num-1의 수 중에서 num으로 나누어떨어지는 수가 있다면 소수가 아님

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
        }
        //그 외에는 true를 return
        return true;
    }