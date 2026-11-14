import { ProbabilityEngine } from './src/engine/probability-engine';
import { Team, Statistics, Match, MatchProbabilities } from './src/data/types';

async function runTest() {
  console.log("--- 🚀 Sports Betting Engine: Validation Test ---");

  // 1. Setup Mock Data
  const homeTeam: Team = {
    team_id: 't1',
    name: 'Arsenal',
    country_code: 'ENG',
    home_advantage_factor: 1.08
  };

  const awayTeam: Team = {
    team_id: 't2',
    name: 'Man City',
    country_code: 'ENG',
    home_advantage_factor: 1.05
  };

  const homeStats: Statistics = {
    team_id: 't1',
    season_tracked: '23/24',
    attack_strength: 1.45,
    defense_strength: 0.95,
    matches_played: 38
  };

  const awayStats: Statistics = {
    team_id: 't2',
    season_tracked: '23/24',
    attack_strength: 1.60,
    defense_strength: 0.85,
    matches_played: 38
  };

  // 2. Initialize Engine (League avg goals = 1.35)
  const engine = new ProbabilityEngine(1.35);

  // 3. Execute Calculation
  console.log(`Calculating match: ${homeTeam.name} vs ${awayTeam.name}...`);
  const probs: MatchProbabilities = engine.calculateMatchProbabilities(
    homeTeam,
    awayTeam,
    homeStats,
    awayStats
  );

  // 4. Validate Results
  console.log("\n--- 📊 Calculated Probabilities ---");
  console.log(`Home Win: ${(probs.homeWin * 100).toFixed(2)}% (Odds: ${probs.decimalOdds.home.toFixed(2)})`);
  console.log(`Draw:     ${(probs.draw * 100).toFixed(2)}% (Odds: ${probs.decimalOdds.draw.toFixed(2)})`);
  console.log(`Away Win: ${(probs.awayWin * 100).toFixed(2)}% (Odds: ${probs.decimalOdds.away.toFixed(2)})`);

  // Verification: Sum should be ~1.0
  const totalProb = probs.homeWin + probs.draw + probs.awayWin;
  console.log(`\nSum of Probabilities: ${totalProb.toFixed(4)} (Expected: 1.0)`);

  if (Math.abs(totalProb - 1.0) > 0.01) {
    console.error("❌ ERROR: Probabilities do not sum to 1.0!");
    process.exit(1);
  } else {
    console.log("✅ SUCCESS: Probabilities are normalized.");
  }

  console.log("\n--- ✅ Validation Complete ---");
}

runTest().catch(err => {
  console.error("❌ TEST FAILED:", err);
  process.exit(1);
});
