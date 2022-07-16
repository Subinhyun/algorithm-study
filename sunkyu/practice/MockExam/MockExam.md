# [모의고사](https://school.programmers.co.kr/learn/courses/30/lessons/42840)

## 문제 설명

> 수포자는 수학을 포기한 사람의 준말  
> 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려고 한다.  
> 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍는다.  

- 1번 수포자가 찍는 방식 : 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...  
- 2번 수포자가 찍는 방식 : 2, 1, 2, 3, 2, 4, 2, 6, 2, 1, 2, 3 ,2, 4, 2, 5, ...    
- 3번 수포자가 찍는 방식 : 3, 3, 1 ,1, 2, 2, 3, 3, 4, 4, 3 ,3, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, ...  

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 떄,  
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해라,

## 제한 조건

- 시험은 최대 10,000 문제로 구성되어있다.
- 문제의 정답은 1, 2, 3, 4, 5 중 하나이다.
- 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬하라

## 입출력 예

| answers         | return    |
|-----------------|-----------|
| [1, 2, 3, 4, 5] | [1]       |
| [1, 3, 2, 4, 2] | [1, 2, 3] |

## 풀이 아이디어

- 정답을 count한다.
- 1번 수포자의 답안이 정답일 경우 count 증가
- 2번 수포자의 답안이 정답일 경우 count 증가
- 3번 수포자의 답안이 정답일 경우 count 증가
- 이 중 count가 가장 큰 학생을 구하고
- 같은 count를 가진 학생을 구한다.

```python
def solution(answers):
    giveUpMath = [
        [1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4 , 4, 5, 5]
    ]
    counts = [0, 0, 0]
    answer = []
    
    for i in range(len(answers)):
        if answers[i] == giveUpMath[0][i % len(giveUpMath[0])]:
            counts[0] += 1
        if answers[i] == giveUpMath[1][i % len(giveUpMath[1])]:
            counts[1] += 1
        if answers[i] == giveUpMath[2][i % len(giveUpMath[2])]:
            counts[2] += 1
    
    for i in range(0, 3):
        if max(counts) == counts[i]:
            answer.append(i+1)
    return answer
```

## 다른 풀이

```python
def solution(answers):
    pattern1 = [1,2,3,4,5]
    pattern2 = [2,1,2,3,2,4,2,5]
    pattern3 = [3,3,1,1,2,2,4,4,5,5]
    score = [0, 0, 0]
    result = []

    for idx, answer in enumerate(answers):
        if answer == pattern1[idx%len(pattern1)]:
            score[0] += 1
        if answer == pattern2[idx%len(pattern2)]:
            score[1] += 1
        if answer == pattern3[idx%len(pattern3)]:
            score[2] += 1

    for idx, s in enumerate(score):
        if s == max(score):
            result.append(idx+1)

    return result
```

- 나는 단순 반복문을 사용했는데 모범 답안에서는 ```enumerate()```를 사용하였다.
- 평소에 인덱스로 계산하는 것보다 ```for each```문을 선호하는데 이번 문제에서는 인덱스 계산이 필요할 것 같아 사용하지 못하였다.

## enumerate

- 반복문 사용 시 몇 번째 반복문인지 확인이 필요할 수 있다. 이때 사용한다.
- 인덱스 번호와 컬렉션의 원소를 tuple형태로 반환한다.

```python
t = [1, 5, 7, 33, 39, 52]
for p in enumerate(t):
    print(p)
```
```bash
(0, 1)
(1, 5)
(2, 7)
(3, 33)
(4, 39)
(5, 52)
```

- tuple의 형태 반환을 이용하여 아래처럼 사용할 수 있다.
```python
t = [1, 5, 7, 33, 39, 52]

for i, v in enumerate(t):
    print("index : {}, value: {}".format(i,v))
```

```bash
index : 0, value: 1
index : 1, value: 5
index : 2, value: 7
index : 3, value: 33
index : 4, value: 39
index : 5, value: 52
```