---
date: ! '2021/07/04 '
title: Hackerrank - African Cities solution
tags:
  - hackerrank
  - sql
  - basic-join
summary: ''
link: https://www.hackerrank.com/challenges/african-cities
draft: false
---

### Solution one:

```sql
select city.name from city left join country on city.countrycode = country.code where continent = 'africa';
```
