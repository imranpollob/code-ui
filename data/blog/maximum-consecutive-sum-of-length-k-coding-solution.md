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

Find the maximum consecutive sum from an array with a given length k.

### Solution One:

The first method is just using a brute-force method.

```python
def max_sum(arr, k):
	if len(arr) < k:
        return 'Invalid operation'

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

### Solution Two:

Secondly, we can use the **Sliding Window** method. The method is just sliding the window/portion of the chunk forward in each step. In each step, we just have to subtract the previous element and add the next element, so the second loop for our own chunk summation is not needed.

```python
def max_sum_sliding_window(arr, k):
	if len(arr) < k:
        return 'Invalid operation'

    first_sum = sum([arr[i] for i in range(k)])

    for i in range(1, len(arr) - k + 1):
        current_sum = first_sum - arr[i-1] + arr[i + k -1]
        first_sum = max(first_sum, current_sum)

    return first_sum 


arr = [80,-50,90,100,-80]
k = 3

print(max_sum_sliding_window(arr, k))
```