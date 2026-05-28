import { Calendar } from 'lucide-react';

const NEWS = [
  {
    date: 'May 2026',
    tag: 'Conference',
    headline: 'Quaerite presents QBR202 Phase I interim data at ARVO 2026',
    summary: 'Six-month follow-up data demonstrating sustained VEGF suppression and favorable safety profile presented at the Association for Research in Vision and Ophthalmology annual meeting.',
  },
  {
    date: 'Jan 2026',
    tag: 'Clinical',
    headline: 'First patient dosed in QBR202 Phase I/II dose-escalation study',
    summary: 'Quaerite announces successful administration of QBR202 to the first patient enrolled in the open-label, multi-center Phase I/II study in patients with neovascular AMD.',
  },
  {
    date: 'Jan 2026',
    tag: 'Regulatory',
    headline: 'NMPA accepts QBR202 IND application for clinical investigation',
    summary: 'The National Medical Products Administration (NMPA) of China has accepted the Investigational New Drug (IND) application for QBR202, enabling clinical studies in China.',
  },
  {
    date: 'Dec 2025',
    tag: 'Regulatory',
    headline: 'FDA grants IND clearance for QBR202 in wet AMD',
    summary: 'The U.S. Food and Drug Administration has cleared the IND application for QBR202, Quaerite's lead gene therapy candidate targeting neovascular age-related macular degeneration.',
  },
];

const MILESTONES = [
  { year: '2025', event: 'FDA & NMPA IND clearance for QBR202' },
  { year: '2026 H1', event: 'First patient dosed; Phase I interim data' },
  { year: '2026 H2', event: 'IND filing for QBR207 (Geographic Atrophy)' },
  { year: '2027', event: 'Phase I/II dose escalation complete' },
  { year: '2028', event: 'Phase II efficacy study initiation (QBR202)' },
];

const TAG_COLORS: Record<string, string> = {
  Conference: 'bg-[#2AB2E3]/20 text-[#2AB2E3]',
  Clinical: 'bg-[#C41E7F]/20 text-[#C41E7F]',
  Regulatory: 'bg-[#E5A044]/20 text-[#E5A044]',
};

export default function News() {
  return (
    <section id="news" className="bg-[#0E204C] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#2AB2E3] uppercase mb-3">Latest</p>
          <h2 className="text-4xl font-bold text-white mb-5">News & Milestones</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* News Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {NEWS.map((item, i) => (
              <div
                key={i}
                className="reveal bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors cursor-pointer"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${TAG_COLORS[item.tag] ?? 'bg-white/10 text-white'}`}>
                    {item.tag}
                  </span>
                  <span className="text-xs text-white/40">{item.date}</span>
                </div>
                <h3 className="text-sm font-semibold text-white leading-snug mb-2">{item.headline}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{item.summary}</p>
              </div>
            ))}
          </div>

          {/* Milestone Timeline */}
          <div className="reveal lg:col-span-2">
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-6">Development Timeline</p>
            <div className="relative">
              <div className="absolute left-[19px] top-0 bottom-0 w-px bg-white/10" />
              <div className="space-y-6">
                {MILESTONES.map((m, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="shrink-0 w-10 h-10 rounded-full border border-[#2AB2E3]/50 bg-[#0E204C] flex items-center justify-center z-10">
                      <Calendar className="w-4 h-4 text-[#2AB2E3]" />
                    </div>
                    <div className="pt-1">
                      <p className="text-xs font-bold text-[#2AB2E3] mb-0.5">{m.year}</p>
                      <p className="text-sm text-white/70 leading-snug">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
