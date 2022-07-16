# [소수 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/42839)

## 문제 설명

>한자리 숫자가 적힌 종이 조각이 흩어져있습니다.  
>흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.

각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.

## 제한사항

- numbers는 길이 1 이상 7 이하인 문자열입니다.
- numbers는 0~9까지 숫자만으로 이루어져 있습니다.
- "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.

## 입출력 예

| numbers | return |
|---------|--------|
| "17"    | 	3     |
| "011"   | 	2     |

## 풀이 아이디어

- 소수 판별은 ```에라토스테네스의 체```를 바로 떠올려야 한다.
- 순열로 모든 경우의 수를 판별해서 소수인지만 확인하면 끝

```python
from itertools import permutations

def isPrime(n) :
    num = set(range(2,n+1))
    for i in range(2,n+1) :
        if i in num :
            num -= set(range(2*i,n+1,i))
    return num


def solution(numbers):
    result = []
    for i in range(1,len(numbers)+1):
        a = list(permutations(numbers,i))
        per = list(map("".join, a))
        for p in list(set(per)):
            if isPrime(int(p)):
                result.append(int(p))
    result2 = list(set(result))
    return len(result2)
```