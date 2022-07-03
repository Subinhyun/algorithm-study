progresses = [95, 90, 99, 99, 80, 99]
speeds = [1, 1, 1, 1, 1, 1]


def solution(progresses, speeds):
    days = []
    queue = []
    index = 0

    for progress, speed in zip(progresses, speeds):
        rest = (100 - progress) % speed

        if rest == 0:
            queue.append(int((100 - progress) / speed))
        else:
            queue.append(int((100 - progress) / speed + 1))

    for i in range(len(queue)):
        if queue[i] > queue[index]:
            days.append(i - index)
            index = i
    days.append(len(queue) - index)
    return days


print(solution(progresses, speeds))