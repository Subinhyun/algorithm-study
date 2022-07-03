# 완주하지 못한 선수
from collections import Counter

p = ["mislav", "stanko", "mislav", "ana"]
c = ["stanko", "ana", "mislav"]

def solution(participant, completion):
    return list((Counter(participant) - Counter(completion)).keys())[0]

print(solution(p, c))