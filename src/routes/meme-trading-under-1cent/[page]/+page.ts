// src/routes/meme-trading-under-1cent/[page]/+page.ts
import { error } from '@sveltejs/kit';
import { memeCoins } from '$lib/meme-under-onecent';

const year = new Date().getFullYear();
const titles = [
  `Top 20 Meme Coins That Haven’t Reached $0.01 Yet – Hidden Crypto Gems 🚀`,
  `Best Meme Coins Under $0.01 in ${year} – Next Shiba Inu?`,
  `Meme Coins to Watch Before They Explode Past $0.01 💥`,
  `Undervalued Meme Tokens: Top 20 Under $0.01 Right Now`,
  `Buy Low: Meme Cryptos Under $0.01 That Could Moon 🌙`
];

export function load({ params }) {
  const pageNum = parseInt(params.page);
  const totalCoins = memeCoins.length;

  if (isNaN(pageNum) || pageNum < 1 || pageNum > totalCoins) {
    throw error(404, 'Coin not found');
  }

  // Use correct index for ranking
  const coin = memeCoins[pageNum - 1];
  const pageTitle = titles[Math.floor(Math.random() * titles.length)];

  return {
    coin,
    pageNum,
    totalCoins,
    displayRank: pageNum,
    pageTitle
  };
}
