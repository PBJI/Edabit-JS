/*
####  Get SHA-256 Hash  ####

Hash algorithms are easy to do one way, but essentially impossible to do in reverse. For example, if you hash something simple, like password123, it will give you a long code, unique to that word or phrase. Ideally, there's no way to do this in reverse. You can't take the hash code and go back to the word or phrase you started with.
Make a function that returns the SHA-256 secure hash for a given string. The hash should be formatted in a hexadecimal digit string.


[Examples]

_________
getSha256Hash("password123") ➞ "ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f"

getSha256Hash("Fluffy@home") ➞ "dcc1ac3a7148a2d9f47b7dbe3d733040c335b2a3d8adc7984e0c483c5b2c1665"

getSha256Hash("Hey dude!") ➞ "14f997f08b8ad032dcb274198684f995d34043f9da00acd904dc72836359ae0f"
_________



[Notes]

Bonus if you can do it without importing any libraries ;)


[algorithms] [cryptography] [strings] 



-------------------------------------------------------------------
[Resources]
___________________________
crypto.createHash() Method
https://www.geeksforgeeks.org/node-js-crypto-createhash-method/
Is used to create a Hash object that can be used to create hash digests by using the stated algorithm.
___________________________
___________________________
Hashing Algorithms and Security
https://www.youtube.com/watch?v=b4b8ktEV4Bg
Hashing Algorithms are used to ensure file authenticity, but how secure are they and why do they keep changing? Tom Scott hashes it out.
___________________________
___________________________
SHA-2
https://en.wikipedia.org/wiki/SHA-2
A set of cryptographic hash functions designed by the United States National Security Agency (NSA).[3] They are built using the Merkle–Damgård structure, from a one-way …
___________________________

*/
//Your code should go here:

