// Redirect from /waifu to /waifu/50
import { redirect } from '@sveltejs/kit';

export const load = () => {
	throw redirect(302, '/waifu/50');
};
