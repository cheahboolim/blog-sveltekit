// src/routes/waifu/[page]/+page.ts
import { error } from '@sveltejs/kit';
import { waifuData } from '$lib/waifu-data.js';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const pageParam = params.page;
  
  if (!pageParam) {
    throw error(404, 'Page parameter missing');
  }
  
  const pageNum = Number.parseInt(pageParam, 10);
  
  // Validate page number
  if (isNaN(pageNum) || pageNum < 1 || pageNum > waifuData.length) {
    throw error(404, 'Waifu not found');
  }

  const waifu = waifuData.find((w) => w.id === pageNum);
  
  if (!waifu) {
    throw error(404, 'Waifu not found');
  }

  return {
    waifu,
    pageNum,
    totalWaifus: waifuData.length
  };
};