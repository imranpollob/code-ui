---
date: ! '2021/07/04 '
title: Hackerrank - The report solution
tags:
  - hackerrank
  - sql
  - basic-join
summary: ''
link: https://www.hackerrank.com/challenges/the-report
draft: false
---

### Solution one:

```sql
SELECT CASE
           WHEN g.grade<8 THEN NULL
           ELSE s.name
       END,
       g.grade,
       s.marks
FROM students s
JOIN grades g ON s.marks BETWEEN g.min_mark AND g.max_mark
ORDER BY g.grade DESC,
         s.name,
         s.marks;
```
