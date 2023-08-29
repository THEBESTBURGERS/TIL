t = int(input())
arr = []
for i in range(0, t):
    age, name = input().split()
    arr.append((age, name))
arr.sort(key=lambda x: x[0])
for i in range(0, t):
    print(arr[t-1-i][0], arr[t-i-1][1])
