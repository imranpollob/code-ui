---
date: ! '2021/11/21 '
title: Binary search coding solution
tags:
- other
summary: ''
link: ''
draft: false

---
Binary search works on sorted arrray.

Worst complexity: O(log n)
Average complexity: O(log n)
Best complexity: O(1)
Space complexity: O(1)

### Question: 
Find the index of given item


### Solution
```python
def binary_search(arr, item):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if item == arr[mid]:
            return mid
        elif item < arr[mid]:
            right = mid - 1
        elif item > arr[mid]:
            left = mid + 1

    return -1


arr = [10,20,30,40,50]
item = 50

result = binary_search(arr, item)
if result == -1:
    print('Item not found')
else:
    print(f'Item found at index {result}')
```