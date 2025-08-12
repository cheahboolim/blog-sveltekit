<script>
  import { memeCoins } from '$lib/meme-under-onecent-2';
  import { onMount } from 'svelte';

  export let page; // from route param

  // Pagination settings
  const coinsPerPage = 10;
  const totalCoins = memeCoins.length;

  // Calculate range (backwards order)
  const startRank = totalCoins - (page - 1) * coinsPerPage;
  const endRank = Math.max(startRank - coinsPerPage + 1, 1);

  let displayedCoins = [];

  // Randomize images each load
  function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  onMount(() => {
    // Reverse to show #30 at top
    const ranked = memeCoins
      .map((coin, i) => ({ ...coin, rank: totalCoins - i }))
      .reverse();

    const pageSlice = ranked.filter(c => c.rank <= startRank && c.rank >= endRank);
    displayedCoins = shuffle(pageSlice);
  });

  // Month/year for SEO
  const now = new Date();
  const monthYear = now.toLocaleString('default', { month: 'long', year: 'numeric' });

  const title = `Top Meme Coins Under 1 Cent – ${monthYear}`;
  const description = `Discover the top meme coins under 1 cent ranked ${startRank} to ${endRank} for ${monthYear}.`;
  const canonicalUrl = `https://susmanga.com/meme-under-onecent/${page}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalUrl} />

  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonicalUrl} />
  <meta property="og:image" content={displayedCoins[0]?.image} />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={displayedCoins[0]?.image} />
</svelte:head>

<main class="bg-gray-900 text-white min-h-screen py-8">
  <div class="container mx-auto px-4">
    <h1 class="text-3xl font-bold mb-6">{title}</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each displayedCoins as coin}
        <div class="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 transition">
          <img src={coin.image} alt={coin.name} class="w-full h-48 object-cover rounded-md mb-4" />
          <h2 class="text-xl font-semibold mb-2">#{coin.rank} – {coin.name}</h2>
          <p class="text-gray-300 text-sm mb-4">{coin.description}</p>
          <a
            href={coin.link}
            target="_blank"
            rel="noopener"
            class="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded font-bold"
          >
            Check Live Price
          </a>
        </div>
      {/each}
    </div>

    <!-- Pagination -->
    <div class="flex justify-between mt-8">
      {#if page > 1}
        <a href={`/meme-under-onecent/${+page - 1}`} class="text-yellow-400 hover:underline">← Previous</a>
      {/if}
      {#if page * coinsPerPage < totalCoins}
        <a href={`/meme-under-onecent/${+page + 1}`} class="text-yellow-400 hover:underline">Next →</a>
      {/if}
    </div>
  </div>
</main>

