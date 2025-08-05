<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let adRef;
  let loaded = false;

  onMount(() => {
    if (!browser || loaded || !adRef) return;

    const adContainer = adRef;

    // Create <script> to define atOptions
    const optionsScript = document.createElement('script');
    optionsScript.type = 'text/javascript';
    optionsScript.text = `
      atOptions = {
        'key' : '6940c8557887317467a6a079798a9de8',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;

    // Create <script> to load invoke.js
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = '//www.highperformanceformat.com/6940c8557887317467a6a079798a9de8/invoke.js';

    // Inject scripts into ad container
    adContainer.appendChild(optionsScript);
    adContainer.appendChild(invokeScript);

    loaded = true;

    // Cleanup on destroy
    return () => {
      if (adRef) adRef.innerHTML = '';
      loaded = false;
    };
  });
</script>

<!-- Ad container -->
<div 
  bind:this={adRef}
  style="width: 300px; height: 250px; display: block; margin: 0 auto; min-height: 250px;"
  class="ad-container"
>
  <!-- Ad script will inject iframe here -->
</div>
