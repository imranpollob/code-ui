---
date: ! '2021/07/04 '
title: Leetcode 485 - Max Consecutive Ones solution
tags:
- array
- leetcode
summary: ''
link: https://leetcode.com/problems/max-consecutive-ones/
draft: false

---
### Solution one:

The idea here is to maintain two variables at the same time. `current_max` stores the maximum occurrences of `1` and `maximum` just stores the max value of `current_max` variable.

```python
class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        maximum = 0
        current_max = 0

        for i in nums:
            if i == 1:
                current_max += 1
                maximum = max(maximum, current_max)
            else:
                current_max = 0

        return maximum
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

`1`10111 current_max = 1

1`1`0111 current_max = 2

11`0`111 current_max = 0

110`1`11 current_max = 1

1101`1`1 current_max = 2

11011`1` current_max = 3


### Solution Two: 
Faster than the previous approach because `max` fucntion is not running all the times.

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

### Solution Three:

For O(n) space we can reassign values to the input array.

```python
class Solution:
    def findMaxConsecutiveOnes(self, nums):
        for i in range(1, len(nums)):
            if nums[i]:
                nums[i] += nums[i - 1]
        return max(nums)
```

Transform the input eg: `[0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1]` to `[0, 1, 2, 3, 0, 1, 2, 0, 0, 1, 2, 3, 4]` and return the max element.