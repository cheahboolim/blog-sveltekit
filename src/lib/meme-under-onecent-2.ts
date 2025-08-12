// src/lib/meme-under-onecent-2.ts

// Utility: Fisher–Yates shuffle for random order
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export interface MemeCoin {
  id: number;
  name: string;
  ticker: string;
  image: string;
  description: string;
  funFact: string;
}

const memeCoinList: MemeCoin[] = [
  {
    id: 1,
    name: "Shiba Inu",
    ticker: "SHIB",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/shiba-inu-shib.png",
    description: "Often called the 'Dogecoin killer', SHIB grew from a meme into a global crypto community.",
    funFact: "In October 2021, a $8,000 SHIB investment briefly became worth over $5.7 billion."
  },
  {
    id: 2,
    name: "PEPE (Pepe Coin)",
    ticker: "PEPE",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/pepe-coin-pepe.png",
    description: "Based on the iconic internet frog meme, PEPE made waves with lightning-fast community growth.",
    funFact: "PEPE’s market cap hit $1 billion just three weeks after launch."
  },
  {
    id: 3,
    name: "Bonk",
    ticker: "BONK",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/bonk-bonk.png",
    description: "Solana’s first dog-themed meme coin, BONK quickly became a community favorite.",
    funFact: "Launched via an airdrop to Solana users in December 2022."
  },
  {
    id: 4,
    name: "Dogelon Mars",
    ticker: "ELON",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/dogelon-mars-elon.png",
    description: "A mash-up of Dogecoin, Elon Musk, and space travel memes.",
    funFact: "Its storyline follows Dogelon’s adventures through space in a fictional comic."
  },
  {
    id: 5,
    name: "Catslap",
    ticker: "SLAP",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/catslap-slap.png",
    description: "A quirky cat-themed meme coin built for fun trading and NFT memes.",
    funFact: "Holders get surprise airdrops in the form of meme NFTs."
  },
  {
    id: 6,
    name: "Wall Street Pepe",
    ticker: "WEPE",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/wall-street-pepe-wepe.png",
    description: "Combining stock market parody with Pepe the Frog.",
    funFact: "Its launch day price pumped 300% within hours."
  },
  {
    id: 7,
    name: "Flockerz",
    ticker: "FLOCK",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/flockerz-flock.png",
    description: "A bird-themed meme coin where the community is the flock.",
    funFact: "Every transaction adds to a shared 'nest fund' for giveaways."
  },
  {
    id: 8,
    name: "Solaxy",
    ticker: "SOLX",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/solaxy-solx.png",
    description: "A space-themed meme coin for Solana fans.",
    funFact: "Its first NFT collection sold out in 15 minutes."
  },
  {
    id: 9,
    name: "Dog to the Moon²",
    ticker: "DOGE²",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/dog-to-the-moon2-doge2.png",
    description: "A meme coin that doubles down on the 'to the moon' slogan.",
    funFact: "Website features a live rocket animation tracking the price."
  },
  {
    id: 10,
    name: "Klaus",
    ticker: "KLAUS",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/klaus-klaus.png",
    description: "A Christmas-themed meme coin that’s active all year round.",
    funFact: "Runs holiday airdrops every December."
  },
  {
    id: 11,
    name: "Sponge V2",
    ticker: "SPONGE",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/sponge-v2-sponge.png",
    description: "A cartoon sponge-inspired meme coin with a cult following.",
    funFact: "Holders voted to upgrade from V1 to V2 in 2024."
  },
  {
    id: 12,
    name: "SamoyedCoin",
    ticker: "SAMO",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/samoyedcoin-samo.png",
    description: "Solana’s friendly dog mascot coin.",
    funFact: "Named after Anatoly Yakovenko’s actual Samoyed dog."
  },
  {
    id: 13,
    name: "MEW (Cat in a Dog’s World)",
    ticker: "MEW",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/mew-mew.png",
    description: "A cat coin trolling the dog-dominated meme coin scene.",
    funFact: "Became one of the fastest-growing meme coins in April 2024."
  },
  {
    id: 14,
    name: "Pudgy Penguins",
    ticker: "PENGU",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/pudgy-penguins-pengu.png",
    description: "NFT penguins that slid into the crypto coin world.",
    funFact: "Started as an Ethereum NFT project in 2021."
  },
  {
    id: 15,
    name: "Little Pepe",
    ticker: "LILPEPE",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/little-pepe-lilpepe.png",
    description: "A smaller, cuter take on Pepe memes.",
    funFact: "Community is called the 'Tadpole Army'."
  },
  {
    id: 16,
    name: "MIND of Pepe",
    ticker: "MIND",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/mind-of-pepe-mind.png",
    description: "Philosophical twist on the meme coin world.",
    funFact: "Website features random deep quotes from 'Pepe the Philosopher'."
  },
  {
    id: 17,
    name: "Meme Index",
    ticker: "MEMEX",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/meme-index-memex.png",
    description: "A 'crypto ETF' of meme coins in one token.",
    funFact: "Holders automatically own a basket of top meme coins."
  },
  {
    id: 18,
    name: "Simon’s Cat",
    ticker: "CAT",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/simons-cat-cat.png",
    description: "From the famous animated YouTube cat to the blockchain.",
    funFact: "Developers partnered with the cartoon’s original creator."
  },
  {
    id: 19,
    name: "Doggies",
    ticker: "DOGS",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/doggies-dogs.png",
    description: "A pack-themed meme coin for dog lovers.",
    funFact: "Offers special perks for owning multiple 'dog breeds' NFTs."
  },
  {
    id: 20,
    name: "Banana Cat",
    ticker: "BCAT",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/banana-cat-bcat.png",
    description: "Mashes up two viral internet animals: banana cat & crypto cats.",
    funFact: "First token launch to include a playable meme mini-game."
  },
  {
    id: 21,
    name: "AstroDoge",
    ticker: "ASTRODOGE",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/astrodoge-astrodoge.png",
    description: "Space dog with dreams of colonizing the moon.",
    funFact: "Community hosts 'moon mission' price challenges monthly."
  },
  {
    id: 22,
    name: "Chonk Inu",
    ticker: "CHONK",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/chonk-inu-chonk.png",
    description: "Celebrates the 'chonky' pet meme trend.",
    funFact: "Donates to animal shelters that rescue overweight pets."
  },
  {
    id: 23,
    name: "Crypto Frog",
    ticker: "CFROG",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/crypto-frog-cfrog.png",
    description: "Another frog coin, but with a DeFi twist.",
    funFact: "Smart contract includes random meme airdrops."
  },
  {
    id: 24,
    name: "Pawshiba",
    ticker: "PAW",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/pawshiba-paw.png",
    description: "Mix of Paw Patrol-style branding and Shiba Inu hype.",
    funFact: "Early holders get NFT badges for loyalty."
  },
  {
    id: 25,
    name: "Moon Hamster",
    ticker: "HAM",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/moon-hamster-ham.png",
    description: "A hamster aiming for the moon… literally.",
    funFact: "Livestreamed a hamster wheel race to pick its token logo."
  },
  {
    id: 26,
    name: "Wojak Coin",
    ticker: "WOJAK",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/wojak-coin-wojak.png",
    description: "From the 'Feels Guy' meme to the blockchain.",
    funFact: "Popular with meme traders during market dips."
  },
  {
    id: 27,
    name: "Cheems Token",
    ticker: "CHEEMS",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/cheems-token-cheems.png",
    description: "Features the iconic doge variant 'Cheems'.",
    funFact: "Has a 'burger economy' joke baked into its whitepaper."
  },
  {
    id: 28,
    name: "SharkDoge",
    ticker: "SHKDOGE",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/sharkdoge-shkdoge.png",
    description: "Half doge, half shark — all meme.",
    funFact: "Hosts meme contests with underwater themes."
  },
  {
    id: 29,
    name: "Loaf Cat",
    ticker: "LOAF",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/loaf-cat-loaf.png",
    description: "Based on the 'cat loaf' pose meme.",
    funFact: "Every NFT is shaped like a loaf of bread."
  },
  {
    id: 30,
    name: "Party Frog",
    ticker: "PFROG",
    image: "https://cdn.susmanga.com/alanding/crypto-under-1cent/party-frog-pfrog.png",
    description: "A celebration-focused meme coin for frog fans.",
    funFact: "Launch party was hosted entirely in VRChat."
  }
];

export const memeCoins = shuffleArray(memeCoinList);
