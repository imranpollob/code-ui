---
date: ! '2021/06/01 '
title: Hackerrank - Weather Observation Station 5 solution
tags:
  - hackerrank
  - sql
  - basic-select
summary: ''
link: https://www.hackerrank.com/challenges/weather-observation-station-5
draft: false
---

### Solution one:

```sql
SELECT CITY, LENGTH(CITY) FROM STATION ORDER BY LENGTH(CITY) DESC LIMIT 1;
```

### Solution two:

```sql
SELECT CITY, LENGTH(CITY) FROM STATION ORDER BY LENGTH(CITY) LIMIT 1;
```
