---
date: ! '2021/06/01 '
title: Hackerrank - Weather Observation Station 6 solution
tags:
  - hackerrank
  - sql
  - basic-select
summary: ''
link: https://www.hackerrank.com/challenges/weather-observation-station-6
draft: false
---

### Solution one:

```sql
SELECT DISTINCT CITY FROM STATION WHERE CITY LIKE "A%" OR CITY LIKE "E%" OR CITY LIKE "I%" OR CITY LIKE "O%" OR CITY LIKE "U%";
```

### Solution two:

```sql
SELECT DISTINCT CITY FROM STATION WHERE CITY REGEXP '^[AEIOU]';
```
