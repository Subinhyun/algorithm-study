def solution(citations):
    answer = 0
    for i in range(len(citations)):
        if sorted(citations, reverse = True)[i] >= i + 1:
            answer = i + 1
        
    return answer

citations = [2,2,2]
#[6,6,6,6,6,6]
#[3, 0, 6, 1, 5]
#[10, 100]
print(solution(citations))