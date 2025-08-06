// src/routes/meme-trading-under-1cent/+page.server.ts
import { redirect } from '@sveltejs/kit';

export const load = () => {
  throw redirect(302, '/meme-trading-under-1cent/20');
};
