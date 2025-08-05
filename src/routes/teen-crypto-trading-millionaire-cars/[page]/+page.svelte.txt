
<script>
  export let data;
  $: ({ car, pageNum, totalCars, displayRank } = data);
</script>

<svelte:head>
  <title>Crypto Car #{displayRank} - {car.name} | SUSMANGA.COM</title>
  <meta name="description" content="Explore the #{displayRank} most loved crypto millionaire car: {car.name} - the perfect ride for teen investors and NFT moguls." />
  <meta property="og:title" content="Crypto Car #{displayRank} - {car.name} | SUSMANGA.COM" />
  <meta property="og:description" content="#{car.name} is ranked #{displayRank} in the top 30 cars teen crypto millionaires are obsessed with in 2025." />
  <meta property="og:image" content="{car.image}" />
</svelte:head>

<div class="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-8 w-full max-w-4xl mx-auto">
  <div class="w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black border border-green-400/30 rounded-2xl shadow-2xl overflow-hidden mb-8">
    <div class="bg-gradient-to-r from-[#00FFC2] to-[#00FFD1] p-6 text-center shadow-inner">
      <div class="flex items-center justify-center space-x-4">
        <div class="bg-white/20 rounded-full px-4 py-2">
          <span class="text-white font-bold text-lg">#{displayRank}</span>
        </div>
        <h1 class="text-2xl md:text-3xl font-bold text-black flex-1">Top Crypto Car</h1>
        <div class="bg-white/20 rounded-full px-4 py-2">
          <span class="text-white font-bold text-lg">{displayRank}/{totalCars}</span>
        </div>
      </div>
    </div>

    <div class="p-8">
      <div class="flex justify-center mb-6">
        <div class="relative group w-80 h-80 md:w-96 md:h-96">
          <img
            src={car.image}
            alt={car.name}
            class="w-full h-full object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-white mb-3 leading-tight">{car.name}</h2>
        <p class="text-gray-400 text-md mb-2">Price: <span class="text-green-300 font-semibold">{car.price}</span></p>
        <p class="text-gray-300 text-base leading-relaxed">{car.description}</p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 items-center">
        {#if pageNum < totalCars}
          <a 
            href="/teen-crypto-trading-millionaire-cars/{pageNum + 1}" 
            class="group w-full sm:w-48 flex items-center justify-center space-x-3 bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span>Previous Car</span>
          </a>
        {:else}
          <div class="w-full sm:w-48"></div>
        {/if}

        <div class="text-center flex-shrink-0 px-4">
          <div class="text-gray-400 text-sm mb-1">Current Rank</div>
          <div class="text-green-400 font-bold text-2xl animate-pulse">#{displayRank}</div>
        </div>

        {#if pageNum > 1}
          <a 
            href="/teen-crypto-trading-millionaire-cars/{pageNum - 1}" 
            class="group w-full sm:w-48 flex items-center justify-center space-x-3 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Next Car</span>
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
        <span>SUSMANGA.COM Crypto Car Rankings</span>
        <a href="/" class="hover:text-green-400 transition-colors">← Back to Home</a>
      </div>
    </div>
  </div>
</div>
