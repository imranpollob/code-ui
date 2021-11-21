---
date: ! '2021/11/21 '
title: Maximum Consecutive Sum of Length K coding solution
tags:
- other
summary: ''
link: ''
draft: false

---
### Question

Find the maximum consecutive sum from an array  with given length k.

### Solution

```python
def max_sum(arr, k):
    maximum = 0
    # first loop to go through elements till length - k
    for i in range(len(arr) - k + 1):
        max_for_a_loop = 0
        # second loop to find out the sum of k items
        for j in range(i, i + k):
            max_for_a_loop += arr[j]

        maximum = max(maximum, max_for_a_loop)

    return maximum


arr = [80,-50,90,100,-80]
k = 3

print(max_sum(arr, k))
```