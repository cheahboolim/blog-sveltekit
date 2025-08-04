<!-- src/routes/waifu/[page]/+page.svelte -->
<script>
  import ExoClickAd from '$lib/components/ui/Ads/ExoClickAd.svelte';
  // import WaifuCard from '$lib/components/waifu-card.svelte'; // Commented out until we create it

  export let data;
  
  $: ({ waifu, pageNum, totalWaifus } = data);
</script>

<svelte:head>
  <title>Waifu #{pageNum} - {waifu.name} | SUSMANGA.COM</title>
</svelte:head>

<div class="flex flex-col items-center justify-center p-4 md:p-8 w-full">
  <!-- Temporary waifu display until WaifuCard is created -->
  <div class="max-w-md mx-auto bg-black border border-pink-500 rounded-lg shadow-lg overflow-hidden">
    <div class="p-6 text-center">
      <h1 class="text-2xl font-bold text-pink-500 mb-4">Waifu #{pageNum}</h1>
      <img 
        src={waifu.image} 
        alt={waifu.name}
        class="w-full h-96 object-cover rounded-lg mb-4"
        loading="lazy"
      />
      <h2 class="text-xl font-semibold text-white mb-2">{waifu.name}</h2>
      <p class="text-gray-400">Page {pageNum} of {totalWaifus}</p>
      
      <!-- Navigation buttons -->
      <div class="flex justify-between mt-6">
        {#if pageNum > 1}
          <a 
            href="/waifu/{pageNum - 1}" 
            class="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded transition-colors"
          >
            ← Previous
          </a>
        {:else}
          <div></div>
        {/if}
        
        {#if pageNum < totalWaifus}
          <a 
            href="/waifu/{pageNum + 1}" 
            class="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded transition-colors"
          >
            Next →
          </a>
        {/if}
      </div>
    </div>
  </div>
  
  <div class="mt-8 w-full max-w-xl">
    <ExoClickAd />
  </div>
</div>