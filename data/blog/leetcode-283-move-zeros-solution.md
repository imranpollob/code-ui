---
date: ! '2021/10/08 '
title: Leetcode 283 - Move Zeros solution
tags:
- leetcode
summary: ''
link: https://leetcode.com/problems/move-zeroes/
draft: false

---
### Solution one:

To solve this problem we will use one pointer. The pointer is used to count the zeros as well as help in swapping values. We used two for loops but the second loop is very specific.

Time complexity: O(2 * n) = O(n)
Space complexity: O(1)

```python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        pointer = 0

        for i in range(len(nums)):
            if nums[i] != 0:
                nums[pointer] = nums[i]
                pointer += 1

        for i in range(pointer, len(nums)):
            nums[i] = 0
```

### Solution two:

To solve this problem we will use two points. One pointer will track zero another will track nonzero numbers. Zero pointer will be incremented if it finds zero in the list otherwise the numbers on Zero and Nonzero pointers swap their values and both pointers will be incremented.

Time complexity: O(n)
Space complexity: O(1)

```python
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        zero = 0
        nonzero = 0
        
        while zero < len(nums):
            if nums[zero] == 0:
                zero += 1
            else:
                nums[zero], nums[nonzero] = nums[nonzero], nums[zero]
                zero += 1
                nonzero += 1
        
        return nums
```

[Explanation video](https://www.youtube.com/watch?v=PNJoyRaIW7U)