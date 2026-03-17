import qtxLogo from "@/assets/qtx-logo.png";

const TELEGRAM_LINK = "https://telegram.me/+WaGM6hAG6yU1ZGU1";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='1'%3E%3Cpath d='M10 30 L20 20 L30 30 L20 40Z'/%3E%3Ccircle cx='45' cy='15' r='6'/%3E%3Cpath d='M40 45 L50 35 L50 55Z'/%3E%3Cpath d='M5 10 L15 10'/%3E%3Cpath d='M10 5 L10 15'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '120px 120px',
      }} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(250,30%,25%)] via-[hsl(230,25%,18%)] to-[hsl(230,25%,18%)]" style={{ opacity: 0.7 }} />

      {/* Header Bar */}
      <header className="relative z-10 flex items-center justify-between px-4 py-3 bg-[hsl(230,25%,15%,0.9)] backdrop-blur-sm border-b border-border">
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="120" cy="120" r="120" fill="#2AABEE"/>
            <path d="M98 175c-3.9 0-3.2-1.5-4.6-5.2L82 134.8l84-50" fill="#C8DAEA"/>
            <path d="M98 175c3 0 4.3-1.4 6-3l16-15.6-20-12" fill="#A9C9DD"/>
            <path d="M100 144.4l48.4 35.7c5.5 3 9.5 1.5 10.9-5.1l19.7-92.8c2-8-3.1-11.7-8.4-9.3l-116 44.7c-7.8 3.1-7.7 7.5-1.4 9.5l29.7 9.3 68.8-43.4c3.2-2 6.2-.9 3.8 1.3" fill="white"/>
          </svg>
          <span className="text-foreground font-semibold text-lg">Telegram</span>
        </div>
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground font-bold text-xs uppercase px-4 py-2 rounded-md tracking-wider hover:brightness-110 transition-all"
        >
          Download
        </a>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm bg-card/90 backdrop-blur-md rounded-2xl p-8 flex flex-col items-center gap-5 shadow-2xl border border-border">
          {/* Logo */}
          <img
            src={qtxLogo}
            alt="QTX Quotex Logo"
            className="w-28 h-28 rounded-full object-cover"
          />

          {/* Title with verified badge */}
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-foreground">𓄀•𝐐𝐓𝐗 𝐐𝐔𝐎𝐓𝐄𝐗•🪬</h1>
            <svg className="w-5 h-5 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>

          {/* Subscribers */}
          <p className="text-accent text-sm font-medium -mt-2">100 000+ subscribers</p>

          {/* Description */}
          <p className="text-muted-foreground text-sm text-center leading-relaxed">
            We provide educational charts, analysis, and market psychology lessons. This is not a signals or investment advice channel. All content is for learning purposes only - not a financial advice.
          </p>

          {/* CTA Button */}
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center bg-primary text-primary-foreground font-bold text-sm uppercase tracking-widest py-3.5 rounded-full hover:brightness-110 active:scale-95 transition-all"
          >
            Join Free Channel
          </a>
        </div>
      </main>
    </div>
  );
};

export default Index;
