---
date: ! '2021/06/01 '
title: Hackerrank - Weather Observation Station 3 solution
tags:
  - hackerrank
  - sql
  - basic-select
summary: ''
link: https://www.hackerrank.com/challenges/weather-observation-station-3
draft: false
---

### Solution one:

```sql
SELECT DISTINCT CITY FROM STATION WHERE ID % 2 = 0;
```
