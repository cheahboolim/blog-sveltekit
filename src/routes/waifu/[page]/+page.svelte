<!-- src/routes/waifu/[page]/+page.svelte -->
<script>
  import ExoClickAd from '$lib/components/ui/Ads/ExoClickAd.svelte';

  export let data;
  
  $: ({ waifu, pageNum, totalWaifus, displayRank } = data);
</script>

<svelte:head>
  <title>Waifu #{displayRank} - {waifu.name} | SUSMANGA.COM</title>
  <meta name="description" content="Discover {waifu.name} - Ranked #{displayRank} in our top {totalWaifus} waifu collection" />
</svelte:head>

<div class="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 w-full max-w-4xl mx-auto">
  <!-- Main Waifu Card -->
  <div class="w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black border border-pink-500/30 rounded-2xl shadow-2xl overflow-hidden mb-8">
    <!-- Header with ranking -->
    <div class="bg-gradient-to-r from-pink-600 to-pink-500 p-6 text-center">
      <div class="flex items-center justify-center space-x-4">
        <div class="bg-white/20 rounded-full px-4 py-2">
          <span class="text-white font-bold text-lg">#{displayRank}</span>
        </div>
        <h1 class="text-2xl md:text-3xl font-bold text-white flex-1">Top Waifu Ranking</h1>
        <div class="bg-white/20 rounded-full px-4 py-2">
          <span class="text-white font-bold text-lg">{displayRank}/{totalWaifus}</span>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="p-8">
      <!-- Waifu image -->
      <div class="flex justify-center mb-6">
        <div class="relative group">
          <img 
            src={waifu.image} 
            alt={waifu.name}
            class="w-80 h-80 md:w-96 md:h-96 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      <!-- Waifu name and details -->
      <div class="text-center mb-8">
        <h2 class="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">{waifu.name}</h2>
        <div class="flex items-center justify-center space-x-6 text-gray-400">
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Rank #{displayRank}</span>
          </div>
          <div class="flex items-center space-x-2">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
            </svg>
            <span>Waifu ID: {waifu.id}</span>
          </div>
        </div>
      </div>

      <!-- Navigation buttons -->
      <div class="flex justify-between items-center">
        {#if displayRank < totalWaifus}
          <a 
            href="/waifu/{pageNum + 1}" 
            class="group flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span>Previous Rank</span>
          </a>
        {:else}
          <div class="w-32"></div>
        {/if}

        <!-- Rank indicator -->
        <div class="text-center">
          <div class="text-gray-400 text-sm mb-1">Current Ranking</div>
          <div class="text-pink-500 font-bold text-xl">#{displayRank}</div>
        </div>

        {#if displayRank > 1}
          <a 
            href="/waifu/{pageNum - 1}" 
            class="group flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Next Rank</span>
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </a>
        {:else}
          <div class="w-32"></div>
        {/if}
      </div>
    </div>

    <!-- Footer with additional info -->
    <div class="bg-gray-800/50 px-8 py-4 border-t border-gray-700">
      <div class="flex justify-between items-center text-sm text-gray-400">
        <span>SUSMANGA.COM Waifu Rankings</span>
        <a href="/" class="hover:text-pink-500 transition-colors">← Back to Home</a>
      </div>
    </div>
  </div>

  <!-- Ad Section -->
  <div class="w-full max-w-xl">
    <ExoClickAd />
  </div>
</div>