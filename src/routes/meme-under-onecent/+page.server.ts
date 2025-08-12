import type { PageServerLoad } from './$types';
import { memeCoins } from '$lib/meme-under-onecent-2';

export const load: PageServerLoad = ({ params }) => {
	const page = parseInt(params.page) || 1;
	const perPage = 10;

	// Shuffle every load
	const shuffledCoins = [...memeCoins].sort(() => Math.random() - 0.5);

	// Pagination
	const start = (page - 1) * perPage;
	const end = start + perPage;
	const paginatedCoins = shuffledCoins.slice(start, end);

	const totalPages = Math.ceil(memeCoins.length / perPage);

	// Month/Year for SEO
	const now = new Date();
	const month = now.toLocaleString('en-US', { month: 'long' });
	const year = now.getFullYear();

	return {
		coins: paginatedCoins,
		currentPage: page,
		totalPages,
		month,
		year,
		seo: {
			title: `Top Meme Coins Under 1 Cent – ${month} ${year}`,
			description: `Discover the most exciting meme coins under 1 cent this ${month} ${year}. Live prices, fun facts, and ranking updates!`,
			url: `https://susmanga.com/meme-under-onecent/${page}`
		}
	};
};
