A,B,C = input().split()
A = long(A)
B = long(B)
C = long(C)
N = 1


if(A+B*1-C*1 < A+B*2-C*2):
    print('-1')
else:
    while 1:
        if(A+B*N >= C*N):
            N = N + 1
        else:
            break
    print(N)