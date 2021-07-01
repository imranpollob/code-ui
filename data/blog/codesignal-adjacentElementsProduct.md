---
date: ! '2021/07/01 '
title: Codesignal - adjacentElementsProduct
tags:
  - codesignal
summary: ''
link: https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m
draft: false
---

Solution one:

```python
def adjacentElementsProduct(inputArray):
    best = inputArray[0] * inputArray[1]

    for i in range(1, len(inputArray) - 1):
        temp = inputArray[i] * inputArray[i + 1]

        if temp > best:
            best = temp

    return best
```

Solution two:

```python
def adjacentElementsProduct(inputArray):
    return max([inputArray[i] * inputArray[i+1] for i in range(len(inputArray)-1)])
```

Solution three:

```js
def adjacentElementsProduct(inputArray):
    products = []

    for i in range(len(inputArray)-1):
        products.append(inputArray[i]*inputArray[i+1])

    return max(products)
```
