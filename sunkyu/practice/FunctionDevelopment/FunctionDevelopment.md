# [기능 개발](https://programmers.co.kr/learn/courses/30/lessons/42586)

## 문제 설명

- 각 기능은 진도가 100%일 때 서비스에 반영할 수 있다.
- 개발속도는 모두 다르다
  - 뒤에 있는 기능이 앞에 있는 기능 보다 먼저 개발될 수 있다.
  - 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포된다.
- 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열 progresses와
- 각 작업의 개발 속도가 적힌 배열 speeds가 주어질 때
- 각 배포마다 몇 개의 기능이 배포되는지를 return

## 제한 사항

- 작업의 개수 (progresses, speeds 배열의 길이)sms 100개 이하
- 작업 진도는 100 미만의 자연수
- 작업 속도는 100 이하의 자연수
- 배포는 하루에 한 번만 할 수 있으며, 하루의 끝에 이루어진다고 가정
- 진도율이 95%인 작업의 개발 속도가 하루에 4%라면 배포는 2일 뒤에 이루어짐

## 입출력 예

| progresses               | speeds             | return    |
|--------------------------|--------------------|-----------|
| [93, 30, 55]             | [1, 30, 5]         | [2, 1]    |
| [95, 90, 99, 99, 80, 99] | [1, 1, 1, 1, 1, 1] | [1, 3, 2] |

## 풀이 아이디어

- 매일 speeds만큼 progresses를 업데이트하여 큐에 담는다 (배포에 필요한 일수 계산)
  - (100-progress) % speed == 0 이라면 몫을 큐에 담는다
  - (100-progress) % speed != 0 이라면 몫+1을 큐에 담는다
- 기준보다 작은 수는 무시하고 기준보다 큰 수를 찾는다.
- (기준보다 큰 수의 인덱스 - 기준 인덱스)를 days 리스트에 추가한다.
- 기준 인덱스를 기준보다 큰 수의 인덱스로 변경하여 다시 연산한다.
- 큐의 길이에서 기준 인덱스의 길이를 빼서 days 리스트에 마지막으로 추가한다.

## 풀이 코드

```python
def solution(progresses, speeds):
    days = []
    queue = []
    index = 0
    
    for progress, speed in zip(progresses, speeds):
        rest = (100-progress) % speed
        
        if rest == 0:
            queue.append(int((100-progress) / speed))
        else:
            queue.append(int((100-progress) / speed + 1))
  
    for i in range(len(queue)):
        if queue[i] > queue[index]:
            days.append(i-index)
            index = i
    days.append(len(queue)-index)
    
    return days
```

## zip()

- 두개의 리스트를 동시에 반복할 수 있다.