<script>
  import ExoClickAd from '$lib/components/ui/Ads/ExoClickAd.svelte';
  import HighPerformanceAd from '$lib/components/ui/Ads/HighPerformanceAd.svelte';

  const comicCards = [
    {
      title: "🔥 Latest Manga",
      link: "https://susmanga.com",
      imageUrl: "https://cdn.susmanga.com/homepage/1.jpg?height=500&width=300",
    },
    {
      title: "📈 Top Weekly", 
      link: "https://susmanga.com",
      imageUrl: "https://cdn.susmanga.com/homepage/2.jpg?height=500&width=300",
    },
    {
      title: "💖 Most Favourite",
      link: "https://susmanga.com", 
      imageUrl: "https://cdn.susmanga.com/homepage/3.jpg?height=500&width=300",
    },
    {
      title: "🚀 Trending Now",
      link: "https://susmanga.com",
      imageUrl: "https://cdn.susmanga.com/homepage/4.jpg?height=500&width=300", 
    },
    {
      title: "🌟 Editor's Pick",
      link: "https://susmanga.com",
      imageUrl: "https://cdn.susmanga.com/homepage/5.jpg?height=500&width=300",
    },
    {
      title: "👑 Waifu List", 
      link: "https://waifu.susmanga.com/waifu/50",
      imageUrl: "https://cdn.susmanga.com/homepage/6.jpg?height=500&width=300",
    },
  ];
</script>

<!-- Ensure banner flushes against top by removing outer padding/margins -->
<div class="w-full m-0 p-0">
  <!-- Hero Banner Section -->
  <div class="relative w-full h-[450px] md:h-[600px] lg:h-[700px] overflow-hidden text-center">
    <img
      src="https://cdn.susmanga.com/homepage/waifu-background.jpg?height=700&width=1200"
      alt="Banner Background"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
    <div class="relative z-20 flex flex-col items-center justify-center h-full px-4 space-y-6 text-white">
      <h1 class="text-5xl md:text-7xl font-extrabold text-pink-500 leading-tight drop-shadow-xl">SUSMANGA.COM</h1>
      <p class="text-xl md:text-2xl text-white drop-shadow-lg max-w-2xl">Your #1 Source for the Fastest Manga Updates & Endless Selections</p>
      <a 
        href="https://susmanga.com/?utm_source=presusmanga_banner&utm_medium=website&utm_campaign=presusmanga_banner_cta"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-pink-600 hover:bg-pink-500 text-xl px-10 py-4 rounded-full shadow-2xl transition-colors duration-300 font-semibold"
      >
        📚 BROWSE ALL MANGA
      </a>
    </div>
  </div>

  <!-- High Performance Ad -->
  <div class="w-[300px] h-[300px] flex items-center justify-center mx-auto mt-10">
    <HighPerformanceAd />
  </div>

  <!-- ExoClick Ad -->
  <div class="mt-10 w-full max-w-xl px-4 mx-auto">
    <ExoClickAd />
  </div>

  <!-- Featured Manga Collections -->
  <section class="flex flex-col items-center justify-center p-6 md:p-10 w-full max-w-7xl mx-auto">
    <h2 class="text-4xl md:text-5xl font-extrabold text-pink-500 mb-10 text-center tracking-tight">✨ Featured Manga Collections</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {#each comicCards as card}
        <a 
          href={card.link} 
          target="_blank" 
          rel="noopener noreferrer"
          class="block w-full h-full"
        >
          <div class="w-full h-full bg-black border border-pink-500 shadow-xl rounded-xl overflow-hidden hover:border-pink-400 hover:shadow-2xl transition-all cursor-pointer">
            <div class="text-center p-4 border-b border-pink-500">
              <h3 class="text-2xl font-bold text-pink-500">{card.title}</h3>
            </div>
            <div class="p-2 flex justify-center">
              <div class="w-[300px] h-[500px]">
                <img
                  src={card.imageUrl || "/placeholder.svg"}
                  alt={`Image for ${card.title}`}
                  class="rounded-md object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </section>
</div>
