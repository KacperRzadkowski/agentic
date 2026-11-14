import { Team, Match, Statistics } from '../data/types';

/**
 * Data Repository to hold our entities in memory.
 * In a full app, this would be populated by an API call.
 */
export class DataRepository {
  private teams: Team[] = [];
  private stats: Statistics[] = [];
  private matches: Match[] = [];

  setData(teams: Team[], stats: Statistics[], matches: Match[]) {
    this.teams = teams;
    this.stats = stats;
    this.matches = matches;
  }

  getTeam(id: string): Team | undefined {
    return this.teams.find(t => t.team_id === id);
  }

  getStatsForTeam(id: string): Statistics | undefined {
    return this.stats.find(s => s.team_id === id);
  }

  getMatches(): Match[] {
    return this.matches;
  }
}

/**
 * Mock loader for development
 */
export async function loadMockData(
  teams: Team[], 
  stats: Statistics[], 
  matches: Match[]
): Promise<DataRepository> {
  const repo = new DataRepository();
  repo.setData(teams, stats, matches);
  return repo;
}
