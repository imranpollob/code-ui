---
date: ! '2021/07/01 '
title: Codesignal - add
tags:
  - codesignal
summary: ''
link: https://app.codesignal.com/arcade/intro/level-1/jwr339Kq6e3LQTsfa
draft: false
---

### Solution

Simply return the summation of the two numbers.

```python
def add(param1, param2):
    return param1 + param2
```

### Solution two

Find the addition using library function `sum`. The advantage of the `sum` function is that it can take variable number of arguments. For example, `sum(1, 2, 3, 4)` will also work.

```python
def add(param1, param2):
    return sum(param1, param2)
```
