n = int(input())

Fn = 0
Fn1 = 1
Fn2 = Fn + Fn1

if(n == 0):
    print("0")
else:
    for i in range(n-2):
        Fn = Fn1
        Fn1 = Fn2
        Fn2 = Fn + Fn1
    print(Fn2)