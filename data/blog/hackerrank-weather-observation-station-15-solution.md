---
date: ! '2021/05/01 '
title: Hackerrank - Weather Observation Station 15 solution
tags:
  - hackerrank
  - sql
  - aggregation
summary: ''
link: https://www.hackerrank.com/challenges/weather-observation-station-15
draft: false
---

### Solution one:

```sql
select round(long_w,4) from station where lat_n < 137.2345 order by lat_n desc limit 1;
```
