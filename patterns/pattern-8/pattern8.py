n = int(input())
for i in range(1,n+1):
    total = n * 2 - i
    space = i - 1
    star = total - space
    for j in range(1,total + 1):
        if j<=space:
            print(" ",end=" ")
        else:
            print("*",end=" ")
    print()