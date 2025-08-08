<script>
  import { onMount } from 'svelte';

  onMount(() => {
    // Dynamically load Adsterra script
    const script = document.createElement('script');
    script.src = 'https://a.magsrv.com/ad-provider.js';
    script.async = true;
    script.type = 'application/javascript';
    document.body.appendChild(script);

    // Initialize and push the ad config
    window.AdProvider = window.AdProvider || [];
    window.AdProvider.push({ serve: {} });
  });
</script>

<ins class="eas6a97888e2" data-zoneid="5695568"></ins>

<style>
  ins.eas6a97888e2 {
    display: block;
    width: 100%;
  }
</style>
