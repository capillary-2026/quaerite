import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#0E204C] overflow-hidden">
      {/* Background eye image */}
      <div
        className="absolute inset-0 animate-ken-burns"
        style={{
          backgroundImage: "url('/eye-BW.jpg')",
          backgroundPosition: 'center right',
          backgroundSize: 'auto 120%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.28,
        }}
      />
      {/* Gradient mask */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E204C] via-[#0E204C]/85 to-[#0E204C]/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-24">
        <div className="max-w-2xl">

          {/* Status badge */}
          <div className="flex items-center gap-2 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2AB2E3] animate-pulse" />
            <span className="text-[#2AB2E3] text-xs font-semibold tracking-[0.15em] uppercase">
              Clinical-Stage &middot; Phase I Initiated 2026
            </span>
          </div>

          {/* Tagline */}
          <h1 className="text-5xl sm:text-6xl lg:text-[5.25rem] font-bold text-white leading-[1.04] tracking-tight mb-6">
            Seeking Truth.
            <br />
            Saving Sight.
          </h1>

          <p className="text-white/70 text-lg sm:text-xl max-w-lg leading-relaxed mb-10 font-light">
            Engineering long-duration protein therapeutics to transform ocular care and restore vision for patients worldwide.
          </p>

          <div className="flex flex-wrap gap-3 mb-16">
            <a
              href="#pipeline"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2AB2E3] hover:bg-[#1d9bc9] text-white font-semibold text-sm rounded transition-colors group"
            >
              View Our Pipeline
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3.5 border border-white/25 hover:border-white/50 hover:bg-white/10 text-white font-semibold text-sm rounded transition-all"
            >
              Partner With Us
            </a>
          </div>

          {/* Key stats */}
          <div className="flex flex-wrap gap-10 pt-8 border-t border-white/10">
            {[
              { value: 'Phase I',    label: 'Lead program QBR202' },
              { value: '4',          label: 'Pipeline programs' },
              { value: 'OcuHLE-X®', label: 'Proprietary platform' },
            ].map(s => (
              <div key={s.label}>
                <p className="text-white font-bold text-xl">{s.value}</p>
                <p className="text-white/40 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors"
      >
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
