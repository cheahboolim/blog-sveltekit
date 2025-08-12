<script lang="ts">
  import { onMount } from 'svelte';
  export let data: { coins?: any[] };

  const coins = data?.coins ?? [];

  let votes: number[] = [];
  let voted: Record<string, number> = {};
  const STORAGE_KEY = '7meme:voted.v1';

  // ROI stage config
  const investmentAmounts = [1, 100, 1000, 10000];
  let selectedAmount = 1000;
  const stages = [
    { name: "Achievable", target: 0.001 },
    { name: "Exciting", target: 0.10 },
    { name: "Barely Bitcoin", target: 1 }
  ];

  onMount(() => {
    // Initialize base votes from server data
    const baseVotes = coins.map(c => (typeof c.votes === 'number' ? c.votes : 0));
    
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      voted = raw ? JSON.parse(raw) : {};
      
      // Apply user's votes to the base counts (only once)
      votes = baseVotes.map((baseCount, idx) => {
        const coin = coins[idx];
        const delta = voted[coin.symbol];
        return baseCount + (delta || 0);
      });
    } catch {
      voted = {};
      votes = [...baseVotes]; // Fallback to base votes if sessionStorage fails
    }
  });

  function hasVoted(symbol: string) {
    return !!voted[symbol];
  }

  function vote(index: number, type: 'up' | 'down') {
    const coin = coins[index];
    if (!coin) return;
    if (hasVoted(coin.symbol)) return;

    const delta = type === 'up' ? 1 : -1;
    votes[index] = (votes[index] ?? 0) + delta;
    voted[coin.symbol] = delta;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(voted));
    } catch {}
  }

  function calculateTable(price: number, invest: number) {
    if (!price || price <= 0) return [];
    return stages.map(stage => {
      const coinsOwned = invest / price;
      const estValue = coinsOwned * stage.target;
      const roi = ((estValue - invest) / invest) * 100;
      return { ...stage, estValue, roi };
    });
  }

  function fmt(n: number) {
    if (!isFinite(n)) return '—';
    if (n >= 1_000) return Math.floor(n).toLocaleString();
    return Number(n.toFixed(2)).toLocaleString();
  }

  function formatPrice(price: number) {
    if (!isFinite(price) || price <= 0) return '0';
    
    // For very small numbers, format with appropriate decimal places
    if (price < 0.000001) {
      return price.toFixed(10).replace(/\.?0+$/, ''); // Remove trailing zeros
    } else if (price < 0.01) {
      return price.toFixed(8).replace(/\.?0+$/, '');
    } else if (price < 1) {
      return price.toFixed(6).replace(/\.?0+$/, '');
    } else {
      return price.toFixed(2);
    }
  }
</script>

<svelte:head>
  <title>Top 7 Meme Coins — 7-Meme</title>
  <meta name="description" content="Top 7 meme coins — prices, potential returns, votes, and quick links to exchange." />
</svelte:head>

<main class="min-h-screen bg-black text-white py-10 px-4">
  <div class="max-w-6xl mx-auto">
    <header class="mb-8 text-center">
      <h1 class="text-3xl sm:text-4xl font-extrabold">🔥 Top 7 Meme Coins - World's Largest Voting Poll</h1>
      <p class="text-sm text-slate-400 mt-2">Voted by millions of SUSMANGA.COM readers daily. Collectively let's vote the coins we love to the top.</p>
    </header>

    {#if coins.length === 0}
      <div class="text-center text-slate-400 py-20">No coins to show — check your data source.</div>
    {:else}
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {#each coins as coin, i (coin.symbol)}
          <article class="bg-[#0b0f12] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
            <div class="flex items-center gap-4 mb-4">
              <img src={coin.image} alt={coin.name} class="w-16 h-16 rounded-lg object-cover" />
              <div class="flex-1">
                <div class="flex items-baseline justify-between gap-3">
                  <div>
                    <h2 class="text-xl font-semibold">{coin.rank}. {coin.name}</h2>
                    <div class="text-sm text-slate-400 uppercase">{coin.symbol}</div>
                  </div>

                </div>
              </div>
            </div>

            <p class="text-sm text-slate-300 mb-5 leading-relaxed">{coin.description}</p>

            <!-- Current Price -->
            <div class="bg-[#071018] p-4 rounded-lg mb-5">
              <div class="text-sm text-slate-400 mb-2">💰 Current Price</div>
              <div class="text-green-400 font-mono font-semibold text-lg">~${formatPrice(coin.price)}</div>
            </div>

            <!-- ROI Table -->
            <div class="bg-[#071018] p-4 rounded-lg mb-5">
              <div class="flex flex-col gap-3 mb-4">
                <span class="text-sm text-slate-400">💡 Potential Returns</span>
                <div class="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span class="text-sm text-slate-300">If I invest:</span>
                  <select bind:value={selectedAmount} class="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-sm text-white min-w-[120px] focus:border-blue-500 focus:outline-none">
                    {#each investmentAmounts as amount}
                      <option value={amount}>${amount.toLocaleString()}</option>
                    {/each}
                  </select>
                </div>
              </div>
              <table class="w-full text-left text-sm border-collapse">
                <thead>
                  <tr class="bg-gray-800">
                    <th class="p-2">Stage</th>
                    <th class="p-2">Target Price</th>
                    <th class="p-2">Est. Value</th>
                    <th class="p-2">ROI %</th>
                  </tr>
                </thead>
                <tbody>
                  {#each calculateTable(coin.price, selectedAmount) as row}
                    <tr class="border-t border-gray-700">
                      <td class="p-2">{row.name}</td>
                      <td class="p-2">${row.target}</td>
                      <td class="p-2">${fmt(row.estValue)}</td>
                      <td class="p-2">{fmt(row.roi)}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>

            <!-- Voting -->
            <div class="flex items-center justify-between mb-5">
              <div class="flex items-center gap-3">
                <button
                  class="px-4 py-2 rounded-md text-sm bg-green-600 hover:bg-green-500 disabled:opacity-60"
                  on:click={() => vote(i, 'up')}
                  disabled={hasVoted(coin.symbol)}
                  aria-pressed={hasVoted(coin.symbol)}
                >▲</button>
                <button
                  class="px-4 py-2 rounded-md text-sm bg-rose-600 hover:bg-rose-500 disabled:opacity-60"
                  on:click={() => vote(i, 'down')}
                  disabled={hasVoted(coin.symbol)}
                  aria-pressed={hasVoted(coin.symbol)}
                >▼</button>
              </div>
              <div class="text-sm text-slate-300">
                <span class="text-yellow-400 font-semibold">{votes[i]?.toLocaleString() ?? '0'}</span>
                <span class="text-slate-400 ml-2">votes by susmanga.com readers</span>
              </div>
            </div>

            <!-- Buttons -->
            <div class="flex flex-col gap-3">
              <a href="/exchange" target="_blank" rel="noopener noreferrer" class="block text-center py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold">
                🔍 Check Live Price
              </a>
              <div class="text-center">
                <a href="/exchange" target="_blank" rel="noopener noreferrer" class="block py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 font-semibold text-lg">
                  🛒 BUY {coin.symbol}
                </a>
                <div class="text-xs text-slate-400 mt-2">0% commission</div>
                <div class="text-xs text-slate-500">On the World's Largest Exchange</div>
              </div>
            </div>
          </article>
        {/each}
      </div>
    {/if}
  </div>
</main>

<style>
  main { font-family: Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
</style>