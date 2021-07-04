---
date: ! '2021/07/02 '
title: Hackerrank - Solve Me First solution
tags:
- warmup
- algorithms
- problem-solving
- hackerrank
summary: ''
link: https://www.hackerrank.com/challenges/solve-me-first/problem
draft: false

---

### Solution one

Just return the addition of the two numbers.

```python
def solveMeFirst(a,b):
	return sum(a, b)
```

### Solution two

Find the addition using library function `sum`. The advantage of the `sum` function is that it can take variable number of arguments. For example, `sum(1, 2, 3, 4)` will also work.

```python
def solveMeFirst(a,b):
	return sum(a, b)
```