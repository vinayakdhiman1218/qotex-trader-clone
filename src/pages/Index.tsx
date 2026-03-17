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
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path
                      fill="#1DA1F2"
                      d="M12 2l2.2 2.6 3.4-.4.4 3.4 2.6 2.2-2.6 2.2-.4 3.4-3.4-.4L12 18l-2.2-2.6-3.4.4-.4-3.4L3.4 10l2.6-2.2.4-3.4 3.4.4L12 2z"
                    />
                    <path
                      fill="#fff"
                      d="M10.2 13.2l-1.4-1.4-1.2 1.2 2.6 2.6 5.2-5.2-1.2-1.2z"
                    />
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

              {/* Join text */}
              <p className="text-muted-foreground text-sm text-center leading-relaxed">
                If you have Telegram, you can view and join<br/>
                <span className="text-foreground font-semibold">𓄀•𝐐𝐓𝐗 𝐐𝐔𝐎𝐓𝐄𝐗•🪬</span> right away.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
