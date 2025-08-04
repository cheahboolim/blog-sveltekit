<script lang="ts">
	export let data;
	const { waifu, pageNum, totalWaifus, displayRank } = data;
</script>

<svelte:head>
	<title>Top {displayRank} Waifu — {waifu.name}</title>
</svelte:head>

<div class="flex flex-col items-center justify-center py-10 px-4 space-y-6 text-center">
	<div class="bg-zinc-900 rounded-2xl p-6 shadow-2xl max-w-2xl w-full space-y-4">
		<h1 class="text-3xl md:text-4xl font-extrabold text-white">
			#{displayRank} — {waifu.name}
		</h1>

		<img
			src={waifu.image}
			alt={waifu.name}
			class="rounded-xl shadow-lg w-full max-w-sm mx-auto aspect-[3/4] object-cover"
			loading="lazy"
		/>
	</div>

	<div class="flex justify-between items-center w-full max-w-lg mt-6">
		{#if pageNum < totalWaifus}
			<a
				href={`/waifu/${pageNum + 1}`}
				class="group w-full sm:w-48 flex items-center justify-center space-x-3 bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
			>
				<svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
				</svg>
				<span>Previous</span>
			</a>
		{:else}
			<div class="w-full sm:w-48"></div>
		{/if}

		{#if pageNum > 1}
			<a
				href={`/waifu/${pageNum - 1}`}
				class="group w-full sm:w-48 flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
			>
				<span>Next</span>
				<svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
					<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
				</svg>
			</a>
		{:else}
			<div class="w-full sm:w-48"></div>
		{/if}
	</div>
</div>
