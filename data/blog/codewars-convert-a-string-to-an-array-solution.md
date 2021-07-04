---
date: ! '2021/06/26 '
title: Codewars - convert a string to an array solution
tags:
  - codewars
  - string
  - array
summary: ''
link: https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
draft: false
---

### Solution one

Just split the string and it will return a array. This solution is in JavaScript

```python
function stringToArray(string) {
  return string.split(' ')
}
```

### Solution two

In Python we can turn the string to an list and the job is done.

```python
function stringToArray(string) {
  return list(string)
}
```

### Solution three

We can use for loop to do our job.

```python
function stringToArray(string) {
  arr = []

  for i in string:
    arr.append(i)

  return arr
}
```

### Solution four

This solution is same as above but it's one liner.

```python
function stringToArray(string) {
  return [i for i in string]
}
```

### Solution five

Now it's little bit fancier. We are using Python destructuring here.

```python
function stringToArray(string) {
  return [*string]
}
```
