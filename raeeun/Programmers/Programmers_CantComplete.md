# 문제 설명
---
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

<br>

# 제한 사항
---
+ 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.

+ completion의 길이는 participant의 길이보다 1 작습니다.

+ 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.

+ **참가자 중에는 동명이인이 있을 수 있습니다.**

<br>

# 입출력 예
|participant|completion|return|
|---|---|---|
|["leo", "kiki", "eden"]|["eden", "kiki"]|"leo"|
|["marina", "josipa", "nikola", "vinko", "filipa"]|["josipa", "filipa", "marina", "nikola"]|"vinko"|
|["mislav", "stanko", "mislav", "ana"]|["stanko", "ana", "mislav"]|"mislav"|

<br>

# 문제 풀이 (Java)
---
```java
import java.util.*;

class Solution {
    
    public String solution(String[] participant, String[] completion) {
        String answer = "";
        
        ArrayList<String> participantAl = new ArrayList<>();
        for(int i = 0; i < participant.length; i++) {
            participantAl.add(participant[i]);
        }
        
        // remove(객체) 이용
        for (int i = 0; i < completion.length; i++) {
            participantAl.remove(new String(completion[i]));
        }
        
        answer = participantAl.get(0);
        return answer;
    }
}
```

<br>

### 실행 결과
![](https://velog.velcdn.com/images/reyang/post/8ce8d730-2c34-4511-a25a-7c242ee4624b/image.png)

### 시간 초과 이유는?
+ ```ArrayList.remove()```의 시간 복잡도 : O(N)
	-> 최대 참여자 수 : 100,0000
    -> 예상 시간 복잡도 : O(N^2)

<br>

## 수정
---
```java
import java.util.*;

class Solution {
    
    static int BinarySearch(ArrayList<String> arr, String target) {

        int l = 0;
        int r = arr.size() - 1;

        while(l <= r) {

            int mid = (l + r) / 2;

            if(arr.get(mid).equals(target)) {
                return mid;
            }
            else if(arr.get(mid).compareTo(target) < 0) {
                l = mid + 1;
            }
            else if(arr.get(mid).compareTo(target) > 0) {
                r = mid - 1;
            }

        }

        return -1;

    }

    static String solution(String[] participant, String[] completion) {
        String answer = "";

        // ArrayList에 넣어주기
        ArrayList<String> participantAl = new ArrayList<>();
        for(String str : participant ){
            participantAl.add(str);
        }

        // BinarySearch의 기본 작업 Sort
        Collections.sort(participantAl);

        for(String target : completion) {
            int removeIndex = BinarySearch(participantAl, target);
            participantAl.remove(removeIndex);
        }

        answer = participantAl.get(0);
        return answer;
    }
    
}
```
<br>

### 실행 결과
![](https://velog.velcdn.com/images/reyang/post/4d816b64-6ba9-41f7-9424-d02feb83c2e8/image.png)

### 풀이
+ 이진 탐색으로 해결
+ 이진 탐색의 시간 복잡도 : O(log N)
	-> 프로그램의 시간 복잡도 : O(N log N)
    -> N log N = 3000,0000 < 1억. 시간초과 안걸림
    
<br>