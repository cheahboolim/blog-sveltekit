// src/routes/teen-crypto-trading-millionaire-cars/+page.server.ts
import { redirect } from '@sveltejs/kit';

export const load = () => {
  throw redirect(302, '/teen-crypto-trading-millionaire-cars/30');
};
