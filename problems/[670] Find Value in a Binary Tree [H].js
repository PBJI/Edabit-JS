/*Find Value in a Binary Tree

An array that represents a Binary Tree is in the following form:
_________
binaryTree = [val, arrLeft, arrRight]
_________

When arrLeft is the left side of the tree and arrRight is the right side of the tree.
To illustrate:
_________
const arr1 = [3, [ 8, [ 5, null, null], null], [ 7, null, null]]

// arr1 represents the following Binary Tree:

                    3
                   / \
                  8   7
                 /\   /\
                5  N N  N
               /\
               N N

// Where N represents null.
_________

Create a function that takes an array that represent a Binary Tree and a value and return true if the value is in the tree and, false otherwise.


[Examples]

_________
valueInTree(arr1, 5) ➞ true

valueInTree(arr1, 9) ➞ false

valueInTree(arr2, 51) ➞ false
_________



[Notes]

The tree will contain integers only and will be presented by an array in the specified format.


[data_structures] [validation] 



-------------------------------------------------------------------
[Resources]
___________________________
Flat Infinity
https://gist.github.com/nimahkh/8dd36bcd628e71dc9a520b6efe2a0d92
Javascript flat infinity.
___________________________
___________________________
Array.prototype.includes()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
___________________________
___________________________
Array.prototype.flat()
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/flat
Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
___________________________
___________________________
Array flat() Method
https://www.javascripttutorial.net/es-next/javascript-array-flat/
Flatten an array to infinity.
___________________________
*/ 
// Your code should go here:

