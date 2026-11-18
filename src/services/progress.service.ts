import type { StudentProgress, XpSourceType } from '../types/database';
import { requireSupabase } from './supabase-helpers';

export interface AwardXpInput {
  sourceType: Exclude<XpSourceType, 'shield_purchase' | 'admin_adjust'>;
  sourceRef: string;
  rawXp: number;
  sessionNonce?: string;
}

export interface AwardXpResult {
  new_xp: number;
  new_level: number;
  granted_xp: number;
}

export interface StreakSyncResult {
  streak_count: number;
  streak_shields: number;
  shield_consumed: boolean;
}

export interface ShieldPurchaseResult {
  new_xp: number;
  new_shields: number;
}

export async function loadStudentProgress(userId: string): Promise<StudentProgress | null> {
  const sb = requireSupabase();
  const { data, error } = await sb
    .from('student_progress')
    .select('*')
    .eq('user_id', userId)
    .maybeSingle<StudentProgress>();

  if (error) {
    throw new Error(error.message);
  }
  return data ?? null;
}

export async function saveStudentProgress(
  userId: string,
  patch: Partial<Pick<StudentProgress, 'adv' | 'adv_meta' | 'fails' | 'metrics'>>,
): Promise<void> {
  const sb = requireSupabase();
  const { error } = await sb
    .from('student_progress')
    .update(patch)
    .eq('user_id', userId);

  if (error) {
    throw new Error(error.message);
  }
}

export async function awardXpFromSession(input: AwardXpInput): Promise<AwardXpResult> {
  const sb = requireSupabase();
  const nonce = input.sessionNonce ?? crypto.randomUUID();
  const { data, error } = await sb.rpc('award_xp_from_session', {
    p_source_type: input.sourceType,
    p_source_ref: input.sourceRef,
    p_raw_xp: Math.max(0, Math.round(input.rawXp)),
    p_session_nonce: nonce,
  });

  if (error) {
    throw new Error(error.message);
  }
  const row = Array.isArray(data) ? (data[0] as AwardXpResult | undefined) : (data as AwardXpResult | null);
  if (!row) {
    throw new Error('Respuesta inválida al otorgar XP');
  }
  return row;
}

export async function buyStreakShield(): Promise<ShieldPurchaseResult> {
  const sb = requireSupabase();
  const { data, error } = await sb.rpc('buy_streak_shield');
  if (error) {
    throw new Error(error.message);
  }
  const row = Array.isArray(data)
    ? (data[0] as ShieldPurchaseResult | undefined)
    : (data as ShieldPurchaseResult | null);
  if (!row) {
    throw new Error('Respuesta inválida al comprar escudo');
  }
  return row;
}

export async function syncDailyStreak(): Promise<StreakSyncResult> {
  const sb = requireSupabase();
  const { data, error } = await sb.rpc('sync_daily_streak');
  if (error) {
    throw new Error(error.message);
  }
  const row = Array.isArray(data) ? (data[0] as StreakSyncResult | undefined) : (data as StreakSyncResult | null);
  if (!row) {
    throw new Error('Respuesta inválida al sincronizar racha');
  }
  return row;
}
