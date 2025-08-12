<script>
	import { onMount } from 'svelte';

	let verifying = true;

	onMount(() => {
		// GA4 tracking event
		if (typeof gtag === 'function') {
			gtag('event', 'referral_click', {
				event_category: 'Affiliate',
				event_label: 'Crypto.com',
				value: 0.10,
				currency: 'USD'
			});
		}

		// Simulate verification step
		setTimeout(() => {
			verifying = false;
			// Redirect after "verification"
			setTimeout(() => {
				window.location.href = 'https://crypto.com/exch/7vfr5ak552';
			}, 500);
		}, 1000); // 1 second fake verification
	});
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-900 text-white">
	{#if verifying}
		<div class="text-center">
			<p class="text-lg font-semibold mb-2">Verifying you’re not a bot…</p>
			<p class="text-sm opacity-75">Please wait a moment.</p>
		</div>
	{:else}
		<div class="text-center">
			<p class="text-lg font-semibold mb-2">Verification complete.</p>
			<p class="text-sm opacity-75">Redirecting you now…</p>
		</div>
	{/if}
</div>
