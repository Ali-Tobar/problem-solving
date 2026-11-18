export function nearestSq(n: number): number {
  const lowerRoot = Math.floor(Math.sqrt(n));
  const upperRoot = Math.ceil(Math.sqrt(n));

  if (lowerRoot === upperRoot) {
    return n;
  }

  const lowerSquare = lowerRoot * lowerRoot;
  const upperSquare = upperRoot * upperRoot;

  return n - lowerSquare <= upperSquare - n ? lowerSquare : upperSquare;
}