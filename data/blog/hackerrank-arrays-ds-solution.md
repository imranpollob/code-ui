---
date: ! '2021/07/02 '
title: Hackerrank - Arrays - DS solution
tags:
- array
- data-structures
- problem-solving
- hackerrank
summary: ''
link: https://www.hackerrank.com/challenges/arrays-ds/problem
draft: false

---
### Solution one:

Using Python's default syntax.

```python
def reverseArray(a):
    return a[::-1]
```

### Solution two:

Looping from the last item and storing it in an array.

```python
def reverseArray(a):
    temp = []

    for i in range(len(a)-1, -1, -1):
        temp.append(a[i])

    return temp
```

### Solution three:

Swap the items until we reach the middle of the array.

```python
def reverseArray(a):
    s = len(a)
    
    for i in range(s//2):
        a[i], a[s-i-1] = a[s-i-1], a[i]
    
    return a
```