# [완주하지 못한 선수](https://programmers.co.kr/learn/courses/30/lessons/42576?language=python3)

## 문제 설명

- 수많은 마라톤 선수들이 마라톤에 참여하였습니다.
- 단 한명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
- 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
- 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
- 완주하지 못한 선수의 이름을 return하는 solution 함수를 작성해주세요

## 제한 사항

- 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
- completion의 길이는 participant의 길이보다 1 작습니다.
- 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
- 참가자 중에는 동명이인이 있을 수 있습니다.

## 풀이 아이디어

- 처음에는 그냥 차집합으로 풀었지만, 역시나 중복을 처리하는 부분에서 오류가 발생했다.

```python
# 틀린 풀이
def solution(participant, completion):
    return "".join(list(set(participant) - set(completion)))
```

- 그래서 알파벳을 비교하여 하나씩 삭제해보기로 했다.
- collections.Counter() 모듈 사용

```python
# 정답 풀이
from collections import Counter

def solution(participant, completion):
    return list((Counter(participant) - Counter(completion)).keys())[0]
```

## collections 모듈

- collections 모듈의 Counter() 메소드를 사용하면 다음과 같이 정리된다.

```python
from collections import Counter

p = ["mislav", "stanko", "mislav", "ana"]
Counter(p)
# Counter({'mislav' : 2, 'stanko' : 1, 'ana' : 1})

c = ["stanko", "ana", "mislav"]
Counter(c)
# Counter({'stanko' : 1, 'ana' : 1, 'mislav' : 1})
```
- 리스트가 깔끔하게 딕셔너리로 정리되는 것을 알 수 있다.
- Counter끼리는 차연산이 가능해서 두 카운터를 뺴주면 정답

