import { el } from '../../core/dom';
import {
  getLeaderboard,
  listChallenges,
  listFriendships,
  removeFriendship,
  respondFriendRequest,
  sendFriendRequest,
  type FriendshipRecord,
} from '../../services/social.service';
import type { Challenge, Profile, PublicLeaderboardEntry } from '../../types/database';

type SocialTab = 'ranking' | 'friends' | 'challenges';

export function renderSocialView(profile: Profile): HTMLElement {
  const root = el('div', {});
  let activeTab: SocialTab = 'ranking';

  const tabBar = el('div', { className: 'segment-group' });
  const body = el('div', {});

  function renderTabs(): void {
    const tabs: Array<{ id: SocialTab; label: string }> = [
      { id: 'ranking', label: '🏆 Ranking Global' },
      { id: 'friends', label: '👥 Amigos' },
      { id: 'challenges', label: '⚔️ Retos' },
    ];
    tabBar.replaceChildren(
      ...tabs.map((t) =>
        el(
          'button',
          {
            type: 'button',
            className: `segment${activeTab === t.id ? ' active' : ''}`,
            onClick: () => {
              activeTab = t.id;
              renderTabs();
              void loadTab();
            },
          },
          t.label,
        ),
      ),
    );
  }

  async function loadTab(): Promise<void> {
    body.replaceChildren(el('div', { className: 'glass-card' }, el('p', { className: 'muted' }, 'Cargando...')));
    try {
      if (activeTab === 'ranking') {
        const entries = await getLeaderboard('global');
        body.replaceChildren(buildRankingCard(entries, profile.id));
      } else if (activeTab === 'friends') {
        const [entries, friendships] = await Promise.all([getLeaderboard('global'), listFriendships()]);
        body.replaceChildren(buildFriendsCard(entries, friendships, profile.id, () => void loadTab()));
      } else {
        const challenges = await listChallenges();
        body.replaceChildren(buildChallengesCard(challenges, profile.id));
      }
    } catch (err) {
      body.replaceChildren(
        el(
          'div',
          { className: 'glass-card' },
          el('div', { className: 'alert alert-error' }, err instanceof Error ? err.message : 'Error cargando Social'),
        ),
      );
    }
  }

  const header = el(
    'div',
    { className: 'glass-card' },
    el('h2', {}, '🏆 Comunidad y Retos'),
    el('p', { className: 'muted' }, 'Compite de forma segura con tus compañeros y amigos.'),
    tabBar,
  );

  root.append(header, body);
  renderTabs();
  void loadTab();
  return root;
}

function buildRankingCard(entries: PublicLeaderboardEntry[], myId: string): HTMLElement {
  if (entries.length === 0) {
    return el(
      'div',
      { className: 'glass-card' },
      el('p', { className: 'muted' }, 'Aún no hay alumnos activos en el ranking.'),
    );
  }

  const podium = el('div', { className: 'podium-container' });
  const order = [1, 0, 2]; // 2º, 1º, 3º visual
  for (const idx of order) {
    const entry = entries[idx];
    if (!entry) continue;
    const rank = idx + 1;
    const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : '🥉';
    podium.appendChild(
      el(
        'div',
        { className: `podium-slot podium-${rank}` },
        el('div', {}, `${entry.avatar} ${entry.username}`),
        el('div', { className: 'podium-box' }, el('span', {}, medal), el('span', {}, `${entry.xp} XP`)),
      ),
    );
  }

  const list = el('div', { className: 'social-list' });
  entries.forEach((entry, i) => {
    list.appendChild(
      el(
        'div',
        { className: `social-user-row${entry.id === myId ? ' is-me' : ''}` },
        el('span', {}, `#${i + 1} · ${entry.avatar} ${entry.username} (${entry.grade})`),
        el('span', { className: 'pill' }, `💎 ${entry.xp} XP · Nv.${entry.level}`),
      ),
    );
  });

  return el('div', { className: 'glass-card' }, podium, list);
}

