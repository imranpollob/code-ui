---
date: ! '2021/11/23 '
title: Leetcode 941 - Valid Mountain Array solution
tags:
- leetcode
summary: ''
link: https://leetcode.com/problems/valid-mountain-array/
draft: false

---
### Solution:

The strategy is to check for an increasing order and then a decreasing order. We need to check for the length of the current pointer after each loop.

```python
class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        lenght = len(arr)
        
        if lenght < 3:
            return False
        
        i = 1
        
        while i < lenght:
            if arr[i-1] < arr[i]:
                i += 1
            else:
                break

        if i == lenght or i == 1:
            return False
        
        while i < lenght:
            if arr[i-1] > arr[i]:
                i += 1
            else:
                break
   
        if i != lenght:
            return False
        
        return True
 ```
 Can you see the problem here? You got it, we can simplofy the while logic right..
 
 ```python
 class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        lenght = len(arr)
        
        if lenght < 3:
            return False
        
        i = 1
        
        while i < lenght and arr[i-1] < arr[i]:
            i += 1

        if i == lenght or i == 1:
            return False
        
        while i < lenght and arr[i-1] > arr[i]:
            i += 1
   
        return i == lenght
        
 ```
 
 