# 문제 설명
---
프로그래머스 팀에서는 기능 개선 작업을 수행 중입니다. 각 기능은 진도가 100%일 때 서비스에 반영할 수 있습니다.

또, 각 기능의 개발속도는 모두 다르기 때문에 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고, 이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와 각 작업의 개발 속도가 적힌 정수 배열 speeds가 주어질 때 각 배포마다 몇 개의 기능이 배포되는지를 return 하도록 solution 함수를 완성하세요.
<br>

# 제한 사항
---
+ 작업의 개수(progresses, speeds배열의 길이)는 100개 이하입니다.


+ 작업 진도는 100 미만의 자연수입니다.


+ 작업 속도는 100 이하의 자연수입니다.


+ 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정합니다. 예를 들어 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어집니다.

<br>

# 입출력 예
|progresses|speeds|return|
|---|---|---|
|[93, 30, 55]|[1, 30, 5]|[2, 1]|
|[95, 90, 99, 99, 80, 99]|[1, 1, 1, 1, 1, 1]|[1, 3, 2]|

<br>

## 입출력 예 설명
### 입출력 예 #1
첫 번째 기능은 93% 완료되어 있고 하루에 1%씩 작업이 가능하므로 7일간 작업 후 배포가 가능합니다.
두 번째 기능은 30%가 완료되어 있고 하루에 30%씩 작업이 가능하므로 3일간 작업 후 배포가 가능합니다. 하지만 이전 첫 번째 기능이 아직 완성된 상태가 아니기 때문에 첫 번째 기능이 배포되는 7일째 배포됩니다.
세 번째 기능은 55%가 완료되어 있고 하루에 5%씩 작업이 가능하므로 9일간 작업 후 배포가 가능합니다.

따라서 7일째에 2개의 기능, 9일째에 1개의 기능이 배포됩니다.


### 입출력 예 #2
모든 기능이 하루에 1%씩 작업이 가능하므로, 작업이 끝나기까지 남은 일수는 각각 5일, 10일, 1일, 1일, 20일, 1일입니다. 어떤 기능이 먼저 완성되었더라도 앞에 있는 모든 기능이 완성되지 않으면 배포가 불가능합니다.

따라서 5일째에 1개의 기능, 10일째에 3개의 기능, 20일째에 2개의 기능이 배포됩니다.

<br>

# 풀이 코드 (Java)
```java
import java.util.*;

class Solution {
    
    // 기능 개발 날짜 계산 함수
    public int calDay(int progress, int speed) {
        int res = 0;

        while(progress < 100) {
            progress += speed;
            res++;
        }

        return res;
    }

    public int[] solution(int[] progresses, int[] speeds) {

        Stack<Integer> s = new Stack<>();
        int answerLen = 0;
        
        // 전체 기능 수 저장
        int numOfFunction = progresses.length;
        int[] temp = new int[numOfFunction];
        
        // first : 스택 안의 최고 우선순위 기능
        int first = -1;
        for(int i = 0; i < numOfFunction; i++) {
            // 기능 개발이 완료될때까지 걸리는 시간 cur
            int cur = calDay(progresses[i], speeds[i]);

            // 스택이 비지 않았다면
            if(!s.isEmpty()) {
                // 우선순위 높은 기능이 이미 개발됨
                if(cur > first) {
                    temp[answerLen++] = s.size();
                    s.setSize(0);
                }
                else {
                    s.push(cur);
                }
            }

            // 스택이 비었다면
            if(s.isEmpty()) {
                // 현재 스택에 넣어지는 애가 최고 우선순위가 됨
                first = cur;
                s.push(first);
            }

        }

		// 남은 스택 정리
        if(!s.isEmpty()) {
            temp[answerLen++] = s.size();
            s.setSize(0);
        }

        // return할 answer배열에 정답(temp) 옮기기
        int[] answer = new int[answerLen];
        for(int i = 0; i < answerLen; i++){
            answer[i] = temp[i];
        }

        return answer;
    }
}
```
## 변수 설명
```cur``` = progresses[]에서 현재 순회하고 있는 기능이 개발될 일수
```first``` = 스택 내의 최고 우선순위 기능이 개발될 일수

## 풀이

1. 스택이 비지 않았을 경우
	1. ```cur > first```
    	+ 현재 스택의 사이즈 저장
        + 스택을 비워준다.  
    2. ```cur <= first```
    	+ cur을 스택에 넣어준다
        


2. 스택이 비었을 경우
	+ ```cur```을 스택에 넣는다.
    + ```cur```을 ```first```로 설정한다. (```cur```은 스택에서 최고 우선순위임)
    
<br>

![](https://velog.velcdn.com/images/reyang/post/3077e24a-7116-48ec-b1a1-552bad9600d5/image.png)
굿

