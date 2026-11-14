/**
 * Simple Poisson implementation for match outcome probabilities.
 */

export function poisson(lambda: number, k: number): number {
  const factorial = (n: number): number => {
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
  };

  return (Math.exp(-lambda) * Math.pow(lambda, k)) / factorial(k);
}

/**
 * Calculates match outcomes based on xG (lambda)
 */
export function calculateMatchProbabilities(lambdaHome: number, lambdaAway: number) {
  let pHomeWin = 0;
  let pDraw = 0;
  let pAwayWin = 0;

  // Max goals to iterate for summation (truncation)
  const MAX_GOALS = 10;

  for (let i = 0; i <= MAX_GOALS; i++) {
    for (let j = 0; j <= MAX_GOALS; j++) {
      const prob = poisson(lambdaHome, i) * poisson(lambdaAway, j);
      if (i > j) {
        pHomeWin += prob;
      } else if (i === j) {
        pDraw += prob;
      } else {
        pAwayWin += prob;
      }
    }
  }

  // Normalize to ensure sum is 1.0
  const total = pHomeWin + pDraw + pAwayWin;
  return {
    homeWin: pHomeWin / total,
    draw: pDraw / total,
    awayWin: pAwayWin / total,
  };
}

/**
 * Converts probability to decimal odds
 */
export function probabilityToOdds(p: number): number {
  return 1 / p;
}

/**
 * Converts probability to percentage string
 */
export function probabilityToPercentage(p: number): string {
  return (p * 100).toFixed(1) + '%';
}
