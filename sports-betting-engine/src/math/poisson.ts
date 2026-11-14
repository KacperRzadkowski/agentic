/**
 * Poisson Distribution Math Utility
 */

/**
 * Calculates the factorial of a number.
 * Used for the Poisson PMF formula: P(X=k) = (e^-λ * λ^k) / k!
 */
export function factorial(n: number): number {
  if (n < 0) return 0;
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Poisson Probability Mass Function (PMF)
 * Calculates the probability of exactly `k` events occurring in a fixed interval,
 * given an average rate `lambda`.
 * 
 * @param lambda - The average rate (expected value)
 * @param k - The number of occurrences
 * @returns The probability P(X = k)
 */
export function poissonPMF(lambda: number, k: number): number {
  if (k < 0) return 0;
  // Formula: (e^-λ * λ^k) / k!
  return (Math.exp(-lambda) * Math.pow(lambda, k)) / factorial(k);
}

/**
 * Calculates the cumulative distribution function (CDF) for Poisson.
 * P(X <= k)
 */
export function poissonCDF(lambda: number, k: number): number {
  let sum = 0;
  for (let i = 0; i <= k; i++) {
    sum += poissonPMF(lambda, i);
  }
  return sum;
}
