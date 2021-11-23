---
date: ! '2021/11/23 '
title: Leetcode 278 - First Bad Version solution
tags:
- leetcode
summary: ''
link: https://leetcode.com/problems/first-bad-version/
draft: false

---
### Solution

We will use binary search technique here because the time complexity should be `log n` 

```python
# The isBadVersion API is already defined for you.
# @param version, an integer
# @return an integer
# def isBadVersion(version):

class Solution:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n == 1:
            return 1
        
        left = 1
        right = n
        
        while left <= right:
            mid = (left + right) // 2

            if isBadVersion(mid):
                right = mid - 1
            else:
                left = mid + 1
                
        return left
 ```