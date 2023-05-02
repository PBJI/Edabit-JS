/*
####  Learn Lodash: Write Your Own Version of Partition, Split an Array in Two  ####

Write your own version of the lodash _.partition function. Partition receives a "collection", which can be an array or object, and a function that will check each item in the collection, it returns an array containing two arrays, one of the values that passed the check and the other with values that didn't.
_________
const array = [{item: true}, {item: true}, {item: false}]
partition(array) ➞ [[{item: true}, {item: true}], [{item: false}]]
_________



[Arguments]

_________
*) collection (Array|Object): The collection to iterate over.
*) [check](Function): The function invoked per iteration.
_________



[Returns]

_________
*) (Array): Returns the array containing two arrays each holding either those that passed and those that didn't.
_________

The function passed in can be a regular function, but it can also be what the lodash writers refer to as shorthand. Shorthand means that if a particular value is passed (e.g. a string or an array), the partition function will know to use a lodash helper function. For this challenge, you're permitted to import the helpers mentioned in the examples below.


[Examples]

_________
const users = [
 { 'user': 'barney',  'age': 36, 'active': false },
 { 'user': 'fred',    'age': 40, 'active': true },
 { 'user': 'pebbles', 'age': 1,  'active': false }
];
_________

Using just a normal function passed int.
_________
_.partition(users, d => d.active; }) ➞ objects for [['fred'], ['barney', 'pebbles']]
_________

Using the _.matches shorthand - just an object.
_________
_.partition(users, { 'age': 1, 'active': false })
➞  objects for [['pebbles'], ['barney', 'fred']]
_________

Using _.matchesProperty shorthand - an array representing a key-value pair.
_________
_.partition(users, ['active', false]) 
➞ objects for [['barney', 'pebbles'], ['fred']]
_________

Using _.property shorthand - just a string.
_________
_.partition(users, 'active')
➞  objects for [['fred'], ['barney', 'pebbles']]
_________



[Notes]

We've already written our own versions of these helpers property matchesProperty
_________
*) Please don't import lodash, your challenge is to write your own version. I can write complicated checking functions to prevent you from importing lodash but it makes it can cause problems in the tests. If you do cheat and just import partition, everyone will be able to see it.
*) This entire series of challenges can be found here.
_________



[arrays] [functional_programming] [objects] 



-------------------------------------------------------------------
[Resources]
___________________________
_.matches(source)
https://lodash.com/docs/#matches
Creates a function that performs a partial deep comparison between a given object and source, returning true if the given object has equivalent property values, else false.
___________________________

*/
//Your code should go here:

