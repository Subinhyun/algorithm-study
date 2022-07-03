# [위장](https://programmers.co.kr/learn/courses/30/lessons/42578)

## 문제 설명

- 스파이들은 매일 다른 옷을 조합하여 입어 자신을 위장
- 서로 다른 옷의 조합의 수를 return 하도록 solution 함수를 작성

## 풀이 아이디어

- 리스트를 딕셔너리로 분배
- 벨류값들에 1을 더하고 각자를 곱한다
- 옷을 아예 안입은 경우도 있으니 -1
- 저번 문제에서 Counter를 사용하여 이번에는 해시의 정석대로 풀어봄

```python
from functools import reduce
def solution(clothes):
    dic = {}
    answer = 1

    for i in range(len(clothes)):
        dic[clothes[i][1]] = 1

    for i in range(len(clothes)):
        if clothes[i][0]:
            dic[clothes[i][1]] += 1

    arr = dic.values()

    return reduce(lambda x, y: x*y, arr) - 1
```

## functools.reduce

- 파이썬의 functools 내장 모듈의 reduce() 함수는 여러 개의 데이터를 대상으로 주로 누적 집계를 내기 위해서 사용합니다.
- 기본적으로 초기값을 기준으로 데이터를 루프 돌면서 집계 함수를 계속해서 적용하면서 데이터를 누적하는 방식으로 작동합니다.

```python
reduce(집계 함수, 순회 가능한 데이터[, 초기값])
```

- 집계 함수는 두개의 인자를 받아야 하는데요. 
- 첫번째 인자는 누적자(accumulator), 두번째 인자는 현재값(current value)가 넘어오게 됩니다.
- 누적자는 함수 실행의 시작부터 끝까지 계속해서 재사용되는 값이고, 현재값은 루프 돌면서 계속해서 바뀌는 값입니다.
- 이 코드에서는 value의 값을 모두 곱하는데 사용하였습니다.