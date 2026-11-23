//  That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

//Solution  with using Short-Circuit Evaluation(Guard Condition) and Logical AND (&&)
var isSquare = function (n) {
  return n >= 0 && Number.isInteger(Math.sqrt(n));
};
console.log(isSquare(-25)); // false
console.log(isSquare(3)); // false
console.log(isSquare(4)); // true




//Another Solution using Modulo Operator % 1
const isSquare = (n) => Math.sqrt(n) % 1 === 0;



//Another Solution using Fractional Exponent ** 0.5
const isSquare = (n) => Math.isInteger(n ** 0.5)