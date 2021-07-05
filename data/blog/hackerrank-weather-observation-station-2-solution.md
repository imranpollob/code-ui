---
date: ! '2021/05/01 '
title: Hackerrank - Weather Observation Station 2 solution
tags:
  - hackerrank
  - sql
  - aggregation
summary: ''
link: https://www.hackerrank.com/challenges/weather-observation-station-2
draft: false
---

### Solution one:

```sql
select round(sum(lat_n),2), round(sum(long_w),2) from station;
```
