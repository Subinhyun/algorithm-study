priorities = [1, 1, 9, 1, 1, 1]
location = 0


def solution(priorities, location):
    queue = []
    ans = 0

    for i in range(len(priorities)):
        queue.append([priorities[i], i])

    while True:
        if max(queue)[0] > queue[0][0]:
            queue.append(queue.pop(0))
        else:
            ans += 1
            printer = queue.pop(0)[1]
            if printer == location:
                return ans


print(solution(priorities, location))
