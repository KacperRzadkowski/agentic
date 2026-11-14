import React from 'react';

interface MatchProps {
  match: any;
}

export const MatchCard: React.FC<MatchProps> = ({ match }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          {match.match_date_utc.split('T')[0]}
        </span>
        <span className="px-2 py-1 text-xs font-bold rounded bg-blue-100 text-blue-800 uppercase">
          {match.status}
        </span>
      </div>
      <div className="flex justify-around items-center text-xl font-bold text-gray-800">
        <div className="flex flex-col items-center w-1/3">
          <div className="w-12 h-12 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-xs">🏠</div>
          <span className="text-center truncate w-full">{match.home_team}</span>
        </div>
        <div className="text-2xl font-light text-gray-400">vs</div>
        <div className="flex flex-col items-center w-1/3">
          <div className="w-12 h-12 bg-gray-200 rounded-full mb-2 flex items-center justify-center text-xs">🚀</div>
          <span className="text-center truncate w-full">{match.away_team}</span>
        </div>
      </div>
    </div>
  );
};
