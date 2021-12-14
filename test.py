# T = int(input())

# for i in range(T):
#     A, Z = int(input().split())
#     distance = Z-A
#     cnt = 1
#     gap = 1
#     for i in range(1, distance+1):
#         if (i == distance):
#             print("끝")
#             print(cnt)
#         else:
#             for j in range(1, distance):
#                 cnt = cnt + j


arr = [5, 3, 8, 4, 9, 1, 6, 2, 7]


def dp_quick_sort(A, low, high):
    if low < high:
        lp, rp = partitionDP(A, low, high)
        dp_quick_sort(A, low, lp-1)
        dp_quick_sort(A, lp+1, rp-1)
        dp_quick_sort(A, rp+1, high)


def partitionDP(A, low, high):
    j = low + 1
    g = high + 1
    k = low + 1
    if A[low] > A[high]:
        A[low], A[high] = A[high], A[low]

    lpVal = A[low]
    rpVal = A[high]
    while(k <= g):
        if(A[k] < lpVal):
            A[k], A[j] = A[j], A[k]
            j += 1

        elif(A[k] >= rpVal):
            while(A[g] > rpval and k < g):
                g -= 1
            A[k], A[g] = A[g], A[k]
            g -= 1

            if(A[k] < lpVal):
                A[k], A[j], = A[j], A[k]
                j += 1
        k += 1
    j -= 1
    g += 1
    A[low], A[j] = A[j], A[low]
    A[high], A[g] = A[g], A[high]
    return j, g


arr = [5, 3, 8, 4, 9, 1, 6, 2, 7]
print(len(arr))
dp_quick_sort(arr, 0, len(arr)-1)
print("dp_quick_sort: ", arr)
