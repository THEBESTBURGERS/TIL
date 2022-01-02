M, N = map(int, input().split())
strr = ''
for i in range(M, N+1):
    check = 0
    for j in range(2, i):
        if(i%j == 0):
            check = 1
    if(check == 0):
        print(i)
