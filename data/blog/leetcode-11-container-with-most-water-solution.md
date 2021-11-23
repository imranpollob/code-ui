---
date: ! '2021/11/23 '
title: Leetcode 11 - Container With Most Water solution
tags:
- leetcode
summary: ''
link: https://leetcode.com/problems/container-with-most-water/
draft: false

---
### Solution

We will use the two-pointers technique here, one pointer at the first and another pointer at the last. Then we just have to compare the area. Important thing to remember here is that, the minimum height is used to find out the area. So the minimum height times the distance between two pointers will give us the area. For each iteration, we increase the `left` pointer if `right` pointer is higher otherwise decrease the right pointer.

Time Complexity: O(n)  
Space Complexity: O(1)

```python
class Solution:
    def maxArea(self, height: List[int]) -> int:
        left = 0
        right = len(height) - 1
        maximum = 0

        while left < right:
            maximum = max(maximum, min(height[left], height[right]) * (right - left))

            if height[left] < height[right]:
                left += 1
            else:
                right -= 1

        return maximum
```