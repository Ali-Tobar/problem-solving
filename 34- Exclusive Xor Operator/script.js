function xor(a, b) {
  return a !== b;
}
console.log(xor(true, false));//true




//Another Solution Using Explicit Coercion
function xor2(a, b) {
  return Boolean(a) !== Boolean(b);
}
console.log(xor2(true, false));// true



//Another Solution Using Logical Operators
function xor3(a, b) {
  return (a && !b) || (!a && b);
}
console.log(xor3(true, false));//true 
