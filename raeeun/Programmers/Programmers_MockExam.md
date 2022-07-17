# 문제 설명
---
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

<br>

# 제한 조건
---

+ 시험은 최대 10,000 문제로 구성되어있습니다.

+ 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
+ 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

<br>

# 입출력 예
|answers|return|
|---|---|
|[1,2,3,4,5]|[1]|
|[1,3,2,4,2]|[1,2,3]|

<br>

## 입출력 예 설명
### 입출력 예 #1

+ 수포자 1은 모든 문제를 맞혔습니다.
+ 수포자 2는 모든 문제를 틀렸습니다.
+ 수포자 3은 모든 문제를 틀렸습니다.

따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

### 입출력 예 #2

+ 모든 사람이 2문제씩을 맞췄습니다.

<br>

# 풀이 코드 (Java)
```java
import java.util.*;

class Solution {
    
    public int ans(int[] answers, int num) {
        int[] answer1 = {1, 2, 3, 4, 5};
        int[] answer2 = {2, 1, 2, 3, 2, 4, 2, 5};
        int[] answer3 = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
        int[] curAns;
        
        if(num == 1) {
            curAns = answer1;
        }
        else if(num == 2) {
            curAns = answer2;
        } 
        else if(num == 3) {
            curAns = answer3;
        } 
        else {
            return -1;
        }
        
        int curIdx = 0;
        int cnt = 0;
        for(int i = 0; i < answers.length; i++, curIdx++) {
            if(curAns[curIdx] == answers[i])
                cnt++;
            
            curIdx %= curAns.length;
        }
        
        return cnt;
    }
    
    
    public int[] solution(int[] answers) {
        // ans로 1번, 2번, 3번 수포자의 정답 갯수를 answer에 일단 넣기
        // n번 인덱스에는 n번 수포자의 정답 갯수가 들어감
        int[] answer = {0, ans(answers, 1), ans(answers, 2), ans(answers, 3)};
        
        // 출력 형식을 위한 Stack 생성
        Queue<Integer> q = new LinkedList<>();
        for(int i = 1; i < answer.length; i++) {
            int target = answer[i];
            
            if(q.isEmpty()) {
                q.add(i);
            }
            else if(answer[q.peek()] < target) {
                q.remove();
                q.add(i);
            }
            else if(answer[q.peek()] == target) {
                q.add(i);
            }
        }
        
        int[] result = new int[q.size()];
        for(int i = 0; i < result.length; i++) {
            result[i] = q.poll();
        }
        
        return result;
    }
}
```
![](https://velog.velcdn.com/images/reyang/post/9db911cc-ded4-43ee-b3d2-729cfce14c72/image.png)
실패. 왤까
아마 NullException이지 않을까 예상..

<br>

# 풀이 코드2 (Java)
```java
import java.util.*;

class Solution {
    
    public int[] answerArr(int[] answers) {
        int[] answer1 = {1, 2, 3, 4, 5};
        int[] answer2 = {2, 1, 2, 3, 2, 4, 2, 5};
        int[] answer3 = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
        int[] curAns = new int[4];

        for(int i = 0; i < answers.length; i++) {
            if(answer1[i % answer1.length] == answers[i]) {
                curAns[1]++;
            }
            if(answer2[i % answer2.length] == answers[i]) {
                curAns[2]++;
            }
            if(answer3[i % answer3.length] == answers[i]) {
                curAns[3]++;
            }
        }

        return curAns;
     }

     public int[] solution(int[] answers) {
         // ans로 1번, 2번, 3번 수포자의 정답 갯수를 answer에 일단 넣기
         // n번 인덱스에는 n번 수포자의 정답 갯수가 들어감
         int[] answer = answerArr(answers);

         // 출력 형식을 위한 Stack 생성
         Queue<Integer> q = new LinkedList<>();
         for(int i = 1; i < answer.length; i++) {
            int target = answer[i];

            if(q.isEmpty()) {
                q.add(i);
            }
            else if(answer[q.peek()] < target) {
                q.remove();
                q.add(i);
            }
            else if(answer[q.peek()] == target) {
                q.add(i);
            }
        }

        // 큐에 있는 답을 배열에 옮기기
        int[] result = new int[q.size()];
        for(int i = 0; i < result.length; i++) {
            result[i] = q.poll();
        }
        
        return result;
    }
}
```
![](https://velog.velcdn.com/images/reyang/post/f5393cdb-4f21-43c7-b46b-c93db4a9f26f/image.png)
성공..!

### 개선된 점
+ 1,2,3번 수포자의 정답 개수를 한번에 계산하여 배열로 리턴 -> 시간복잡도 1/3배

[참고](https://velog.io/@suzinxix/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC)

### 틀린 이유
n번 수포자의 정답 갯수를 리턴하는 함수 ans안에서 오류가 난 것으로 보인다.


```java
public int ans(int[] answers, int num) {

    int[] answer1 = {1, 2, 3, 4, 5};
    int[] answer2 = {2, 1, 2, 3, 2, 4, 2, 5};
    int[] answer3 = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
    int[] curAns;
        
    if(num == 1) {
        curAns = answer1;
    }
    else if(num == 2) {
        curAns = answer2;
    } 
    else if(num == 3) {
        curAns = answer3;
    }
    else {
        return -1;
    }
        
    int curIdx = 0;
    int cnt = 0;
    for(int i = 0; i < answers.length; i++, curIdx++) {
        if(curAns[curIdx] == answers[i])
            cnt++;
            
        curIdx %= curAns.length;
    }
        
    return cnt;
    
}
```
위 ans 함수 중에서..
```java
curIdx %= curAns.length
```
부분에서 ```curIdx```이  ```curAns.length```로 나누어떨어져 0이 되었다고 하더라도 반복문에 의해 ```curIdx++```이 되어 ```curIdx```가 ```0```이 아닌 ```1```로 자꾸 바뀌는 문제점이 있었다..

입출력 예 1, 2는 주어진 ```answer[]```의 길이가 수포자들의 반복되는 답의 길이(5, 8, 10)보다 작았기에 위 코드가 실행될 일이 없어 오류가 안났지만 그것보다 길어지게 되어 런타임에러가 발생한 것 같다!

<br>