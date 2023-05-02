/*
####  Premier League Champions  ####

Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded, and returns the team name with the highest number of points. If two teams have the same number of points, return the team with the largest goal difference.


[How to Calculate Points and Goal Difference]

_________
team = { name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
Goal Difference = scored - conceded = 88 - 20 = 68
_________



[Examples]

_________
champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  ])
➞ "Manchester United"
_________



[Notes]

Input is an array of teams.


[arrays] [objects] [sorting] 



-------------------------------------------------------------------
[Resources]
___________________________
sort() Method
https://www.w3schools.com/jsref/jsref_sort.asp
Sorts the items of an array. The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down). By default, the sort() method sorts t …
___________________________

*/
//Your code should go here:

