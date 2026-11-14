import { poissonPMF } from '../math/poisson';
import { Team, Statistics, MatchProbabilities } from '../data/types';

/**
 * Core engine to calculate match probabilities using Poisson Distribution
 * based on team strengths.
 */
export class ProbabilityEngine {
  private leagueAverageGoals: number;

  constructor(leagueAverageGoals: number = 1.35) {
    this.leagueAverageGoals = leagueAverageGoals;
  }

  /**
   * Calculates the expected goals (lambda) for home and away teams.
   */
  private calculateLambdas(
    homeTeam: Team,
    homeStats: Statistics,
    awayStats: Statistics
  ): { lambdaH: number; lambdaA: number } {
    // Lambda Home = LeagueAvg * Attack_Home * (1 / Defense_Away) * HomeAdvantage
    // Note: In this model, Defense_Away > 1 means strong defense (lowering opponent's lambda)
    const lambdaH =
      this.leagueAverageGoals *
      homeStats.attack_strength *
      (1 / awayStats.defense_strength) *
      homeTeam.home_advantage_factor;

    const lambdaA =
      this.leagueAverageGoals *
      awayStats.attack_strength *
      (1 / homeStats.defense_strength);

    return { lambdaH, lambdaA };
  }

  /**
   * Computes match outcome probabilities.
   */
  calculateMatchProbabilities(
    homeTeam: Team,
    awayTeam: Team,
    homeStats: Statistics,
    awayStats: Statistics
  ): MatchProbabilities {
    const { lambdaH, lambdaA } = this.calculateLambdas(
      homeTeam,
      homeStats,
      awayStats
    );

    // We iterate through potential scorelines up to a reasonable maximum (e.g., 5)
    // to aggregate probabilities.
    let pHomeWin = 0;
    let pDraw = 0;
    let pAwayWin = 0;

    const maxScore = 6; // Cap for the summation

    for (let h = 0; h <= maxScore; h++) {
      for (let a = 0; a <= maxScore; a++) {
        const prob = poissonPMF(lambdaH, h) * poissonPMF(lambdaA, a);

        if (h > a) {
          pHomeWin += prob;
        } else if (h === a) {
          pDraw += prob;
        } else {
          pAwayWin += prob;
        }
      }
    }

    // Normalize in case of rounding errors
    const totalProb = pHomeWin + pDraw + pAwayWin;
    pHomeWin /= totalProb;
    pDraw /= totalProb;
    pAwayWin /= totalProb;

    return {
      homeWin: pHomeWin,
      draw: pDraw,
      awayWin: pAwayWin,
      decimalOdds: {
        home: 1 / pHomeWin,
        draw: 1 / pDraw,
        away: 1 / pAwayWin,
      },
    };
  }
}
