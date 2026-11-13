// Description:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Mathematics  Fundamentals

export function evenOrOdd(num: number): string {
  if (num % 2 === 0) {
    return "Even";
  }

  return "Odd";
}
