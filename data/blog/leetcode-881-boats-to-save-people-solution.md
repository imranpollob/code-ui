---
date: ! '2021/11/23 '
title: Leetcode 881 - Boats to Save People solution
tags:
- leetcode
summary: ''
link: https://leetcode.com/problems/boats-to-save-people/
draft: false

---
### Solution:

The strategy is to sort the `people` array first then set two pointers for the array. First pointer `left` points at the first index and `right` pointer points at last index. Then we just need to compare the summation of the two pointers value with the `limit` and move pointers accordingly.

Time Complexity: O(n)  
Space Complexity: O(1)

```python
class Solution:
    def numRescueBoats(self, people: List[int], limit: int) -> int:
        people = sorted(people)
        
        left = 0
        right = len(people) - 1
        c = 0
        
        while left <= right:
            if people[left] + people[right] > limit:
                right -= 1
                c += 1
            else:
                left += 1
                right -= 1
                c += 1
        return c
```
