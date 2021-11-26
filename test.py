T = int(input())

for i in range(T):
    A, Z = int(input().split())
    distance = Z-A
    cnt = 1
    gap = 1
    for i in range(1, distance+1):
        if (i == distance):
            print("끝")
            print(cnt)
        else:
            for j in range(1, distance):
                cnt = cnt + j
