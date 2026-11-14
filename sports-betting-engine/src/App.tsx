import React, { useEffect, useState } from 'react';
import { MatchCard } from './components/MatchCard';
import { StatsView } from './components/StatsView';
import { OddsPanel } from './components/OddsPanel';
import data from './data/epl_matchweek_10.json';

const App = () => {
  const [matches, setMatches] = useState<any[]>([]);

  useEffect(() => {
    // Simulate fetching data
    setMatches(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">
          EPL <span className="text-blue-600">Matchweek 10</span>
        </h1>
        <p className="text-gray-500">Advanced Predictive Betting Dashboard</p>
      </header>

      <main className="max-w-4xl mx-auto space-y-6">
        {matches.map((match) => (
          <div key={match.match_id} className="space-y-2">
            <MatchCard match={match} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Advanced Stats</h3>
                  <StatsView 
                    stats={{
                      ...match.stats,
                      home_team: match.home_team,
                      away_team: match.away_team
                    }} 
                  />
               </div>
               <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Live Odds (Implied)</h3>
                  <OddsPanel odds={match.odds} />
               </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default App;
