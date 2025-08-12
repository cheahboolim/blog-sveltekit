// src/routes/7-meme/+page.server.ts
import type { PageServerLoad } from './$types';
import { memeCoins } from '$lib/7-meme'; // <- named import (important)

export const load: PageServerLoad = async () => {
  return {
    coins: memeCoins
  };
};
