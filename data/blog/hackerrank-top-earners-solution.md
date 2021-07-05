---
date: ! '2021/05/01 '
title: Hackerrank - Top Earners solution
tags:
  - hackerrank
  - sql
  - aggregation
summary: ''
link: https://www.hackerrank.com/challenges/earnings-of-employees
draft: false
---

### Solution one:

```sql
select months*salary as e,count(*) from employee group by e order by e desc limit 1;
```
