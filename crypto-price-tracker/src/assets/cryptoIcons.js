// src/assets/cryptoIcons.js

// Logos
import btcLogo from './charts/bitcoin-btc-logo.png';
import ethLogo from './charts/etherum-eth-logo.png';
import usdtLogo from './charts/tether-usdt-logo.png';
import xrpLogo from './charts/xrp-logo.png';
import bnbLogo from './charts/bnb-logo.png';
import solLogo from './charts/solana-logo.png';

// 7-Day Charts
import btcChart from './charts/BTC-7d.png';
import ethChart from './charts/ETH-7d.png';
import usdtChart from './charts/USDT-7d.png';
import xrpChart from './charts/XRP-7d.png';
import bnbChart from './charts/BNB-7d.png';
import solChart from './charts/SOL-7d.png';

const cryptoIcons = {
  BTC: {
    logo: btcLogo,
    chart: btcChart,
  },
  ETH: {
    logo: ethLogo,
    chart: ethChart,
  },
  USDT: {
    logo: usdtLogo,
    chart: usdtChart,
  },
  XRP: {
    logo: xrpLogo,
    chart: xrpChart,
  },
  BNB: {
    logo: bnbLogo,
    chart: bnbChart,
  },
  SOL: {
    logo: solLogo,
    chart: solChart,
  },
};

export default cryptoIcons;
