---
date: ! '2021/07/04 '
title: Hackerrank - Population Census solution
tags:
  - hackerrank
  - sql
  - basic-join
summary: ''
link: https://www.hackerrank.com/challenges/asian-population
draft: false
---

### Solution one:

```sql
select sum(city.population) from city left join country on city.countrycode = country.code where continent = 'asia';
```
