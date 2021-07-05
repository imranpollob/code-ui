---
date: ! '2021/05/01 '
title: Hackerrank - Weather Observation Station 16 solution
tags:
  - hackerrank
  - sql
  - aggregation
summary: ''
link: https://www.hackerrank.com/challenges/weather-observation-station-16
draft: false
---

### Solution one:

```sql
select round(lat_n,4) from station where lat_n > 38.7780 order by lat_n limit 1;
```
