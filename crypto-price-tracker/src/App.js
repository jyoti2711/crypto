import React, { useEffect } from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { updatePrices, selectCryptoData } from "./store/cryptoSlice";
import CryptoTable from "./components/CryptoTable";

export default function App() {
  const dispatch = useDispatch();
  const cryptoData = useSelector(selectCryptoData);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updatePrices());
    }, Math.random() * 1000 + 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="p-4">
  <header className="header mb-4">
  <nav>
      <ul>
        <ul><h1 className="text-1.5xl ">📊 Real-Time Crypto Price Tracker</h1></ul>
    </ul>
      </nav>
  </header>
  <CryptoTable data={cryptoData} />
</div>

  );
}
