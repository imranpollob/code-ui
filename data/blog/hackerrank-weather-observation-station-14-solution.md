---
date: ! '2021/05/01 '
title: Hackerrank - Weather Observation Station 14 solution
tags:
  - hackerrank
  - sql
  - aggregation
summary: ''
link: https://www.hackerrank.com/challenges/weather-observation-station-14
draft: false
---

### Solution one:

```sql
select round(max(lat_n),4) from station where lat_n < 137.2345;
```
