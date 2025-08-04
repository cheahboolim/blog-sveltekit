// src/routes/waifu/[page]/+page.ts
import { waifuData } from '$lib/waifu-data';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const total = waifuData.length;
	const pageNum = Number(params.page);

	if (isNaN(pageNum) || pageNum < 1 || pageNum > total) {
		throw error(404, 'Waifu not found');
	}

	// Flip the list so that /waifu/50 shows the first waifu in array (e.g., Asuna), and /waifu/1 shows the last (Speedwagon)
	const waifu = waifuData[total - pageNum];

	return {
		waifu,
		pageNum,
		totalWaifus: total,
		displayRank: pageNum // e.g., 50 → Asuna, 1 → Speedwagon
	};
}
