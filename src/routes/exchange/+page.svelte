<script>
	import { onMount } from 'svelte';

	const targetUrl = 'https://crypto.com/exch/7vfr5ak552';

	onMount(() => {
		// Fire GA4 tracking event if available
		try {
			if (typeof gtag === 'function') {
				gtag('event', 'referral_click', {
					event_category: 'Affiliate',
					event_label: 'Crypto.com',
					value: 0.10,
					currency: 'USD'
				});
			}
		} catch (e) {
			console.warn("Tracking failed:", e);
		}

		// Short delay before redirect (enough for tracking to fire)
		setTimeout(() => {
			window.location.href = targetUrl;
		}, 250); // fast redirect
	});
</script>

<div class="min-h-screen flex items-center justify-center bg-black text-white">
	<div class="text-center">
		<p class="text-lg font-semibold mb-2">Redirecting you now…</p>
		<p class="text-sm opacity-75">
			If it doesn’t work, <a href={targetUrl} class="text-pink-400 underline">click here</a>.
		</p>
	</div>
</div>

<!-- Fallback for users with JavaScript disabled -->
<noscript>
	<meta http-equiv="refresh" content="0; url=https://crypto.com/exch/7vfr5ak552" />
	<p style="text-align:center; color:white; background:black; padding:1em;">
		JavaScript is disabled. Please <a href="https://crypto.com/exch/7vfr5ak552">click here</a> to continue.
	</p>
</noscript>
