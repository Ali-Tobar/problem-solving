// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

//Solution
function accum(s) {
  return s
    .toLowerCase()
    .split("")
    .map((char, index) => char.toUpperCase() + char.repeat(index))
    .join("-");
}

console.log(accum("RqaEzty"));



//Solution Using Spread Operator and Template Literals
function accum2(s) {
  return [...s]
    .map(
      (char, index) =>
        `${char.toUpperCase()}${char.toLowerCase().repeat(index)}`,
    )
    .join("-");
}
console.log(accum2("RqaEzty"));





//The solution using an imperative style with a for loop
function accum3(s) {
  const parts = [];

  for (let i = 0; i < s.length; i++) {
    const formattedPart = s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
    parts.push(formattedPart);
  }

  return parts.join("-");
}
console.log(accum3("RqaEzty"));
