def solution(answers):
    giveup = [[1, 2, 3, 4, 5,], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    
    winner = []
    answer = [0] * 3
    for i in range(len(answers)):
        if answers[i] == giveup[0][i%len(giveup[0])]:
            answer[0] += 1
        if answers[i] == giveup[1][i%len(giveup[1])]:
            answer[1] += 1
        if answers[i] == giveup[2][i%len(giveup[2])]:
             answer[2] += 1
        
    for i in range(len(answer)):
        if answer[i] == max(answer):
            winner.append(i+1)
            
    return winner