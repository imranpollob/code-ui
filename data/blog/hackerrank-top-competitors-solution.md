---
date: ! '2021/07/04 '
title: Hackerrank - Top Competitors solution
tags:
  - hackerrank
  - sql
  - basic-join
summary: ''
link: https://www.hackerrank.com/challenges/full-score
draft: false
---

### Solution one:

```sql
SELECT h.hacker_id,
       h.NAME
FROM   submissions s
       LEFT JOIN hackers h
              ON s.hacker_id = h.hacker_id
       LEFT JOIN challenges c
              ON s.challenge_id = c.challenge_id
       LEFT JOIN difficulty d
              ON c.difficulty_level = d.difficulty_level
WHERE  s.score = d.score
GROUP  BY h.hacker_id
HAVING( Count(*) > 1 )
ORDER  BY Count(*) DESC,
          s.hacker_id;
```
