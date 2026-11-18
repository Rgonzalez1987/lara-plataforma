const CONFETTI_COLORS = ['#fbbf24', '#ec4899', '#10b981', '#38bdf8', '#a78bfa', '#f97316'];

interface Particle {
  x: number;
  y: number;
  sx: number;
  sy: number;
  size: number;
  color: string;
  life: number;
  rot: number;
  vrot: number;
  shape: 'rect' | 'circle';
}

const particles: Particle[] = [];
let initialized = false;

function ensureLoop(): HTMLCanvasElement | null {
  const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement | null;
  if (!canvas) return null;
  if (initialized) return canvas;
  initialized = true;

  const resize = (): void => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  window.addEventListener('resize', resize);
  resize();

  const ctx = canvas.getContext('2d');
  if (!ctx) return canvas;

  const tick = (): void => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i]!;
      p.x += p.sx;
      p.y += p.sy;
      p.sy += 0.25;
      p.rot += p.vrot;
      p.life -= 0.018;
      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      if (p.shape === 'rect') {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
    window.requestAnimationFrame(tick);
  };

  window.requestAnimationFrame(tick);
  return canvas;
}

export function burstConfetti(count = 45): void {
  const canvas = ensureLoop();
  if (!canvas) return;
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  for (let i = 0; i < count; i++) {
    const ang = Math.random() * Math.PI * 2;
    const spd = Math.random() * 9 + 3;
    particles.push({
      x: cx,
      y: cy,
      sx: Math.cos(ang) * spd,
      sy: Math.sin(ang) * spd - 3.5,
      size: Math.random() * 7 + 4,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)]!,
      life: 1,
      rot: Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.25,
      shape: Math.random() < 0.6 ? 'rect' : 'circle',
    });
  }
}
