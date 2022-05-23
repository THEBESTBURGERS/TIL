import math
N = int(input())
if(N == 3):
    n = 1
else:
    n = int(N**(1/3))


def star(k):
    if(k == 1):
        print("***\n* *\n***")
    else:
        
        star(k)
star(n)

