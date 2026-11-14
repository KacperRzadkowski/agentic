export interface Team {
  team_id: string;
  name: string;
  country_code: string;
  home_advantage_factor: number;
}

export interface Statistics {
  team_id: string;
  season_tracked: string;
  attack_strength: number; // Relative to league average
  defense_strength: number; // Relative to league average
  matches_played: number;
}

export interface Match {
  match_id: string;
  home_team_id: string;
  away_team_id: string;
  match_date_utc: string;
  status: 'scheduled' | 'live' | 'finished';
  actual_scores?: {
    home: number;
    away: number;
  };
}

export interface MatchProbabilities {
  homeWin: number;
  draw: number;
  awayWin: number;
  decimalOdds: {
    home: number;
    draw: number;
    away: number;
  };
}
