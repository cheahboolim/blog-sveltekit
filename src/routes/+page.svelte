<!-- src/routes/+page.svelte -->
<script>
  import ExoClickAd from '$lib/components/ui/Ads/ExoClickAd.svelte';
  import HighPerformanceAd from '$lib/components/ui/Ads/HighPerformanceAd.svelte';

  const comicCards = [
    {
      title: "Latest Manga",
      link: "https://susmanga.com",
      imageUrl: "https://cdn.susmanga.com/homepage/1.jpg?height=500&width=300",
    },
    {
      title: "Top Weekly", 
      link: "https://susmanga.com",
      imageUrl: "https://cdn.susmanga.com/homepage/2.jpg?height=500&width=300",
    },
    {
      title: "Most Favourite",
      link: "https://susmanga.com", 
      imageUrl: "https://cdn.susmanga.com/homepage/3.jpg?height=500&width=300",
    },
    {
      title: "Trending Now",
      link: "https://susmanga.com",
      imageUrl: "https://cdn.susmanga.com/homepage/4.jpg?height=500&width=300", 
    },
    {
      title: "Editor's Pick",
      link: "https://susmanga.com",
      imageUrl: "https://cdn.susmanga.com/homepage/5.jpg?height=500&width=300",
    },
    {
      title: "Waifu List", 
      link: "https://susmanga.com/waifu/50",
      imageUrl: "https://cdn.susmanga.com/homepage/6.jpg?height=500&width=300",
    },
  ];
</script>

<div class="flex flex-col items-center w-full">
  <!-- Banner Section -->
  <div class="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden flex items-center justify-center text-center">
    <img
      src="https://cdn.susmanga.com/homepage/waifu-background.jpg?height=600&width=1200"
      alt="Banner Background"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10"></div>
    <div class="relative z-20 flex flex-col items-center justify-center p-4 space-y-6 text-white">
      <h1 class="text-4xl md:text-6xl font-bold text-pink-500 leading-tight drop-shadow-lg">SUSMANGA.COM</h1>
      <p class="text-lg md:text-xl text-white drop-shadow-md">Fastest Updates Thousands of Selections</p>
      <a 
        href="https://susmanga.com/?utm_source=presusmanga_banner&utm_medium=website&utm_campaign=presusmanga_banner_cta"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-pink-600 text-white hover:bg-pink-500 text-xl px-10 py-5 rounded-full shadow-lg transition-colors duration-200 font-semibold"
      >
        BROWSE ALL MANGA
      </a>
    </div>
  </div>

  <!-- HighPerformanceAd Component -->
  <div class="w-[300px] h-[300px] flex items-center justify-center mx-auto mt-8">
    <HighPerformanceAd />
  </div>

  <!-- ExoClickAd Component -->
  <div class="mt-8 w-full max-w-xl">
    <ExoClickAd />
  </div>

  <!-- Collections Section -->
  <div class="flex flex-col items-center justify-center p-4 md:p-8 w-full max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-bold text-pink-500 mb-8 text-center">Browse Our Collections</h2>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {#each comicCards as card, index}
        <a 
          href={card.link} 
          target="_blank" 
          rel="noopener noreferrer"
          class="block w-full h-full"
        >
          <div class="w-full h-full bg-black border border-pink-500 shadow-lg rounded-lg overflow-hidden hover:border-pink-400 transition-colors cursor-pointer">
            <!-- Card Header -->
            <div class="text-center p-4 border-b border-pink-500">
              <h3 class="text-xl md:text-2xl font-bold text-pink-500">{card.title}</h3>
            </div>
            
            <!-- Card Content -->
            <div class="p-2 flex justify-center">
              <div class="w-[300px] h-[500px]">
                <img
                  src={card.imageUrl || "/placeholder.svg"}
                  alt="Image for {card.title}"
                  class="rounded-md object-cover w-full h-full hover:scale-105 transition-transform duration-200"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>