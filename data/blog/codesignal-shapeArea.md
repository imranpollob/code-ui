---
date: ! '2021/07/01 '
title: Codesignal - shapeArea
tags:
  - codesignal
summary: ''
link: https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ
draft: false
---

Solution one:

```python
def shapeArea(n):
    return n*n + (n-1)*(n-1)
```

Solution two:

```python
def shapeArea(n):
    return n**2 + (n-1)**2
```

Solution three:

```python
def shapeArea(n):
    return 2*n*(n-1) + 1
```

Solution four:

```python
def shapeArea(n):
    result = 1

    for i in range(n):
        result += 4 * i

    return result
```
