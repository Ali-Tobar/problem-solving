// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

//Solution

function getMiddle(s) {
  const middle = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    return s.slice(middle - 1, middle + 1);
  }

  return s[middle];
}

console.log(getMiddle("Mohammed")); //am





// Another Solution
function getMiddle2(s) {
  const middle = s.length / 2;
  return s.slice(Math.ceil(middle) - 1, Math.floor(middle) + 1);
}
console.log(getMiddle2("Mohammed")); // am




//Alternative Solutions

function getMiddle3(s) {
  const middle = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.slice(middle - 1, middle + 1) : s[middle];
}
console.log(getMiddle3("Mohammed")); // am
