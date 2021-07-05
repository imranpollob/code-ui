---
date: ! '2021/06/01 '
title: Hackerrank - Weather Observation Station 7 solution
tags:
  - hackerrank
  - sql
  - basic-select
summary: ''
link: https://www.hackerrank.com/challenges/weather-observation-station-7
draft: false
---

### Solution one:

```sql
SELECT DISTINCT CITY FROM STATION WHERE CITY REGEXP '[AEIOU]$';
```
