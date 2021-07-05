---
date: ! '2021/05/01 '
title: Hackerrank - The Blunder solution
tags:
  - hackerrank
  - sql
  - aggregation
summary: ''
link: https://www.hackerrank.com/challenges/the-blunder
draft: false
---

### Solution one:

```sql
SELECT CEIL(AVG(SALARY)-AVG(REPLACE(SALARY, 0 , ''))) FROM EMPLOYEES;
```
