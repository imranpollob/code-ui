---
date: ! '2021/10/23 '
title: Leetcode 1108 - Defanging an IP Address solution
tags:
- leetcode
summary: ''
link: https://leetcode.com/problems/defanging-an-ip-address
draft: false

---
Solution One:

```python
class Solution:
    def defangIPaddr(self, address: str) -> str:
        return address.replace('.', '[.]')
```

Solution Two:

Using regex

```java
class Solution {
    public String defangIPaddr(String address) {
        return address.replaceAll("\\.", "[.]");
    }
}
