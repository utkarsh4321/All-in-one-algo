n = int(input())
for i in range(1,n+1):
    # for loop for spaces
    for j in range(1,(n-i + 1)+1):
        print(" ",end=" ")
    # for loop for star
    for k in range(1,2*i):
        print('*',end=" ")
    print()