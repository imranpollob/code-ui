---
date: ! '2021/10/22 '
title: Leetcode 1920 - Build Array from Permutation solution
tags:
- leetcode
summary: ''
link: https://leetcode.com/problems/build-array-from-permutation
draft: false

---
Solution One:

```java
class Solution {
    public int[] buildArray(int[] nums) {
        int[] ans = new int[nums.length];
        
        for(int i = 0; i < nums.length; i++){
            ans[i] = nums[nums[i]];
        }
        
        return ans;
    }
}
```

```python
class Solution:
    def buildArray(self, nums: List[int]) -> List[int]:
        ans = []
        
        for i in range(len(nums)):
            ans.append(nums[nums[i]])
            
        return ans
```