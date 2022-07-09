# 문제 설명
---
H-Index는 과학자의 생산성과 영향력을 나타내는 지표입니다. 어느 과학자의 H-Index를 나타내는 값인 ```h```를 구하려고 합니다. 위키백과1에 따르면, H-Index는 다음과 같이 구합니다.

어떤 과학자가 발표한 논문 ```n```편 중, ```h```번 이상 인용된 논문이 ```h```편 이상이고 나머지 논문이 h번 이하 인용되었다면 ```h```의 최댓값이 이 과학자의 H-Index입니다.

어떤 과학자가 발표한 논문의 인용 횟수를 담은 배열 citations가 매개변수로 주어질 때, 이 과학자의 H-Index를 return 하도록 solution 함수를 작성해주세요.

<br>

# 제한 사항
---
+ 과학자가 발표한 논문의 수는 1편 이상 1,000편 이하입니다.

+ 논문별 인용 횟수는 0회 이상 10,000회 이하입니다.

<br>

# 입출력 예
|citations|return|
|---|---|
|[3, 0, 6, 1, 5]|3|

<br>

### 입출력 예 설명
이 과학자가 발표한 논문의 수는 5편이고, 그중 3편의 논문은 3회 이상 인용되었습니다. 그리고 나머지 2편의 논문은 3회 이하 인용되었기 때문에 이 과학자의 H-Index는 3입니다.

<br>

# 문제 풀이 (Java)
```java
import java.util.*;

class Solution {
    
    public int solution(int[] citations) {
        int answer = 0;

		// citations[] 정렬 작업
        Arrays.sort(citations);

        // h-index를 citations[] 중 최댓값으로 초기화
        int h = citations[citations.length - 1];
        while(h >= citations[0]) {
        
            // citations 논문을 citationsAl로 복사
            ArrayList<Integer> citationsAl = new ArrayList<>();
            for(int i : citations) {
                citationsAl.add(i);
            }

            // h번 이상 인용된 논문을 remove -> citationsAl에는 나머지 논문들이 저장.
            int cnt = 0;
            int i = citations.length - 1;
            for(; i >= 0 && citationsAl.get(i) >= h; i--) {
                citationsAl.remove(i);
                cnt++;
            }
            
            // h번 이상 인용된 논문이 h편 이상인지 체크
            if(cnt < h) {
                h--;
                continue;
            }

            // 나머지 논문이 h번 이하 인용되었는지 체크
            if(citationsAl.get(i) <= h) {
                answer = h;
                break;
            }

            h--;
        }

        return answer;
    }
    
}
```

## 결과
![](https://velog.velcdn.com/images/reyang/post/3866111d-22e2-4da0-b7fb-555af923f668/image.png)
왜지?

<br>

# 풀이 코드 2
```java
import java.util.*;

class Solution {
    
    public int solution(int[] citations) {
        int answer = 0;

		// citations[] 정렬 작업
        Arrays.sort(citations);

        // h-index를 citations[] 중 최댓값으로 초기화
        int h = citations[citations.length - 1];
        while(h >= citations[0]) {
            
            // citations 논문을 citationsAl로 복사
            ArrayList<Integer> citationsAl = new ArrayList<>();
            for(int i : citations) {
                citationsAl.add(i);
            }

            // 복사한 citationsAl에서 h번 이상 인용된 논문을 remove -> citationsAl에는 나머지 논문들이 저장.
            // cnt는 h번 이상 인용된 논문들의 수
            int cnt = 0;
            int i = citations.length - 1;
            for(; i >= 0 && citationsAl.get(i) >= h; i--) {
                citationsAl.remove(i);
                cnt++;
            }
            
            // h번 이상 인용된 논문이 h편 이상인지 체크
            if(cnt < h) {
                h--;
                continue;
            }
            
            if(citationsAl.size() == 0) {
                return h;
            }

            // 나머지 논문이 h번 이하 인용되었는지 체크
            // citationsAl.get(i)는 citationsAl상에서 가장 큰 값
            if(citationsAl.get(i) <= h) {
                return h;
            }

            h--;
        }

        answer = citations[0];
        return answer;
    }
    
}
```


![](https://velog.velcdn.com/images/reyang/post/b76f5359-7d25-4eae-a771-2e337346dbe4/image.png)

<br>

# 풀이 코드 3
```java
import java.util.*;

class Solution {
    
    public int solution(int[] citations) {
        int answer = 0;

		// citations[] 정렬 작업
        Arrays.sort(citations);

        // h-index를 citations[] 중 최댓값으로 초기화
        int h = citations[citations.length - 1];
        while(h >= 0) {
            
            // citations 논문을 citationsAl로 복사
            ArrayList<Integer> citationsAl = new ArrayList<>();
            for(int i : citations) {
                citationsAl.add(i);
            }

            // 복사한 citationsAl에서 h번 이상 인용된 논문을 remove -> citationsAl에는 나머지 논문들이 저장.
            // cnt는 h번 이상 인용된 논문들의 수
            int cnt = 0;
            int i = citations.length - 1;
            for(; i >= 0 && citationsAl.get(i) >= h; i--) {
                citationsAl.remove(i);
                cnt++;
            }
            
            // h번 이상 인용된 논문이 h편 이상인지 체크
            if(cnt < h) {
                h--;
                continue;
            }
            
            if(citationsAl.size() == 0) {
                return h;
            }

            // 나머지 논문이 h번 이하 인용되었는지 체크
            // citationsAl.get(i)는 citationsAl상에서 가장 큰 값
            if(citationsAl.get(i) <= h) {
                return h;
            }

            h--;
        }

        answer = h;
        return answer;
    }
    
}
```

![](https://velog.velcdn.com/images/reyang/post/130a9cef-7546-41e8-9204-30a8daf9c831/image.png)

테스트 케이스를 찾아본 결과..
```citations[]```가 ```{10, 100}```일때 결과가 ```2```가 나와야하는데
h의 최솟값을 citations[0]으로 설정해놔서 2가 나올수가 없었다.
while문을 수정하니 정답 ㅎㅎ