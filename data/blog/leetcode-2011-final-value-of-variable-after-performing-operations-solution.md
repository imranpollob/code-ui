---
date: ! '2021/10/22 '
title: Leetcode 2011 - Final Value of Variable After Performing Operations solution
tags:
- leetcode
summary: ''
link: https://leetcode.com/problems/final-value-of-variable-after-performing-operations
draft: false

---
Solution One:

```python
class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        x = 0
        for i in operations:
            if '-' in i:
                x -= 1
            else:
                x += 1
        return x
```

Solution Two:

``java
class Solution {
    public int finalValueAfterOperations(String[] operations) {
        int x = 0;

        for (int i = 0; i < operations.length; i++) {
            if (operations[i].charAt(1) == '+') {
                x++;
            } else {
                x--;
            }
        }

        return x;
    }
}
```