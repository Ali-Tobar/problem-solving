export function mango(quantity: number, price: number): number {
  let totalPrice = 0;

  for (let i = 0; i < quantity; i++) {
    if ((i + 1) % 3 === 0) continue;
    totalPrice += price;
  }

  return totalPrice;
}

//Another Solution
export function mango2(quantity: number, price: number): number {
  const freeMangoes = Math.floor(quantity / 3);
  const paidMangoes = quantity - freeMangoes;
  return paidMangoes * price;
}
