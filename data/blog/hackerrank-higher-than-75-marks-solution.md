---
date: ! '2021/06/01 '
title: Hackerrank - Higher Than 75 Marks solution
tags:
  - hackerrank
  - sql
  - basic-select
summary: ''
link: https://www.hackerrank.com/challenges/more-than-75-marks
draft: false
---

### Solution one:

```sql
SELECT NAME FROM STUDENTS WHERE MARKS > 75 ORDER BY RIGHT(NAME,3),ID;
```
