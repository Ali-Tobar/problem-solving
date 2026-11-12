function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== 1) {
      return arr[i];
    }
  }
  return null;
}
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));

// Another Solution using Array Method like find
function firstNonConsecutive2(arr) {
  const found = arr.find(
    (num, index) => index > 0 && num !== arr[index - 1] + 1,
  );
  return found !== undefined ? found : null;
}
console.log(firstNonConsecutive2([1, 2, 3, 4, 6, 7, 8]));