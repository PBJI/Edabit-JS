/*
####  Standard Competition Ranking  ####

Standard competition ranking (also known as "1224" ranking) assigns the same rank to matching values. Rank numbers are increased each time, so ranks are sometimes skipped. If we have 5 scores (the highest score having a rank of 1):
No matching values:
_________
Scores = [99, 98, 97, 96, 95]
Rank = 1,  2,  3,  4,  5
_________

With matching values:
_________
Scores = [99, 98, 98, 96, 95]
Rank = 1,  2,  2,  4,  5

// Second and third scores are equal, so rank "3" is skipped.
_________

Given an object containing the names and scores of 5 competitors, and a competitor name, return the rank of that competitor after applying competition ranking.


[Examples]

_________
competition_rank({
  George: 96,
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
  }, "Jane") ➞ 4

competition_rank({
  Kate: 92,
  Carol: 92,
  Jess: 87,
  Bruce: 87,
  Scott: 84
  }, "Bruce") ➞ 3
_________



[Notes]

The highest score has a rank value of 1.


[data_structures] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
Standard Competition Ranking Explained
https://en.wikipedia.org/wiki/Ranking#Standard_competition_ranking_("1224"_ranking)
In competition ranking, items that compare equal receive the same ranking number, and then a gap is left in the ranking numbers. The number of ranking numbers that are …
___________________________

*/
//Your code should go here:

