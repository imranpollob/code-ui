---
date: ! '2021/07/02 '
title: Hackerrank - Arrays solution
tags:
- numpy
- python
- hackerrank
summary: ''
link: https://www.hackerrank.com/challenges/np-arrays/problem
draft: false

---
### Solution one:

Simply turn the `arr` into a numpy array by using buit-in `number.array` method. We are reversing the `arr` before passing it to the method.

```python
def arrays(arr):
    return numpy.array(arr[::-1], dtype=float)
```

### Solution two:

Normal list operations are applicable on the Numpy array.

```python
def arrays(arr):
    return numpy.array(arr, dtype=float)[::-1]
```

###  Solution three:

Writing `dtype` explicitly is optional but a good practice.

```python
def arrays(arr):
    return numpy.array(arr, float)[::-1]
```

### Solution four:

We can use Numpy's function `flipud` to reverse the order of elements. This function also supports 2D arrays 😀.

```python
def arrays(arr):
    return numpy.flipud(numpy.array(arr, float))
```