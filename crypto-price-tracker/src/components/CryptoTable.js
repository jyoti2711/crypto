import React from "react";

export default function CryptoTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-300 rounded-lg overflow-hidden shadow-sm text-sm">
        <thead className="bg-gray-100 text-gray-800">
          <tr>
            <th className="px-3 py-2">#</th>
            <th className="px-3 py-2">Logo</th>
            <th className="px-3 py-2">Name</th>
            <th className="px-3 py-2">Symbol</th>
            <th className="px-3 py-2">Price ($)</th>
            <th className="px-3 py-2">1h %</th>
            <th className="px-3 py-2">24h %</th>
            <th className="px-3 py-2">7d %</th>
            <th className="px-3 py-2">Market Cap</th>
            <th className="px-3 py-2">24h Volume</th>
            <th className="px-3 py-2">Circulating Supply</th>
            <th className="px-3 py-2">Max Supply</th>
            <th className="px-3 py-2">7D Chart</th>
          </tr>
        </thead>
        <tbody>
          {data.map((asset, index) => (
            <tr key={asset.id} className="text-center border-t">
              <td className="px-3 py-2">{index + 1}</td>
              <td className="px-3 py-2">
                <img src={asset.logo} alt={asset.symbol} className="h-6 w-6 mx-auto" />
              </td>
              <td className="px-3 py-2">{asset.name}</td>
              <td className="px-3 py-2 font-semibold">{asset.symbol}</td>
              <td className="px-3 py-2">${Number(asset.price).toLocaleString()}</td>

              <td className={`px-3 py-2 font-semibold ${asset.change1h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {asset.change1h}%
              </td>
              <td className={`px-3 py-2 font-semibold ${asset.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {asset.change24h}%
              </td>
              <td className={`px-3 py-2 font-semibold ${asset.change7d >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {asset.change7d}%
              </td>

              <td className="px-3 py-2">${asset.marketCap.toLocaleString()}</td>
              <td className="px-3 py-2">${asset.volume24h.toLocaleString()}</td>
              <td className="px-3 py-2">{asset.supply.toLocaleString()}</td>
              <td className="px-3 py-2">
                {asset.maxSupply ? asset.maxSupply.toLocaleString() : "∞"}
              </td>
              <td className="px-3 py-2">
                <img src={asset.chart} alt={`${asset.symbol} 7d`} className="h-6 mx-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
