x, y, w, h = map(int,input().split())

if(x>=w and y>=h):
    print(min(x-w, y-h))
elif(x>=w and y<h):
    print(min(x-w, h-y, y))
elif(x<w and y>=h):
    print(min(x, w-x, y-h))
else:
    print(min(x, y, w-x, h-y))