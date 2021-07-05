---
date: ! '2021/05/01 '
title: Hackerrank - The PADS solution
tags:
  - hackerrank
  - sql
  - advanced-select
summary: ''
link: https://www.hackerrank.com/challenges/the-pads
draft: false
---

### Solution one:

```sql
SELECT CONCAT(NAME,'(',LEFT(OCCUPATION,1),')')
FROM OCCUPATIONS
ORDER BY NAME;
```

### Solution two:

```sql
SELECT CONCAT("There are total ",COUNT(OCCUPATION)," ",LOWER(OCCUPATION),"s.")
FROM OCCUPATIONS
GROUP BY OCCUPATION
ORDER BY COUNT(OCCUPATION),
         OCCUPATION;
```
