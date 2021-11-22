# import sys
# C = int(input())
# arr = []
# for i in range(C):
#     arr.append(map(int,sys.stdin.readline().split()))
#     nums = list(arr[i])
#     sum_ = sum(nums)-nums[0]
#     avg = sum_/nums[0]
#     cnt = 0
#     for k in range(1, nums[0]+1):
#         if (avg < nums[k]):
#             cnt += 1
#     rate = (cnt/nums[0])*100
#     print('{0:.3f}%'.format(rate))


c = int(input())
avg = []
avgHigh = 0
avgHighStudent = []

for i in range(c):
    student = list(map(int, input().split()))
    avg = (sum(student)-student[0]) // student[0]
    for j in range(1, len(student)):
        if avg < student[j]:
            avgHigh += 1
    avgHighStudent.append(avgHigh / student[0] * 100)


for i in range(c):
    print(avgHighStudent[i])
# for i in range(c):
#     print('{0}%'.format(round(avgHighStudent[i], 3)))
