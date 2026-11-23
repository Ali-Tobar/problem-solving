export function quarterOf(month: number): number {
  if (month <= 3) return 1;
  if (month <= 6) return 2;
  if (month <= 9) return 3;
  return 4;
}

//Another Solution 

export const quarterOf2 = (month: number): number => Math.ceil(month / 3);
