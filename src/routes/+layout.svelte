<script>
  import '../app.css';
  import ExoVideoSlider from '$lib/components/ui/Ads/ExoVideoSlider.svelte';
  import OutstreamVideo from '$lib/components/ui/Ads/OutstreamVideo.svelte';
	import AAdssmall from '$lib/components/ui/Ads/AAdssmall.svelte';
</script>

<div class="min-h-screen bg-black text-white flex flex-col">
  <!-- Header -->
  <header class="bg-black border-b border-gray-800">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-center">
        <a href="/" class="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-200">
          SUSMANGA.COM
        </a>
      </div>
    </div>
  </header>

<div class="flex justify-center my-4">
  <AAdssmall />
</div>

  <!-- Main Content -->
  <main class="flex-1 container mx-auto px-4 py-2">
    <slot />
  </main>

<div class="flex justify-center my-4">
  <AAdssmall />
</div>

  <!-- Footer -->
  <footer class="bg-black border-t border-gray-800 mt-auto">
    <div class="container mx-auto px-4 py-6">
      <div class="flex justify-center">
        <a 
          href="https://susmanga.com" 
          class="text-gray-400 hover:text-white transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          susmanga.com
        </a>
      </div>
    </div>
      <!-- Video Ads 
  <ExoVideoSlider />
  <OutstreamVideo />
  -->
  </footer>
</div>