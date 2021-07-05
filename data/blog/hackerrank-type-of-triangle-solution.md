---
date: ! '2021/05/01 '
title: Hackerrank - Type Of Triangle solution
tags:
  - hackerrank
  - sql
  - advanced-select
summary: ''
link: https://www.hackerrank.com/challenges/what-type-of-triangle
draft: false
---

### Solution one:

```sql
SELECT
  CASE
    WHEN A+B>C AND A+C>B AND B+C>A
      THEN
        CASE
          WHEN A=B AND B=C THEN "Equilateral"
          WHEN A=B OR B=C OR A=C THEN "Isosceles"
          ELSE "Scalene"
        END
      ELSE "Not A Triangle"
  END
FROM TRIANGLES;
```
