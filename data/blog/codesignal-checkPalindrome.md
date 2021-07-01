---
date: ! '2021/07/01 '
title: Codesignal - checkPalindrome
tags:
  - codesignal
summary: ''
link: https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ
draft: false
---

Solution one:

```python
def checkPalindrome(inputString):
    r = ""

    for i in range(len(inputString)-1, -1, -1):
        r += inputString[i]

    return inputString == r
```

Solution two:

```python
def checkPalindrome(inputString):
    return inputString == inputString[::-1]
```

Solution three:

```js
function checkPalindrome(inputString) {
  return inputString == inputString.split('').reverse().join('')
}
```

Solution four:

```python
def checkPalindrome(inputString):
    for i in range(len(inputString) // 2):
        if inputString[i] != inputString[-i - 1]:
            return False
    return True
```
