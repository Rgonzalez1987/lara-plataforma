import type { Profile } from '../types/database';

export type ScreenId = 'home' | 'aventura' | 'arcade' | 'explora' | 'social' | 'stats' | 'family';

export interface AppState {
  profile: Profile | null;
  screen: ScreenId;
  booting: boolean;
}

type Listener = (state: AppState) => void;

const state: AppState = {
  profile: null,
  screen: 'home',
  booting: true,
};

const listeners = new Set<Listener>();

export function getState(): Readonly<AppState> {
  return state;
}

export function setState(patch: Partial<AppState>): void {
  Object.assign(state, patch);
  for (const listener of listeners) {
    listener(state);
  }
}

export function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
