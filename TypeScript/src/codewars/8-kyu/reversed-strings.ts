// Description:
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

export function solution(str: string): string {
  return str.split("").reverse().join('');
}

//Another Solution
export function solution2(str: string): string {
  return [...str].reverse().join('');
}
