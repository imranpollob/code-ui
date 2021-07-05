---
date: ! '2021/06/01 '
title: Hackerrank - Weather Observation Station 12 solution
tags:
  - hackerrank
  - sql
  - basic-select
summary: ''
link: https://www.hackerrank.com/challenges/weather-observation-station-12
draft: false
---

### Solution one:

```sql
SELECT DISTINCT CITY FROM STATION WHERE CITY REGEXP '^[^AEIOU].+[^AEIOU]$';
```
