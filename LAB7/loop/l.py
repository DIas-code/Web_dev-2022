x=input()
d=0
c=1
for i in reversed(x):
   d+=int(i)*c
   c*=2
print(d)