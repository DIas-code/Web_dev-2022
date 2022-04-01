import math
x=int(input())
i=0
while i<=x:
    if i==0:
        a=0
    elif int(math.sqrt(math.sqrt(i*i)))==math.sqrt(math.sqrt(i*i)):
        print(i)
    i+=1