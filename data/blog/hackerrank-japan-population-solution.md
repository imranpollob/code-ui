---
date: ! '2021/05/01 '
title: Hackerrank - Japan Population solution
tags:
  - hackerrank
  - sql
  - aggregation
summary: ''
link: https://www.hackerrank.com/challenges/japan-population
draft: false
---

### Solution one:

```sql
SELECT SUM(POPULATION) FROM CITY WHERE COUNTRYCODE = "JPN";
```
