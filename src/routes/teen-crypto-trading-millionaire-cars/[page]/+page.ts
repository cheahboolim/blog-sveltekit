import { error } from '@sveltejs/kit';
import { cryptoCars } from '$lib/cars-cryptomillionaire';

export function load({ params }) {
  const pageNum = parseInt(params.page);
  const totalCars = cryptoCars.length;

  if (isNaN(pageNum) || pageNum < 1 || pageNum > totalCars) {
    throw error(404, 'Car not found');
  }

  // ✅ Now index 0 = Rank #1, index 49 = Rank #50
  const car = cryptoCars[pageNum - 1];

  return {
    car,
    pageNum,
    totalCars,
    displayRank: pageNum
  };
}
