x=input()
a=0
r=10**(len(x)-1)
for i in reversed(x):
    a+=int(i)*r
    r/=10
print(int(a))