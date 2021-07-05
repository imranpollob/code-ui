---
date: ! '2021/05/01 '
title: Hackerrank - Population Density Difference solution
tags:
  - hackerrank
  - sql
  - aggregation
summary: ''
link: https://www.hackerrank.com/challenges/population-density-difference
draft: false
---

### Solution one:

```sql
SELECT MAX(POPULATION) - MIN(POPULATION) FROM CITY;
```
