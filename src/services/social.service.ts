import type { Challenge, FriendshipStatus, PublicLeaderboardEntry } from '../types/database';
import { requireSupabase } from './supabase-helpers';

export interface FriendshipRecord {
  id: string;
  requester_id: string;
  addressee_id: string;
  status: FriendshipStatus;
  created_at: string;
}

export async function getLeaderboard(scope: 'global' | 'friends' = 'global'): Promise<PublicLeaderboardEntry[]> {
  const sb = requireSupabase();
  const { data, error } = await sb.rpc('get_leaderboard', { p_scope: scope });
  if (error) {
    throw new Error(error.message);
  }
  return (data ?? []) as PublicLeaderboardEntry[];
}

export async function listFriendships(): Promise<FriendshipRecord[]> {
  const sb = requireSupabase();
  const { data, error } = await sb
    .from('friendships')
    .select('id, requester_id, addressee_id, status, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }
  return (data ?? []) as FriendshipRecord[];
}

export async function sendFriendRequest(requesterId: string, addresseeId: string): Promise<void> {
  const sb = requireSupabase();
  const { error } = await sb.from('friendships').insert({
    requester_id: requesterId,
    addressee_id: addresseeId,
    status: 'pending',
  });
  if (error) {
    throw new Error(error.message);
  }
}

export async function respondFriendRequest(
  friendshipId: string,
  status: Extract<FriendshipStatus, 'accepted' | 'blocked'>,
): Promise<void> {
  const sb = requireSupabase();
  const { error } = await sb.from('friendships').update({ status }).eq('id', friendshipId);
  if (error) {
    throw new Error(error.message);
  }
}

export async function removeFriendship(friendshipId: string): Promise<void> {
  const sb = requireSupabase();
  const { error } = await sb.from('friendships').delete().eq('id', friendshipId);
  if (error) {
    throw new Error(error.message);
  }
}

export async function listChallenges(): Promise<Challenge[]> {
  const sb = requireSupabase();
  const { data, error } = await sb
    .from('challenges')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(30);

  if (error) {
    throw new Error(error.message);
  }
  return (data ?? []) as Challenge[];
}

export async function createChallenge(
  opponentId: string,
  gameType: string,
  challengerScore: number,
): Promise<string> {
  const sb = requireSupabase();
  const { data, error } = await sb.rpc('create_challenge', {
    p_opponent_id: opponentId,
    p_game_type: gameType,
    p_challenger_score: Math.max(0, Math.round(challengerScore)),
  });
  if (error) {
    throw new Error(error.message);
  }
  return String(data);
}

export async function submitChallengeScore(challengeId: string, score: number): Promise<Challenge> {
  const sb = requireSupabase();
  const { data, error } = await sb.rpc('submit_challenge_score', {
    p_challenge_id: challengeId,
    p_score: Math.max(0, Math.round(score)),
  });
  if (error) {
    throw new Error(error.message);
  }
  return data as Challenge;
}
