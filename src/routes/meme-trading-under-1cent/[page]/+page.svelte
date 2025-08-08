<script>
	import Exobanner from '$lib/components/ui/Ads/Exobanner.svelte';

  export let data;
  $: ({ coin, pageNum, totalCoins, displayRank, pageTitle } = data);

	import ExoVideoSlider from '$lib/components/ui/Ads/ExoVideoSlider.svelte';
	import OutstreamVideo from '$lib/components/ui/Ads/OutstreamVideo.svelte';


  const year = new Date().getFullYear();
  const canonicalUrl = `https://gossip.susmanga.com/meme-trading-under-1cent/${pageNum}`;
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content="Explore the #{displayRank} meme coin under 1 cent: {coin.name} - perfect for degen crypto traders in {year}." />
  <meta property="og:title" content="{pageTitle}" />
  <meta property="og:description" content="{coin.name} is ranked #{displayRank} in the top 20 meme coins still under a penny in {year}." />
  <meta property="og:image" content="{coin.image}" />
  <meta property="og:url" content="{canonicalUrl}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{pageTitle}" />
  <meta name="twitter:description" content="{coin.name} is ranked #{displayRank} in the top 20 meme coins under $1." />
  <meta name="twitter:image" content="{coin.image}" />
  <link rel="canonical" href={canonicalUrl} />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": pageTitle,
      "image": coin.image,
      "datePublished": new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "name": "SUSMANGA.COM"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SUSMANGA.COM",
        "logo": {
          "@type": "ImageObject",
          "url": "https://cdn.susmanga.com/logo.png"
        }
      },
      "description": `${coin.name} is ranked #${displayRank} in the top 20 meme coins under $1.`
    })}
  </script>
</svelte:head>

<div class="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-8 w-full max-w-4xl mx-auto">
  <div class="w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black border border-pink-400/30 rounded-2xl shadow-2xl overflow-hidden mb-8">
    <div class="bg-gradient-to-r from-pink-400 to-yellow-300 p-6 text-center shadow-inner">
      <div class="flex items-center justify-center space-x-4">
        <div class="bg-white/20 rounded-full px-4 py-2">
          <span class="text-white font-bold text-lg">#{displayRank}</span>
        </div>
        <h1 class="text-2xl md:text-3xl font-bold text-black flex-1">{pageTitle}</h1>
        <div class="bg-white/20 rounded-full px-4 py-2">
          <span class="text-white font-bold text-lg">{displayRank}/{totalCoins}</span>
        </div>
      </div>
    </div>

    <div class="p-8">
      <div class="flex justify-center mb-6">
        <div class="relative group w-80 h-80 md:w-96 md:h-96">
          <img
            src={coin.image}
            alt={coin.name}
            class="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-white mb-3 leading-tight">{coin.name}</h2>
        <p class="text-gray-400 text-md mb-2">Price: <span class="text-green-300 font-semibold">{coin.price}</span></p>
        <p class="text-gray-400 text-md mb-2">Market Cap: <span class="text-green-300 font-semibold">{coin.marketCap}</span></p>
        <p class="text-gray-300 text-base leading-relaxed">{coin.description}</p>
      </div>

      <div class="flex justify-center mt-6 space-x-4">
        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out Meme Coin #${displayRank} - ${coin.name} 🚀 ${canonicalUrl}`)}`} target="_blank" rel="noopener noreferrer" class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Tweet
        </a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${canonicalUrl}`} target="_blank" rel="noopener noreferrer" class="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded">
          Share
        </a>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 items-center mt-8">
        {#if pageNum < totalCoins}
          <a href="/meme-trading-under-1cent/{pageNum + 1}" class="group w-full sm:w-48 flex items-center justify-center space-x-3 bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span>Previous Coin</span>
          </a>
        {:else}
          <div class="w-full sm:w-48"></div>
        {/if}

        <div class="text-center flex-shrink-0 px-4">
          <div class="text-gray-400 text-sm mb-1">Current Rank</div>
          <div class="text-pink-400 font-bold text-2xl animate-pulse">#{displayRank}</div>
        </div>

        {#if pageNum > 1}
          <a href="/meme-trading-under-1cent/{pageNum - 1}" class="group w-full sm:w-48 flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <span>Next Coin</span>
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </a>
        {:else}
          <div class="w-full sm:w-48"></div>
        {/if}
      </div>
    </div>

    <div class="bg-gray-800/50 px-8 py-4 border-t border-gray-700">
      <div class="flex justify-between items-center text-sm text-gray-400">
        <span>SUSMANGA.COM Meme Coin Rankings</span>
        <a href="/" class="hover:text-pink-400 transition-colors">← Back to Home</a>
      </div>
    </div>

    <div class="w-[300px] h-[300px] flex items-center justify-center mx-auto mt-8">
      <Exobanner />
    </div>

    <div class="mt-8 w-full max-w-xl">
      <ExoVideoSlider />
      <OutstreamVideo />
    </div>
  </div>
</div>
