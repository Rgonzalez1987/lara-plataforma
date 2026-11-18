let audioCtx: AudioContext | null = null;

function beep(freq: number, dur: number, type: OscillatorType = 'sine'): void {
  try {
    const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctx) return;
    if (!audioCtx) audioCtx = new Ctx();
    if (audioCtx.state === 'suspended') {
      void audioCtx.resume();
    }
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.setValueAtTime(0.08, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
    o.connect(g);
    g.connect(audioCtx.destination);
    o.start();
    o.stop(audioCtx.currentTime + dur);
  } catch {
    // Audio bloqueado o no soportado
  }
}

export const sfx = {
  ok: (): void => {
    beep(587, 0.14);
    window.setTimeout(() => beep(880, 0.24), 85);
  },
  err: (): void => {
    beep(311, 0.16, 'triangle');
    window.setTimeout(() => beep(233, 0.28, 'triangle'), 110);
  },
  lvl: (): void => {
    [523, 659, 783, 1046].forEach((f, i) => {
      window.setTimeout(() => beep(f, 0.35), i * 100);
    });
  },
  tap: (): void => {
    beep(440, 0.05);
  },
};
