// src/components/PercentageChange.js
import React from 'react';

const PercentageChange = ({ value }) => {
  const isPositive = parseFloat(value) >= 0;
  const color = isPositive ? 'text-green-500' : 'text-red-500';
  const arrow = isPositive ? '▲' : '▼';

  return (
    <span className={color}>
      {arrow} {Math.abs(value)}%
    </span>
  );
};

export default PercentageChange;
