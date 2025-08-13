<script lang="ts">
  export let href: string = '/7-meme';
  export let image: string = 'https://cdn.susmanga.com/alanding/7%20-%20meme/cover.jpg';
</script>

<div class="w-[300px] h-[250px] bg-[#0b0f12] rounded-xl shadow-lg overflow-hidden flex flex-col justify-between border border-gray-700">
  <!-- Image -->
  <div class="flex-1 overflow-hidden">
    <img src={image} alt="Meme Coin PEPE" class="w-full h-full object-cover" />
  </div>

  <!-- Text / CTA -->
  <div class="p-3 bg-[#121518] text-center">
    <p class="text-sm text-slate-200 mb-2 font-semibold">
      💥 SusManga Meme Coin Poll is Live!
    </p>
    <p class="text-xs text-slate-400 mb-3">
      Vote for your favorite meme coin under $0.01 🍕💰
    </p>
    <a 
      href={href} 
      class="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-white font-semibold text-sm"
      target="_blank"
      rel="noopener noreferrer"
    >
      Vote Now
    </a>
  </div>
</div>

<style>
  div {
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  }
</style>
