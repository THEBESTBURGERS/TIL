T = int(input())

n = 10000
arr = [True] * (n+1)
prime_num = []
arr[1] = False
for i in range(2, int(n ** 0.5)+1):
    if arr[i] == True:
        for j in range(i+i, n+1, i):
            arr[j] = False

for i in range(2, n+1):
    if arr[i]:
        prime_num.append(i)


for i in range(T):
    t = int(input())
    j = 0
    while True:
        if((t-prime_num[j])in prime_num and t-prime_num[j]>0):
            print(prime_num[j], t-prime_num[j])
            j += 1
        else:
            break