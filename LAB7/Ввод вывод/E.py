a=int(input())
b=int(input())
if (a*b)>=109:
    print(a*b%109)
elif a*b<109 and a*b>0:
    print(109-(a*b))
elif a*b<109 and a*b<0:
    print((a*b)%109)