// src/routes/waifu/[page]/+page.ts
import type { PageLoad } from './$types';
import { waifuData } from '$lib/waifu-data';

export const load: PageLoad = ({ params }) => {
  const pageNum = parseInt(params.page);
  const totalWaifus = waifuData.length;

  const waifuIndex = totalWaifus - pageNum;

  if (waifuIndex < 0 || waifuIndex >= totalWaifus) {
    throw new Error('Invalid waifu page');
  }

  const waifu = waifuData[waifuIndex];
  const displayRank = pageNum; // Displayed as-is to count up: 1 = #50, 50 = #1

  return {
    waifu,
    pageNum,
    totalWaifus,
    displayRank
  };
};
