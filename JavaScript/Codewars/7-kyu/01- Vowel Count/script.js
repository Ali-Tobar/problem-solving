// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  const vowels = 'aeiou';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}


// Another Solution 
function getCount(str) {
  const vowels = 'aeiou';
   return str.split('').filter(char => vowels.includes(char)).length;
}


//Another Solution 
function getCount(str) {
  const vowels = 'aeiou';
  return [...str].reduce((count, char) => {
    return vowels.includes(char) ? count + 1 : count;
  }, 0);
}