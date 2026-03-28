import { useState, useCallback, useEffect, useRef } from 'react';

const ITEMS = [
  // Stationery & Office
  '✏️', '🖊️', '✂️', '📏', '📐', '🖍️', '🖌️', '📎', '📌', '📝',
  '📒', '📕', '📗', '📘', '📙', '🗂️', '📋', '🖇️', '🔖', '📓',
  // Jewelry & Accessories
  '📿', '💍', '💎', '⌚', '👛', '🎀', '👜', '🧣', '🕶️', '👒',
  // Kitchen & Dining
  '🥄', '🍴', '🥂', '🍽️', '🫖', '☕', '🥣', '🍶', '🧊', '🥡',
  '🍳', '🫕', '🥘', '🧂',
  // Beauty & Personal Care
  '💄', '🪥', '🧴', '🪞', '🪮', '💅', '🧼', '🫧', '🧽',
  // Home & Decor
  '🕯️', '🧹', '🪣', '🧺', '🛋️', '🖼️', '🏺', '🪴', '💡', '🔑',
  // Toys & Games
  '🧸', '🎨', '🎲', '🪀', '🎯', '🧩', '🪁', '🎪',
  // Shopping & Retail
  '🛍️', '🛒', '🏷️', '🎁', '📦', '💰',
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createFloater(id) {
  return {
    id,
    emoji: ITEMS[Math.floor(Math.random() * ITEMS.length)],
    x: randomBetween(2, 95),
    size: randomBetween(20, 36),
    duration: randomBetween(18, 35),
    delay: randomBetween(0, 20),
    swayAmount: randomBetween(30, 80),
    swayDuration: randomBetween(3, 6),
    rotation: randomBetween(-40, 40),
    startY: randomBetween(100, 120),
  };
}

function BurstParticle({ x, y, emoji, angle, onDone }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const dist = randomBetween(60, 160);
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;
    const rot = randomBetween(-180, 180);

    el.animate(
      [
        { transform: 'translate(0,0) scale(1) rotate(0deg)', opacity: 1 },
        { transform: `translate(${dx}px,${dy}px) scale(0) rotate(${rot}deg)`, opacity: 0 },
      ],
      { duration: 600, easing: 'cubic-bezier(.2,.8,.3,1)', fill: 'forwards' }
    );

    const t = setTimeout(onDone, 650);
    return () => clearTimeout(t);
  }, []);

  return (
    <span
      ref={ref}
      style={{
        position: 'fixed',
        left: x,
        top: y,
        fontSize: randomBetween(12, 22),
        pointerEvents: 'none',
        zIndex: 10001,
        willChange: 'transform, opacity',
      }}
    >
      {emoji}
    </span>
  );
}

function FloatingItem({ item, onBurst }) {
  const ref = useRef(null);
  const [alive, setAlive] = useState(true);

  const handleClick = useCallback((e) => {
    e.stopPropagation();
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setAlive(false);
    onBurst(cx, cy, item.emoji);
  }, [item.emoji, onBurst]);

  if (!alive) return null;

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className="floating-item"
      style={{
        left: `${item.x}%`,
        fontSize: `${item.size}px`,
        animationDuration: `${item.duration}s`,
        animationDelay: `${item.delay}s`,
        '--sway': `${item.swayAmount}px`,
        '--sway-dur': `${item.swayDuration}s`,
        '--rot': `${item.rotation}deg`,
        '--start-y': `${item.startY}vh`,
      }}
    >
      {item.emoji}
    </div>
  );
}

export default function Particles() {
  const idRef = useRef(0);
  const [floaters, setFloaters] = useState(() =>
    Array.from({ length: 25 }, () => createFloater(idRef.current++))
  );
  const [bursts, setBursts] = useState([]);

  // Respawn items periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setFloaters((prev) => {
        if (prev.length < 25) {
          return [...prev, createFloater(idRef.current++)];
        }
        return prev;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleBurst = useCallback((cx, cy, emoji) => {
    const burstId = Date.now() + Math.random();
    const particles = Array.from({ length: 8 }, (_, i) => ({
      id: `${burstId}-${i}`,
      x: cx,
      y: cy,
      emoji,
      angle: (Math.PI * 2 * i) / 8 + randomBetween(-0.3, 0.3),
    }));
    setBursts((prev) => [...prev, ...particles]);

    // Remove the floater
    setFloaters((prev) => {
      const next = prev.slice(1);
      // Queue a replacement
      setTimeout(() => {
        setFloaters((p) => [...p, createFloater(idRef.current++)]);
      }, 2000);
      return next;
    });
  }, []);

  const removeBurst = useCallback((id) => {
    setBursts((prev) => prev.filter((b) => b.id !== id));
  }, []);

  return (
    <>
      <div className="floating-items-container">
        {floaters.map((item) => (
          <FloatingItem key={item.id} item={item} onBurst={handleBurst} />
        ))}
      </div>
      {bursts.map((b) => (
        <BurstParticle
          key={b.id}
          x={b.x}
          y={b.y}
          emoji={b.emoji}
          angle={b.angle}
          onDone={() => removeBurst(b.id)}
        />
      ))}
    </>
  );
}
