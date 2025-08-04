<!-- src/lib/components/ui/Ads/ExoClickAd.svelte -->
<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  let adRef;

  onMount(() => {
    if (!browser) return;

    // Check if ad script is already loaded
    if (!window.AdProvider) {
      const script = document.createElement("script");
      script.src = "https://a.magsrv.com/ad-provider.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Push the ad only after the container is available
    const timeout = setTimeout(() => {
      try {
        if (window.AdProvider && adRef) {
          (window.AdProvider = window.AdProvider || []).push({ serve: {} });
        }
      } catch (e) {
        console.error("Ad loading failed", e);
      }
    }, 100);

    return () => clearTimeout(timeout);
  });
</script>

<div class="flex justify-center items-center mt-4">
  <ins
    class="eas6a97888e31"
    data-zoneid="5690634"
    bind:this={adRef}
    style="display: block; width: 100%; text-align: center;"
  ></ins>
</div>