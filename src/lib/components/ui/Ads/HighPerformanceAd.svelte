<!-- src/lib/components/ui/Ads/HighPerformanceAd.svelte -->
<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let adRef;
  let loaded = false;

  onMount(() => {
    if (!browser || loaded || !adRef) return;

    // Create a wrapper div that will contain both scripts and serve as ad container
    const adContainer = adRef;
    
    // First script: Set the options exactly as in the original
    const optionsScript = document.createElement('script');
    optionsScript.type = 'text/javascript';
    optionsScript.text = `
      atOptions = {
        'key' : '859ce865eafad0dfd961277e055d4058',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;
    
    // Second script: Load the invoke script exactly as in the original
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = '//www.highperformanceformat.com/859ce865eafad0dfd961277e055d4058/invoke.js';
    
    // Append both scripts to our container
    adContainer.appendChild(optionsScript);
    adContainer.appendChild(invokeScript);
    
    loaded = true;

    return () => {
      // Clean up - remove scripts from container
      if (adRef) {
        adRef.innerHTML = '';
      }
      loaded = false;
    };
  });
</script>

<div 
  bind:this={adRef}
  style="width: 300px; height: 250px; display: block; margin: 0 auto; min-height: 250px;"
  class="ad-container"
>
  <!-- Scripts and ad content will be inserted here -->
</div>