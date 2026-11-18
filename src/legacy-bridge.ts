import { getSupabaseClient } from './core/supabase';
import { getCurrentProfile, loginWithUsername, logout } from './services/auth.service';
import { adminCreateUser, createChildAccount, getFamilyMembers, setRecommendedMissions } from './services/family.service';
import {
  awardXpFromSession,
  buyStreakShield,
  loadStudentProgress,
  saveStudentProgress,
  syncDailyStreak,
} from './services/progress.service';
import { createChallenge, getLeaderboard, submitChallengeScore } from './services/social.service';

const sb = getSupabaseClient();

const LaraSec = {
  loginWithUsername,
  logout,
  getCurrentProfile,
  awardXpFromSession,
  buyStreakShield,
  syncDailyStreak,
  loadStudentProgress,
  saveStudentProgress,
  getLeaderboard,
  createChallenge,
  submitChallengeScore,
  adminCreateUser,
  createChildAccount,
  getFamilyMembers,
  setRecommendedMissions,
};

declare global {
  interface Window {
    sb?: ReturnType<typeof getSupabaseClient>;
    LaraSec?: typeof LaraSec;
  }
}

window.sb = sb;
window.LaraSec = LaraSec;
