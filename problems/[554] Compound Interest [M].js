/*Compound Interest

Suppose that you invest $10,000 for 10 years at an interest rate of 6% compounded monthly. What will be the value of your investment at the end of the 10 year period?
Create a function that accepts the principal p, the term in years t, the interest rate r, and the number of compounding periods per year n. The function returns the value at the end of term rounded to the nearest cent.
For the example above:
_________
compoundInterest(10000, 10, 0.06, 12) ➞ 18193.97
_________

Note that the interest rate is given as a decimal and n=12 because with monthly compounding there are 12 periods per year. Compounding can also be done annually, quarterly, weekly or daily.


[Examples]

_________
compoundInterest(100, 1, 0.05, 1) ➞ 105.0

compoundInterest(3500, 15, 0.1, 4) ➞ 15399.26

compoundInterest(100000, 20, 0.15, 365) ➞ 2007316.26
_________



[Notes]

See the Resources tab for the interest formula and more information.


[algebra] [math] 



-------------------------------------------------------------------
[Resources]
___________________________
What's the difference between simple interest vs. compound interest?
https://www.fool.com/knowledge-center/simple-interest-vs-compound-interest-differences-a.aspx
Here's what you need to know about the two ways of calculating interest.
___________________________
___________________________
Compound Interest Versus Simple Interest
https://www.investopedia.com/ask/answers/042315/what-difference-between-compounding-interest-and-simple-interest.asp
Simple interest is only based on the principal amount of a loan, while compound interest is based on the principal amount and the accumulated interest.
___________________________
___________________________
Compound Interest Formula With Examples
https://www.thecalculatorsite.com/articles/finance/compound-interest-formula.php
Multiply the principal amount by one plus the annual interest rate to the power of the number of compound periods to get a combined figure for principal and compound in …
___________________________
___________________________
Number.prototype.toFixed()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
Formats a number using fixed-point notation.
___________________________
___________________________
Math.pow()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
Returns the base to the exponent power, that is, baseexponent.
___________________________
___________________________
What is compound interest?
https://www.fool.com/knowledge-center/compound-interest.aspx
When it comes to calculating interest, there are two basic choices: simple and compound. Simple interest simply means a set percentage of the principal every year, and …
___________________________
___________________________
pow() Method
https://www.w3schools.com/jsref/jsref_pow.asp
Returns the value of x to the power of y (xy).
___________________________
*/ 
// Your code should go here:

