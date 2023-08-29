### 문제
![](https://images.velog.io/images/chestnut1044/post/65956038-1c7d-44a1-8efe-5c3501f4ff6e/image.png)

---

### sol

```
import math
T = int(input())

for i in range(T):
    t = list(map(int, input().split()))
    d = math.sqrt((t[3]-t[0])*(t[3]-t[0])+(t[4]-t[1])*(t[4]-t[1]))
    r_sub = abs(t[2]-t[5])
    r_sum = t[2]+t[5]
    if(t[0]==t[3] and t[1]==t[4] and t[2]==t[5]):
        print("-1")
        continue
    if(r_sub<d<r_sum):
        print("2")
        continue
    if(r_sum == d or r_sub == d):
        print("1")
        continue
    if(r_sum<d or d<r_sub or d == 0):
        print("0")
        continue
```

---

### 풀이
처음에는 문제를 잘못 이해해서 원내부 어느곳에도 있는줄알았다. 그래서 포기할까싶었던 문제였는데 계속해서 보니까 두 원의 교점을 구하는 문제더라 ...
![](https://images.velog.io/images/chestnut1044/post/3392f3cf-feb7-4ba7-bc36-38d5243aa201/image.png)
(사실 여기에도 나와있음)
 
하지만 고등학교 수학이라 기억이 잘 안났다.
처음에 내접인 경우를 아예 고려하지 않고 코드를 짰더니 틀림

그래서 그림을 그려서 코드를 수정해봤는데 놓친부분이 있는지 틀림
![](https://images.velog.io/images/chestnut1044/post/2bf80df3-9e1e-4063-907c-4d0f8fa2109a/image.png)
4트함 ㅋㅋ

결국 두 원의 위치관계를 검색해서 개념을 알아보았다(참고링크)

공식이용해서 푸니까 금방 풀리더라고 ...



---

### 참고

https://blog.naver.com/honeyeah/110140815554