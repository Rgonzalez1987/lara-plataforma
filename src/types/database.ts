export type AppRole = 'student' | 'guardian' | 'admin';
export type FamilyMemberRole = 'guardian' | 'student';
export type AccountStatus = 'active' | 'suspended';
export type FriendshipStatus = 'pending' | 'accepted' | 'blocked';
export type ChallengeStatus = 'pending' | 'completed' | 'cancelled';
export type XpSourceType =
  | 'aventura'
  | 'arcade'
  | 'explora'
  | 'challenge'
  | 'shield_purchase'
  | 'admin_adjust';

export interface Family {
  id: string;
  name: string;
  created_at: string;
}

export interface Profile {
  id: string;
  username: string;
  display_name: string | null;
  grade: string;
  avatar: string;
  app_role: AppRole;
  account_status: AccountStatus;
  xp: number;
  level: number;
  streak_count: number;
  streak_shields: number;
  last_active_date: string;
  created_at: string;
  updated_at: string;
}

export interface PublicLeaderboardEntry {
  id: string;
  username: string;
  avatar: string;
  grade: string;
  xp: number;
  level: number;
  streak_count: number;
}

export interface StudentProgress {
  user_id: string;
  adv: Record<string, unknown>;
  adv_meta: Record<string, unknown>;
  fails: unknown[];
  metrics: Record<string, unknown>;
  recommended_missions: number[];
  updated_at: string;
}

export interface XpLedgerEntry {
  id: string;
  user_id: string;
  delta_xp: number;
  source_type: XpSourceType;
  source_ref: string | null;
  session_nonce: string;
  created_at: string;
}

export interface Challenge {
  id: string;
  challenger_id: string;
  opponent_id: string;
  challenger_score: number;
  opponent_score: number | null;
  game_type: string;
  status: ChallengeStatus;
  winner_id: string | null;
  created_at: string;
  completed_at: string | null;
}
