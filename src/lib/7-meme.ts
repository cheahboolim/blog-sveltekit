// src/lib/7-meme.ts

export interface MemeCoin {
  rank: number;
  name: string;
  symbol: string;
  price: number;
  image: string;
  description: string;
  votes: number;
  potentialReturns: {
    invest1: number;
    invest100: number;
    invest10000: number;
  };
}

export const memeCoins: MemeCoin[] = [
  {
    rank: 1,
    name: "Shiba Inu",
    symbol: "SHIB",
    price: 0.0000138,
    image: "https://cdn.susmanga.com/alanding/7-meme/shib.png",
    description: "Shiba Inu (SHIB) is one of the most recognized meme coins in the world, riding on the wave of community hype and strong market presence.",
    votes: Math.floor(Math.random() * 500000) + 2500000, // 2.5M–3M
    potentialReturns: { invest1: 0, invest100: 0, invest10000: 0 }
  },
  {
    rank: 2,
    name: "Pepe",
    symbol: "PEPE",
    price: 0.00001217,
    image: "https://cdn.susmanga.com/alanding/7-meme/pepe.png",
    description: "Pepe (PEPE) became an internet sensation in the crypto space, fueled by meme culture and rapid market speculation.",
    votes: Math.floor(Math.random() * 400000) + 2000000, // 2M–2.4M
    potentialReturns: { invest1: 0, invest100: 0, invest10000: 0 }
  },
  {
    rank: 3,
    name: "Baby Doge Coin",
    symbol: "BabyDoge",
    price: 0.000000001365,
    image: "https://cdn.susmanga.com/alanding/7-meme/babydoge.png",
    description: "Baby Doge Coin aims to impress its father by showing improved transaction speeds and cuteness overload.",
    votes: Math.floor(Math.random() * 300000) + 1500000, // 1.5M–1.8M
    potentialReturns: { invest1: 0, invest100: 0, invest10000: 0 }
  },
  {
    rank: 4,
    name: "Dogelon Mars",
    symbol: "ELON",
    price: 0.0000001225,
    image: "https://cdn.susmanga.com/alanding/7-meme/elon.png",
    description: "Dogelon Mars blends Elon Musk-inspired branding with the dream of colonizing Mars in the meme coin universe.",
    votes: Math.floor(Math.random() * 250000) + 1200000, // 1.2M–1.45M
    potentialReturns: { invest1: 0, invest100: 0, invest10000: 0 }
  },
  {
    rank: 5,
    name: "Capybara Nation",
    symbol: "BARA",
    price: 0.000001119,
    image: "https://cdn.susmanga.com/alanding/7-meme/bara.png",
    description: "Capybara Nation celebrates the chillest animal in the world, turning the capybara into a crypto mascot.",
    votes: Math.floor(Math.random() * 200000) + 800000, // 0.8M–1M
    potentialReturns: { invest1: 0, invest100: 0, invest10000: 0 }
  },
  {
    rank: 6,
    name: "Gekko HQ",
    symbol: "GEKK0",
    price: 0.000001862,
    image: "https://cdn.susmanga.com/alanding/7-meme/gekko.png",
    description: "Gekko HQ brings Wall Street vibes into the meme coin market with a nod to the legendary Gordon Gekko.",
    votes: Math.floor(Math.random() * 150000) + 500000, // 0.5M–0.65M
    potentialReturns: { invest1: 0, invest100: 0, invest10000: 0 }
  },
  {
    rank: 7,
    name: "crow with knife",
    symbol: "CAW",
    price: 0.00000002665,
    image: "https://cdn.susmanga.com/alanding/7-meme/caw.png",
    description: "Crow With Knife (CAW) is as edgy as it sounds — a community-driven meme coin with a sharp personality.",
    votes: Math.floor(Math.random() * 100000) + 300000, // 0.3M–0.4M
    potentialReturns: { invest1: 0, invest100: 0, invest10000: 0 }
  }
];

// Calculate potential returns if coin hits $0.01
memeCoins.forEach((coin) => {
  const targetPrice = 0.01;
  coin.potentialReturns.invest1 = (1 / coin.price) * targetPrice;
  coin.potentialReturns.invest100 = (100 / coin.price) * targetPrice;
  coin.potentialReturns.invest10000 = (10000 / coin.price) * targetPrice;
});
