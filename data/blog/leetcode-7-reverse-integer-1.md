---
date: ! '2021/10/21 '
title: Leetcode 7 - Reverse Integer
tags:
- leetcode
summary: ''
link: https://leetcode.com/problems/reverse-integer/
draft: false

---
Solution:

```java
class Solution {
    public int reverse(int x) {
        int rev = 0;
        
        while(x != 0){
            if(rev > Integer.MAX_VALUE / 10 || rev < Integer.MIN_VALUE / 10)
                return 0;
            rev = rev * 10 + x % 10;
            x = x / 10;
        }
        
        return rev;
    }
}
```