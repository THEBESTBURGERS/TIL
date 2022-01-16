list_a = list()
list_b = list()
for i in range(3):
    a, b = input().split()
    list_a.append(a)
    list_b.append(b)

a = list_a.pop()
b = list_b.pop()
if(a in list_a):
    list_a.remove(a)
    print(*list_a, end=" ")
else:
    print(a, end=" ")

if(b in list_b):
    list_b.remove(b)
    print(*list_b)
else:
    print(b)