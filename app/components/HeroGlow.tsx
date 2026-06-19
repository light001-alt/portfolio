'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const GLOW_SIZE = 900; // px — diameter of the light spot
const HALF = GLOW_SIZE / 2;

export function HeroGlow() {
  const spotRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const spot = spotRef.current;
    if (!spot) return;

    // Find the nearest <section> ancestor as the coordinate space
    sectionRef.current = spot.closest('section');

    // quickTo: pre-built setter that re-uses a single tween for performance
    const xTo = gsap.quickTo(spot, 'x', { duration: 1.1, ease: 'power3.out' });
    const yTo = gsap.quickTo(spot, 'y', { duration: 1.1, ease: 'power3.out' });

    const onMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      const originX = rect ? rect.left : 0;
      const originY = rect ? rect.top : 0;
      // Position center of glow at cursor
      xTo(e.clientX - originX - HALF);
      yTo(e.clientY - originY - HALF);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    /* Glow layer: sits between hero-bg.png (-z-10) and content (z-auto) */
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ zIndex: -5 }}
    >
      <div
        ref={spotRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: GLOW_SIZE,
          height: GLOW_SIZE,
          /* Offset so the center of the spot starts at (0,0) */
          marginLeft: -HALF,
          marginTop: -HALF,
          background: [
            'radial-gradient(circle at center,',
            '  oklch(0.78 0.18 65 / 0.18) 0%,',    /* amber center */
            '  oklch(0.7 0.1 65 / 0.07) 42%,',     /* warm amber mid */
            '  transparent 68%)',
          ].join('\n'),
          mixBlendMode: 'screen',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
