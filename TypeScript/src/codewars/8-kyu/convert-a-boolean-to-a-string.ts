// Description:
// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

export const booleanToString = (b: boolean): string => {
  return String(b);
};



//Another Solution
export const booleanToString2 = (b: boolean): string => b.toString();




//Another Solution
export const booleanToString3 = (b: boolean): string => `${b}`;



//Another Solution 
export const booleanToString4 = (b: boolean): string => (b ? "true" : "false");