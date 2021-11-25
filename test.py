T = int(input())

for i in range(T):
    A, Z = int(input().split())
    test = Z-A
    test_child = 1
    result = 0
    result_try = 0
    while True:
        if test == 1:
            result_try = 1
            break
        elif result < test:
            result = result + test_child*2
            result_try += 1
            if test - result > result_try:
                hh = 0

    print(result_try)
