---
date: ! '2021/06/01 '
title: Hackerrank - Weather Observation Station 4 solution
tags:
  - hackerrank
  - sql
  - basic-select
summary: ''
link: https://www.hackerrank.com/challenges/weather-observation-station-4
draft: false
---

### Solution one:

```sql
SELECT COUNT(CITY) - COUNT(DISTINCT CITY) FROM STATION;
```
