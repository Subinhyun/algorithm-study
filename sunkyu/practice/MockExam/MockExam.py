def solution(answers):
    giveUpMath = [
        [1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
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
            answer.append(i + 1)
    return answer
