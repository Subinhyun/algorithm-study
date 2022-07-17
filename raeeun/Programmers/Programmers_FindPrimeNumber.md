# 문제 설명
---
한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

<br>

# 제한 사항
---
+ numbers는 길이 1 이상 7 이하인 문자열입니다.

+ numbers는 0~9까지 숫자만으로 이루어져 있습니다.
+ "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

<br>

# 입출력 예
|numbers|return|
|---|---|
|"17"|3|
|"011"|2|

<br>

## 입출력 예 설명
### 예제 #1
[1, 7]으로는 소수 [7, 17, 71]를 만들 수 있습니다.

### 예제 #2
[0, 1, 1]으로는 소수 [11, 101]를 만들 수 있습니다.

+ 11과 011은 같은 숫자로 취급합니다.

<br>

# 풀이 코드 (Java)
```java
import java.util.*;

// 모든 조합을 구하기 위한 순열 클래스
class Permutation {
    private int n;
    private int r;
    private int[] now; // 현재 순열
    private ArrayList<ArrayList<Integer>> result; // 모든 순열

    public ArrayList<ArrayList<Integer>> getResult() {
        return result;
    }

    public Permutation(int n, int r) {
        this.n = n;
        this.r = r;
        this.now = new int[r];
        this.result = new ArrayList<ArrayList<Integer>>();
    }

    public void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public void permutation(int[] arr, int depth) {
        // 현재 순열의 길이가 r일 때 결과 저장
        if (depth == r) {
            ArrayList<Integer> temp = new ArrayList<>();
            for (int i = 0; i < now.length; i++) {
                temp.add(now[i]);
            }
            result.add(temp);
            return;
        }
        for (int i = depth; i < n; i++) {
            swap(arr, i, depth);
            now[depth] = arr[depth];
            permutation(arr, depth + 1);
            swap(arr, i, depth);
        }
    }
}

// 에라토스테네스의 체 클래스
class Era {
    private int n;
    private boolean[] isPrime;

    public Era(int n) {
        this.n = n;
        this.isPrime = new boolean[n];
        Arrays.fill(isPrime, true);
        isPrime[0] = isPrime[1] = false;

        for(int i = 2; i < n; i++) {

            if (isPrime[i]) {
                for (int j = i * 2; j < n; j += i) {
                    isPrime[j] = false;
                }
            }

        }
    }

    public int getN () {
        return this.n;
    }

    public boolean[] getIsPrime() {
        return this.isPrime;
    }

}

class Solution {
    public int solution(String numbers) {
        
        int answer = 0;

        // number에 숫자들 저장
        int[] number = new int[numbers.length()];
        for(int i = 0; i < numbers.length(); i++) {
            number[i] = Character.getNumericValue(numbers.charAt(i));
        }

        // 1~10000000까지의 소수를 판별하는 Era 객체 생성
        Era e = new Era(10000000);
        boolean[] isPrime = e.getIsPrime();

        // 중복을 체크할 check[] ex. 1과 01은 같은 수
        boolean[] check = new boolean[10000000];
        Arrays.fill(check, false);
        
        // 길이 1~ numbers.length - 1 까지의 모든 조합 카운트
        for(int r = 1; r <= number.length; r++) {
            
            //Permutation 객체 생성
            Permutation p = new Permutation(number.length, r);
            p.permutation(number, 0);
            ArrayList<ArrayList<Integer>> result = p.getResult();

            for(int i = 0; i < result.size(); i++) {
                
                // 모든 조합을 이어붙일 stringBuilder 객체 생성
                StringBuilder sb = new StringBuilder();

                for(int j = 0; j < result.get(i).size(); j++) {
                    sb.append(result.get(i).get(j));
                }

                int num = Integer.parseInt(sb.toString());
                
                // 이미 판별한 수라면 continue
                if(check[num]) continue;
                
                // 소수라면 answer++
                if(isPrime[num]) {
                    check[num] = true;
                    answer++;
                }
            }

        }

        return answer;
    }
}
```
![](https://velog.velcdn.com/images/reyang/post/57dea6d8-aebe-4cfc-8aad-2ccb4eb0014a/image.png)

정답....!!!!!!!

<br>

## 풀이
![](https://velog.velcdn.com/images/reyang/post/8a5a6306-17be-4e30-80d3-ceb912a8ec21/image.png)

[순열 코드 참고](https://ndb796.tistory.com/429)

<br>