<script>
  export let data;

  $: ({ waifu, pageNum, totalWaifus, displayRank } = data);
</script>

<svelte:head>
  <title>Waifu #{displayRank} - {waifu.name} | SUSMANGA.COM</title>
  <meta name="description" content="Discover {waifu.name} - Ranked #{displayRank} in our top {totalWaifus} waifu collection" />
  <meta property="og:title" content="Waifu #{displayRank} - {waifu.name} | SUSMANGA.COM" />
  <meta property="og:description" content="Discover {waifu.name} ranked #{displayRank} in our waifu list" />
  <meta property="og:image" content="{waifu.image}" />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
  <style>
    html { font-family: 'Poppins', sans-serif; }
  </style>
</svelte:head>

<div class="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-8 w-full max-w-4xl mx-auto">
  <div class="w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black border border-pink-500/30 rounded-2xl shadow-2xl overflow-hidden mb-8">
    <!-- Header -->
    <div class="bg-gradient-to-r from-[#FF4D8D] to-[#FF73AC] p-6 text-center shadow-inner">
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

    <!-- Main Content -->
    <div class="p-8">
      <!-- Waifu Image -->
      <div class="flex justify-center mb-6">
        <div class="relative group w-80 h-80 md:w-96 md:h-96">
          <img
            src={waifu.image}
            alt={waifu.name}
            class="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-black/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="absolute -inset-1 rounded-xl border-4 border-pink-500/40 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      <!-- Name & Info -->
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-white mb-3 leading-tight">{waifu.name}</h2>
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

      <!-- Navigation -->
      <div class="flex flex-col sm:flex-row gap-4 items-center">
        {#if displayRank < totalWaifus}
          <a 
            href="/waifu/{pageNum + 1}" 
            class="group w-full sm:w-48 flex items-center justify-center space-x-3 bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span>Previous Rank</span>
          </a>
        {:else}
          <div class="w-full sm:w-48"></div>
        {/if}

        <div class="text-center flex-shrink-0 px-4">
          <div class="text-gray-400 text-sm mb-1">Current Ranking</div>
          <div class="text-pink-500 font-bold text-2xl animate-pulse">#{displayRank}</div>
        </div>

        {#if displayRank > 1}
          <a 
            href="/waifu/{pageNum - 1}" 
            class="group w-full sm:w-48 flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Next Rank</span>
            <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </a>
        {:else}
          <div class="w-full sm:w-48"></div>
        {/if}
      </div>
    </div>

    <!-- Footer -->
    <div class="bg-gray-800/50 px-8 py-4 border-t border-gray-700">
      <div class="flex justify-between items-center text-sm text-gray-400">
        <span>SUSMANGA.COM Waifu Rankings</span>
        <a href="/" class="hover:text-pink-500 transition-colors">← Back to Home</a>
      </div>
    </div>
  </div>

  <!-- Ad Section Placeholder -->
  <!-- <AdComponentHere /> -->

</div>
