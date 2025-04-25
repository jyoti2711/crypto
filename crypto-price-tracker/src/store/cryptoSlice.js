// src/store/cryptoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [
    {
      rank: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      supply: '19.85M BTC',
      logo: '/assets/bitcoin-btc-logo.png',
      chart: '/assets/charts/7D.webp',
    },
    {
      
    rank: 2,
    name: 'Ethereum',
    symbol: 'ETH',
    price: 1802.46,
    change1h: 0.6,
    change24h: 3.21,
    change7d: 13.68,
    marketCap: 217581279327,
    volume24h: 23547469307,
    supply: '120.71M ETH',
      logo: '/assets/ethereum-eth-logo.png',
      chart: '/assets/charts/7D.webp',
    },
{
  rank: 3,
    name: 'Tether',
    symbol: 'USDT',
    price: 1.0,
    change1h: 0.0,
    change24h: 0.0,
    change7d: 0.04,
    marketCap: 145320022085,
    volume24h: 92288882007,
    supply: '145.27B USDT',
    logo: '/assets/tether-usdt-logo.png',
    chart: '/assets/charts/7D.webp',
},

{
  rank: 4,
    name: 'XRP',
    symbol: 'XRP',
    price: 2.22,
    change1h: 0.46,
    change24h: 0.54,
    change7d: 6.18,
    marketCap: 130073814966,
    volume24h: 5131481491,
    supply: '58.39B XRP',
    logo: '/assets/xrp-xrp-logo.png',
    chart: '/assets/charts/7D.webp',

},

{
  rank: 5,
    name: 'BNB',
    symbol: 'BNB',
    price: 606.65,
    change1h: 0.09,
    change24h: -1.2,
    change7d: 3.73,
    marketCap: 85471956947,
    volume24h: 1874281784,
    supply: '140.89M BNB',
    logo:'/assets/binance-usd-busd-logo.png',
    chart: '/assets/charts/7D.webp',
},
{
  rank: 6,
  name: 'Solana',
  symbol: 'SOL',
  price: 151.51,
  change1h: 0.53,
  change24h: 1.26,
  change7d: 14.74,
  marketCap: 78381958631,
  volume24h: 4881674486,
  supply: '517.31M SOL',
  logo: '/assets/solana.png',
  chart: '/assets/charts/7D.webp',
},
  
    // Add more assets below
  ]
};

const randomChange = () => (Math.random() * 2 - 1).toFixed(2);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrices: (state) => {
      state.assets.forEach(asset => {
        const priceChange = (Math.random() * 200 - 100).toFixed(2);
        asset.price = Math.max(0, (parseFloat(asset.price) + parseFloat(priceChange)).toFixed(2));
        asset.change1h = parseFloat(randomChange());
        asset.change24h = parseFloat(randomChange());
        asset.change7d = parseFloat(randomChange());
        asset.volume24h = Math.max(0, asset.volume24h + Math.floor(Math.random() * 1000000 - 500000));
      });
    }
  }
});

export const { updatePrices } = cryptoSlice.actions;
export const selectCryptoData = (state) => state.crypto.assets;
export default cryptoSlice.reducer;
