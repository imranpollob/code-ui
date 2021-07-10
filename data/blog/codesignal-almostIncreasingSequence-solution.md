---
date: ! '2021/07/10 '
title: Codesignal - almostIncreasingSequence solution
tags:
  - codesignal
summary: ''
link: https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG
draft: false
---

### Solution one:

```python
def makeArrayConsecutive2(statues):
    return max(statues) - min(statues) - len(statues) + 1
```

### Solution two:

```python
def makeArrayConsecutive2(statues):
    list.sort(statues)
    return statues[-1] - statues[0] + 1 - len(statues)
```

### Solution three:

```python
def makeArrayConsecutive2(statues):
    return sum([1 for i in range(min(statues), max(statues)) if i not in statues])
```

### Solution four:

```python
def makeArrayConsecutive2(statues):
    lowest = min(statues)
    highest = max(statues)+1
    completeList = list(range(lowest, highest))

    for i in statues:
        if i in completeList:
            completeList.remove(i)

    return len(completeList)
```
