---
date: ! '2021/10/21 '
title: Leetcode 7 - Reverse Integer
tags:
- leetcode
summary: ''
link: https://leetcode.com/problems/reverse-integer
draft: false

---
Solution:

```java
class Solution {
    public boolean isPalindrome(int x) {
        if (x < 0){
            return false;
        }
        
        int rev = 0;
        int real = x;
            
        while (x != 0) {
            rev = rev * 10 + x % 10;
            x = (int) x / 10;
        }
        
        return rev == real;
        
    }
}
```