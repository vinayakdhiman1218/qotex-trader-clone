import qtxLogo from "@/assets/qtx-logo.png";

const TELEGRAM_LINK = "https://telegram.me/+WaGM6hAG6yU1ZGU1";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[hsl(199,80%,30%)] opacity-[0.07] blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[hsl(260,60%,30%)] opacity-[0.06] blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] w-[40%] h-[40%] rounded-full bg-[hsl(199,90%,40%)] opacity-[0.04] blur-[100px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent/30"
            style={{
              left: `${15 + i * 15}%`,
              animation: `float-up ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(199 90% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(199 90% 50% / 0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-5 py-3.5 bg-card/60 backdrop-blur-xl border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="liquid-glass-icon">
            <svg width="30" height="30" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="glass-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.25)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0.08)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.20)" />
                </linearGradient>
                <linearGradient id="glass-shine" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
                  <stop offset="40%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
                </linearGradient>
                <linearGradient id="tg-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5BC5F2" />
                  <stop offset="100%" stopColor="#2A8FEE" />
                </linearGradient>
                <filter id="glass-glow">
                  <feGaussianBlur stdDeviation="8" />
                  <feComposite in="SourceGraphic" />
                </filter>
              </defs>
              <circle cx="120" cy="120" r="110" fill="url(#tg-blue)" opacity="0.15" filter="url(#glass-glow)" />
              <circle cx="120" cy="120" r="105" fill="url(#glass-bg)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
              <circle cx="120" cy="120" r="104" fill="url(#tg-blue)" opacity="0.35" />
              <ellipse cx="120" cy="80" rx="70" ry="50" fill="url(#glass-shine)" opacity="0.6" />
              <g opacity="0.95">
                <path d="M98 175c-3.9 0-3.2-1.5-4.6-5.2L82 134.8l84-50" fill="rgba(200,218,234,0.7)"/>
                <path d="M98 175c3 0 4.3-1.4 6-3l16-15.6-20-12" fill="rgba(169,201,221,0.7)"/>
                <path d="M100 144.4l48.4 35.7c5.5 3 9.5 1.5 10.9-5.1l19.7-92.8c2-8-3.1-11.7-8.4-9.3l-116 44.7c-7.8 3.1-7.7 7.5-1.4 9.5l29.7 9.3 68.8-43.4c3.2-2 6.2-.9 3.8 1.3" fill="white"/>
              </g>
              <ellipse cx="120" cy="170" rx="60" ry="25" fill="rgba(255,255,255,0.06)" />
            </svg>
          </div>
          <span className="text-foreground font-semibold text-base tracking-tight">Telegram</span>
        </div>
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent text-accent-foreground font-semibold text-xs px-5 py-2 rounded-lg tracking-wide hover:brightness-110 transition-all active:scale-95"
        >
          Download
        </a>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
        <div
          className="w-full max-w-[380px] rounded-3xl p-px overflow-hidden"
          style={{ animation: 'glow-breathe 4s ease-in-out infinite' }}
        >
          {/* Gradient border wrapper */}
          <div className="bg-gradient-to-b from-border/80 via-border/30 to-border/60 rounded-3xl p-px">
            <div className="bg-card/95 backdrop-blur-2xl rounded-3xl p-8 flex flex-col items-center gap-6 relative overflow-hidden">
              {/* Card shimmer effect */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, hsl(199 90% 70%) 45%, transparent 50%)',
                  animation: 'shimmer-slide 6s ease-in-out infinite',
                }}
              />

              {/* Logo with glow ring */}
              <div className="relative" style={{ animation: 'pulse-ring 3s ease-in-out infinite' }}>
                <div className="absolute -inset-2 rounded-full bg-accent/10 blur-xl" />
                <img
                  src={qtxLogo}
                  alt="QTX Quotex Logo"
                  className="w-28 h-28 rounded-full object-cover relative z-10 ring-2 ring-accent/20 ring-offset-2 ring-offset-card"
                />
              </div>

              {/* Title */}
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-foreground tracking-tight">𓄀•𝐐𝐓𝐗 𝐐𝐔𝐎𝐓𝐄𝐗•🪬</h1>
                <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-accent-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
              </div>

              {/* Subscriber count */}
              <div className="flex items-center gap-2 -mt-2">
                <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
                <p className="text-accent text-sm font-medium">100 000+ subscribers</p>
              </div>

              {/* Feature pills */}
              <div className="w-full space-y-2">
                {[
                  '•𝐐𝐓𝐗 𝐓𝐑𝐔𝐒𝐓𝐄𝐃 𝐁𝐘 𝟏𝟎𝟎𝐊+ 𝐌𝐄𝐌𝐁𝐄𝐑𝐒',
                  '•𝐅𝐎𝐑 𝐏𝐑𝐎𝐅𝐈𝐓 𝐓𝐀𝐊𝐄 𝐐𝐓𝐗 𝐒𝐎𝐅𝐓𝐖𝐀𝐑𝐄',
                  '•𝟐𝟒/𝟕 𝐎𝐍𝐋𝐈𝐍𝐄 𝐂𝐔𝐒𝐓𝐎𝐌𝐄𝐑 𝐒𝐔𝐏𝐏𝐎𝐑𝐓',
                ].map((text, i) => (
                  <div
                    key={i}
                    className="w-full text-center py-2.5 px-4 rounded-xl bg-secondary/60 border border-border/50 text-foreground text-sm font-medium backdrop-blur-sm"
                  >
                    {text}
                  </div>
                ))}
              </div>

              {/* Join text */}
              <p className="text-muted-foreground text-sm text-center leading-relaxed">
                If you have Telegram, you can view and join<br/>
                <span className="text-foreground font-semibold">𓄀•𝐐𝐓𝐗 𝐐𝐔𝐎𝐓𝐄𝐗•🪬</span> right away.
              </p>

              {/* CTA */}
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-accent text-accent-foreground font-bold text-sm uppercase tracking-widest py-4 rounded-2xl hover:brightness-110 active:scale-[0.97] transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Join Free Channel</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
