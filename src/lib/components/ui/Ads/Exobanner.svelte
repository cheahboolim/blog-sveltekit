<script lang="ts">
  import { onMount } from 'svelte';

  // Props for customization
  export let zoneId: string = '5695568';
  export let className: string = 'eas6a97888e2';
  
  // Type the ad container element
  let adContainer: HTMLElement;
  let scriptLoaded: boolean = false;

  // Extend Window interface to include AdProvider
  declare global {
    interface Window {
      AdProvider?: Array<{ serve: Record<string, unknown> }>;
    }
  }

  onMount(() => {
    // Function to load the ad provider script
    const loadAdScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if script is already loaded
        if (window.AdProvider) {
          scriptLoaded = true;
          resolve();
          return;
        }

        // Create and load the script
        const script = document.createElement('script');
        script.src = 'https://a.magsrv.com/ad-provider.js';
        script.async = true;
        script.type = 'application/javascript';
        
        script.onload = () => {
          scriptLoaded = true;
          resolve();
        };
        
        script.onerror = () => {
          console.error('Failed to load ad provider script');
          reject(new Error('Failed to load ad provider script'));
        };

        document.head.appendChild(script);
      });
    };

    // Function to initialize the ad
    const initializeAd = (): void => {
      if (window.AdProvider && adContainer) {
        // Push the ad configuration
        (window.AdProvider = window.AdProvider || []).push({ serve: {} });
      }
    };

    // Load script and initialize ad
    loadAdScript()
      .then(() => {
        initializeAd();
      })
      .catch((error: Error) => {
        console.error('Error loading ad:', error);
      });

    // Cleanup function
    return () => {
      // Optional: Remove the script if needed
      // Note: Usually you want to keep ad scripts loaded for performance
    };
  });
</script>

<!-- Ad container -->
<ins 
  bind:this={adContainer}
  class={className} 
  data-zoneid={zoneId}
></ins>

<style>
  /* Optional: Add any custom styling for the ad container */
  ins {
    display: block;
  }
</style>