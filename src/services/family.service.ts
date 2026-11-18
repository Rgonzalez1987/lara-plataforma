import type { AppRole, FamilyMemberRole, Profile, StudentProgress } from '../types/database';
import { invokeEdgeFunction, requireSupabase } from './supabase-helpers';

export interface FamilyMemberWithProfile {
  id: string;
  family_id: string;
  user_id: string;
  member_role: FamilyMemberRole;
  profile: Profile | null;
}

export interface AdminCreateUserInput {
  familyId?: string;
  username: string;
  password: string;
  displayName?: string;
  grade?: string;
  avatar?: string;
  appRole: AppRole;
  newFamilyName?: string;
}

export async function getFamilyMembers(): Promise<FamilyMemberWithProfile[]> {
  const sb = requireSupabase();
  const { data, error } = await sb
    .from('family_members')
    .select('id, family_id, user_id, member_role, profile:profiles(*)')
    .order('created_at', { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((row) => ({
    id: String(row.id),
    family_id: String(row.family_id),
    user_id: String(row.user_id),
    member_role: row.member_role as FamilyMemberRole,
    profile: (Array.isArray(row.profile) ? row.profile[0] : row.profile) as Profile | null,
  }));
}

export async function getStudentProgressForGuardian(studentId: string): Promise<StudentProgress | null> {
  const sb = requireSupabase();
  const { data, error } = await sb
    .from('student_progress')
    .select('*')
    .eq('user_id', studentId)
    .maybeSingle<StudentProgress>();

  if (error) {
    throw new Error(error.message);
  }
  return data ?? null;
}

export async function setRecommendedMissions(studentId: string, missionIds: number[]): Promise<void> {
  const sb = requireSupabase();
  const { error } = await sb.rpc('set_recommended_missions', {
    p_student_id: studentId,
    p_missions: missionIds,
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function adminCreateUser(
  input: AdminCreateUserInput,
): Promise<{ id: string; username: string; appRole: AppRole; familyId: string | null }> {
  return invokeEdgeFunction('admin-create-user', { ...input });
}
