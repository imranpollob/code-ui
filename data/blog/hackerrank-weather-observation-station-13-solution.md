---
date: ! '2021/05/01 '
title: Hackerrank - Weather Observation Station 13 solution
tags:
  - hackerrank
  - sql
  - aggregation
summary: ''
link: https://www.hackerrank.com/challenges/weather-observation-station-13
draft: false
---

### Solution one:

```sql
select round(sum(lat_n),4) from station where lat_n > 38.7880 and lat_n < 137.2345;
```
