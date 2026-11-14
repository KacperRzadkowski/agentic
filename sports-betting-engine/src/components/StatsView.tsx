import React from 'react';

interface StatsProps {
  stats: any;
}

export const StatsView: React.FC<StatsProps> = ({ stats }) => {
  const { home, away } = stats;

  return (
    <div className="grid grid-cols-2 gap-4 w-full bg-gray-50 p-4 rounded-lg mt-4">
      {/* Home Stats */}
      <div className="space-y-2">
        <h4 className="text-xs font-bold text-gray-500 uppercase">Home ({stats.home_team})</h4>
        <StatRow label="xG" value={home.xg} />
        <StatRow label="Goals Prevented" value={home.goals_prevented} />
        <StatRow label="Possession" value={`${home.possession}%`} />
      </div>

      <div className="border-l border-gray-200 pl-4 space-y-2">
        <h4 className="text-xs font-bold text-gray-500 uppercase">Away ({stats.away_team})</h4>
        <StatRow label="xG" value={away.xg} />
        <StatRow label="Goals Prevented" value={away.goals_prevented} />
        <StatRow label="Possession" value={`${away.possession}%`} />
      </div>
    </div>
  );
};

const StatRow = ({ label, value }: { label: string; value: number | string }) => (
  <div className="flex justify-between text-sm">
    <span className="text-gray-600">{label}:</span>
    <span className="font-mono font-semibold">{typeof value === 'number' ? value.toFixed(1) : value}</span>
  </div>
);
