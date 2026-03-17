const TELEGRAM_LINK = "https://telegram.me/+WaGM6hAG6yU1ZGU1";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-12 font-sans">
      <div className="w-full max-w-md flex flex-col items-center gap-6">
        {/* Profile Avatar */}
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-4xl">
            𓄀
          </div>
          <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-accent border-2 border-background animate-[online-pulse_2s_ease-in-out_infinite]" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-extrabold text-foreground text-center tracking-tight">
          𓄀•𝐐𝐓𝐗 𝐐𝐔𝐎𝐓𝐄𝐗•🪬
        </h1>

        {/* Value Props */}
        <div className="w-full space-y-3 text-foreground">
          <div className="flex items-center gap-3 bg-card rounded-lg px-4 py-3">
            <span className="text-accent text-lg">✓</span>
            <span className="font-bold text-sm">𝐐𝐓𝐗 𝐓𝐑𝐔𝐒𝐓𝐄𝐃 𝐁𝐘 𝟏𝟎𝟎𝐊+ 𝐌𝐄𝐌𝐁𝐄𝐑𝐒</span>
          </div>
          <div className="flex items-center gap-3 bg-card rounded-lg px-4 py-3">
            <span className="text-accent text-lg">✓</span>
            <span className="font-bold text-sm">𝐅𝐎𝐑 𝐏𝐑𝐎𝐅𝐈𝐓 𝐓𝐀𝐊𝐄 𝐐𝐓𝐗 𝐒𝐎𝐅𝐓𝐖𝐀𝐑𝐄</span>
          </div>
          <div className="flex items-center gap-3 bg-card rounded-lg px-4 py-3">
            <span className="text-accent text-lg">✓</span>
            <span className="font-bold text-sm">𝟐𝟒/𝟕 𝐎𝐍𝐋𝐈𝐍𝐄 𝐂𝐔𝐒𝐓𝐎𝐌𝐄𝐑 𝐒𝐔𝐏𝐏𝐎𝐑𝐓</span>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center bg-primary text-primary-foreground font-bold text-lg py-4 rounded-xl transition-transform duration-150 hover:scale-[1.03] active:scale-95 animate-[pulse-glow_2s_ease-in-out_infinite]"
        >
          Join Free Channel
        </a>

        {/* Instructional Text */}
        <p className="text-muted-foreground text-sm text-center">
          If you have Telegram, you can view and join{" "}
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            𓄀•𝐐𝐓𝐗 𝐐𝐔𝐎𝐓𝐄𝐗•🪬
          </a>{" "}
          right away.
        </p>

        {/* Disclaimer */}
        <p className="text-muted-foreground text-xs text-center leading-relaxed mt-4 max-w-sm">
          We provide educational charts, analysis, and market psychology lessons. This is not a signals or investment advice channel. All content is for learning purposes only — not financial advice.
        </p>
      </div>
    </div>
  );
};

export default Index;
