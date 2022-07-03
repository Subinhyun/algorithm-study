from functools import reduce

clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]

def solution(clothes):
    dic = {}
    answer = 1

    for i in range(len(clothes)):
        dic[clothes[i][1]] = 1

    for i in range(len(clothes)):
        if clothes[i][0]:
            dic[clothes[i][1]] += 1

    arr = dic.values()

    return reduce(lambda x, y: x*y, arr) - 1

print(solution(clothes))