function buildFriendsCard(
  allStudents: PublicLeaderboardEntry[],
  friendships: FriendshipRecord[],
  myId: string,
  onReload: () => void,
): HTMLElement {
  const nameMap = new Map(allStudents.map((s) => [s.id, s]));
  const incoming = friendships.filter((f) => f.addressee_id === myId && f.status === 'pending');
  const accepted = friendships.filter((f) => f.status === 'accepted');
  const connectedIds = new Set(
    friendships.flatMap((f) => [f.requester_id, f.addressee_id]),
  );

  const incomingList = el('div', { className: 'social-list' });
  for (const req of incoming) {
    const other = nameMap.get(req.requester_id);
    incomingList.appendChild(
      el(
        'div',
        { className: 'social-user-row' },
        el('span', {}, `${other?.avatar ?? '⚡'} ${other?.username ?? req.requester_id} quiere ser tu amigo`),
        el(
          'div',
          {},
          el(
            'button',
            {
              type: 'button',
              className: 'btn',
              onClick: async () => {
                await respondFriendRequest(req.id, 'accepted');
                onReload();
              },
            },
            'Aceptar',
          ),
          el(
            'button',
            {
              type: 'button',
              className: 'btn btn-secondary',
              onClick: async () => {
                await removeFriendship(req.id);
                onReload();
              },
            },
            'Rechazar',
          ),
        ),
      ),
    );
  }

  const friendsList = el('div', { className: 'social-list' });
  for (const f of accepted) {
    const otherId = f.requester_id === myId ? f.addressee_id : f.requester_id;
    const other = nameMap.get(otherId);
    friendsList.appendChild(
      el(
        'div',
        { className: 'social-user-row' },
        el('span', {}, `${other?.avatar ?? '⚡'} ${other?.username ?? otherId} · 💎 ${other?.xp ?? 0} XP`),
        el(
          'button',
          {
            type: 'button',
            className: 'btn btn-secondary',
            onClick: async () => {
              await removeFriendship(f.id);
              onReload();
            },
          },
          'Quitar',
        ),
      ),
    );
  }

  const suggestions = allStudents.filter((s) => s.id !== myId && !connectedIds.has(s.id)).slice(0, 8);
  const suggestList = el('div', { className: 'social-list' });
  for (const s of suggestions) {
    suggestList.appendChild(
      el(
        'div',
        { className: 'social-user-row' },
        el('span', {}, `${s.avatar} ${s.username} (${s.grade})`),
        el(
          'button',
          {
            type: 'button',
            className: 'btn',
            onClick: async () => {
              await sendFriendRequest(myId, s.id);
              onReload();
            },
          },
          'Añadir amigo',
        ),
      ),
    );
  }

  return el(
    'div',
    { className: 'glass-card' },
    incoming.length > 0 ? el('h3', {}, '📩 Solicitudes recibidas') : null,
    incoming.length > 0 ? incomingList : null,
    el('h3', {}, `👥 Mis Amigos (${accepted.length})`),
    accepted.length > 0 ? friendsList : el('p', { className: 'muted' }, 'Todavía no tienes amigos añadidos.'),
    suggestions.length > 0 ? el('h3', {}, '✨ Otros compañeros') : null,
    suggestions.length > 0 ? suggestList : null,
  );
}

function buildChallengesCard(challenges: Challenge[], myId: string): HTMLElement {
  if (challenges.length === 0) {
    return el(
      'div',
      { className: 'glass-card' },
      el('h3', {}, '⚔️ Retos'),
      el('p', { className: 'muted' }, 'No tienes retos activos todavía. Podrás retar a tus amigos desde Arcade.'),
    );
  }

  const list = el('div', { className: 'social-list' });
  for (const ch of challenges) {
    const statusText =
      ch.status === 'pending'
        ? 'Pendiente'
        : ch.winner_id === myId
          ? '¡Ganaste! 🏆'
          : ch.winner_id === null
            ? 'Empate 🤝'
            : 'Completado';

    list.appendChild(
      el(
        'div',
        { className: 'social-user-row' },
        el('span', {}, `⚔️ ${ch.game_type} · Retador: ${ch.challenger_score} pts · Oponente: ${ch.opponent_score ?? '-'} pts`),
        el('span', { className: 'pill' }, statusText),
      ),
    );
  }

  return el('div', { className: 'glass-card' }, el('h3', {}, '⚔️ Historial de Retos'), list);
}
