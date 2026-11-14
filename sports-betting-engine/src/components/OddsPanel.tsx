import React from 'react';
import { probabilityToOdds, probabilityToPercentage } from '../logic/math';

interface OddsProps {
  odds: any;
}

export const OddsPanel: React.FC<OddsProps> = ({ odds }) => {
  return (
    <div className="flex w-full gap-2 mt-4">
      <div className="flex-1 bg-green-50 border border-green-200 rounded p-2 text-center">
        <div className="text-xs text-green-700 font-bold">HOME</div>
        <div className="text-lg font-bold text-green-900">{probabilityToOdds(odds.home.percentage / 100).toFixed(2)}</div>
        <div className="text-xs text-green-600">{probabilityToPercentage(odds.home.percentage)}</div>
      </div>
      <div className="flex-1 bg-gray-100 border border-gray-200 rounded p-2 text-center">
        <div className="text-xs text-gray-700 font-bold">DRAW</div>
        <div className="text-lg font-bold text-gray-900">{probabilityToOdds(odds.draw.percentage / 100).toFixed(2)}</div>
        <div className="text-xs text-gray-600">{probabilityToPercentage(odds.draw.percentage)}</div>
      </div>
      <div className="flex-1 bg-red-50 border border-red-200 rounded p-2 text-center">
        <div className="text-xs text-red-700 font-bold">AWAY</div>
        <div className="text-lg font-bold text-red-900">{probabilityToOdds(odds.away.percentage / 100).toFixed(2)}</div>
        <div className="text-xs text-red-600">{probabilityToPercentage(odds.away.percentage)}</div>
      </div>
    </div>
  );
};
