import math
T = int(input())

T_list = []
for i in range(T):
    t = list(map(int, input().split()))



# 내접일때
# 만나지 않을때
# 만날때 

    d = math.sqrt((t[3]-t[0])*(t[3]-t[0])+(t[4]-t[1])*(t[4]-t[1]))
    r = t[2] + t[5]
    if(t[0]==t[3] and t[1]==t[4] and t[2]==t[5]):
        print("-1")
        continue
    if(t[0]==t[3] and t[1]==t[4]):
        print("0")
        continue
    if(r>d):
        print("2")
    elif(r==d):
        print("1")
    elif(r<d):
        print("0")
    T_list.append(t)
