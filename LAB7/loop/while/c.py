list=[]
n=int(input())
i=2
stepen=0
while i<=n:
    i=i*2
    stepen+=1
i=i/2
while i>=1:
    list.append(int(i))
    i=i/2
list.sort()
print(*list)