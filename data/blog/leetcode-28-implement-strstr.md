---
date: ! '2021/10/21 '
title: Leetcode 28 - Implement strStr()
tags:
- leetcode
summary: ''
link: https://leetcode.com/problems/implement-strstr
draft: false

---
Solution:

```java
class Solution {
    public int strStr(String haystack, String needle) {
        int nl = needle.length();

        for(int i = 0; i <= haystack.length() - nl; i = i+1) {
            if (haystack.substring(i, i + nl).equals(needle)) {
                return i;
            }
        }
        
        return -1;
    }
}
```