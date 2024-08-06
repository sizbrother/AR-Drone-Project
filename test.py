r = 0
n = 12
s = 'DAVIDPERKINS'
v = []

for u in range(0,26):
    v.append(int(0))



for i in range(0,n):
    for j in range(i,n):
        if v[s[j]] == 1:
            break
        else:
            r = max(r, j - i + 1)
            v[s[j]] = 1
            v[s[i]] = 0
print(r)
