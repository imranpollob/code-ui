---
date: ! '2021/10/21 '
title: Leetcode 485 - Max Consecutive Ones
tags:
- leetcode
summary: ''
link: https://leetcode.com/problems/max-consecutive-ones/
draft: false

---
Solutions One:

```python
class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        highest = 0
        current = 0
        
        for i in nums:
            if i == 1:
                current += 1
            else:
                current = 0
            
            highest = max(current, highest)
        
        return highest
```

```java
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int high = 0;
        int cur = 0;
        
        for(int i : nums){
            if(i == 1)
                cur += 1;
            else
                cur = 0;
                
            high = Math.max(high, cur);
        }
        
        return high;
    }
}
```

Solution Two: Faster than the previous approach because `max` fucntion is not running all the times.

```java
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int high = 0;
        int cur = 0;
        
        for(int i : nums){
            if(i == 1){
                cur += 1;                
            } else{
                high = Math.max(high, cur);
                cur = 0;
            }
        }
        // if last element is one
        high = Math.max(high, cur);

        return high;
    }
}
```