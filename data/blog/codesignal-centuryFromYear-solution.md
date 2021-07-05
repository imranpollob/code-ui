---
date: ! '2021/07/01 '
title: Codesignal - centuryFromYear solution
tags:
  - codesignal
summary: ''
link: https://app.codesignal.com/arcade/intro/level-1/egbueTZRRL5Mm4TXN
draft: false
---

### Solution one:

Basic straight forward solution.

```python
def centuryFromYear(year):
    if year % 100 == 0:
        return year // 100
    return (year // 100) + 1
```

### Solution two:

Interesting solution without using else.

```python
def centuryFromYear(year):
    return (year + 99) // 100
```

### Solution three:

Same theory as above but using `math` library function.

```python
def centuryFromYear(year):
    return math.ceil(year / 100)
}
```

### Solution four:

An different math approach.

```python
def centuryFromYear(year):
    return (year - 1) / 100 + 1;
}
```
