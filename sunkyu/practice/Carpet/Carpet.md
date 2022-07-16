# [카펫](https://school.programmers.co.kr/learn/courses/30/lessons/42842)

## 문제 설명

> Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.  
> Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.  
> Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

## 제한사항

- 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
- 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
- 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

## 입출력 예
| brown	 | yellow | 	return |
|--------|--------|---------|
| 10     | 	2     | 	[4, 3] |
| 8      | 	1	    | [3, 3]  |
| 24     | 	24    | 	[8, 6] |


## 풀이 아이디어

- 노란색을 포함하고 있는 가로 한 줄의 격자 개수 구하기
- 노란색이 있는 가로줄의 격자 개수 구하기
- 전체 격자 개수 구하기
- 문제에서 요구하는 타일에 부합하는지
- 가로와 세로 길이를 구해 반환

```python
from math import sqrt


def get_one_row_include_yellow(num_of_row_yellow):
    return num_of_row_yellow + 2


def get_row_include_yellow(yellow, div):
    return get_one_row_include_yellow(yellow // div) * div


def get_total_grid(yellow, div):
    row_include_yellow = get_row_include_yellow(yellow, div)
    return row_include_yellow + (get_one_row_include_yellow(yellow // div) * 2)


def is_saw_carpet(yellow, div, brown):
    if get_total_grid(yellow, div) - yellow != brown:
        return False

    return True


def get_carpet_row_col(yellow, div):
    row = get_one_row_include_yellow(yellow // div)
    col = div + 2
    return [row, col]


def solution(brown, yellow):
    if is_saw_carpet(yellow, 1, brown):
        return get_carpet_row_col(yellow, 1)

    for div in range(2, int(sqrt(yellow)) + 1):
        if not (yellow % div) and (yellow // div) >= div:
            if is_saw_carpet(yellow, div, brown):
                return get_carpet_row_col(yellow, div)

            if (yellow // div) != div and div >= (yellow // div):
                if is_saw_carpet(yellow, (yellow // div)):
                    return get_carpet_row_col(yellow, (yellow // div))
```