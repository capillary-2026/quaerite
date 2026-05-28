import { Microscope, FlaskConical, Dna, Layers } from 'lucide-react';

const PILLARS = [
  {
    icon: <Dna className="w-7 h-7 text-[#2AB2E3]" />,
    title: 'Gene Therapy Vectors',
    body: 'Proprietary AAV capsid engineering optimized for ocular tropism, enabling efficient transduction of photoreceptors and RPE cells with minimized immunogenicity.',
  },
  {
    icon: <Microscope className="w-7 h-7 text-[#2AB2E3]" />,
    title: 'Target Biology',
    body: 'Deep mechanistic understanding of VEGF, complement, and neurodegeneration pathways in the posterior segment, informing rational target selection.',
  },
  {
    icon: <FlaskConical className="w-7 h-7 text-[#2AB2E3]" />,
    title: 'Manufacturing & CMC',
    body: 'GMP-compliant bioreactor-scale production of clinical-grade vectors, with validated analytical methods for potency, purity, and sterility testing.',
  },
  {
    icon: <Layers className="w-7 h-7 text-[#2AB2E3]" />,
    title: 'Delivery Systems',
    body: 'Sub-retinal and intravitreal delivery approaches designed for maximized transduction efficiency and durable therapeutic expression in the human eye.',
  },
];

const RH_BARS = [
  { label: 'OcuHLE-X®', pct: 92, color: '#2AB2E3' },
  { label: 'Standard AAV2', pct: 54, color: '#94a3b8' },
  { label: 'Competitor A', pct: 61, color: '#94a3b8' },
];

const CAPABILITIES = [
  'Vector Engineering', 'In Vivo Efficacy Models', 'Retinal Electrophysiology',
  'Biomarker Development', 'Immunogenicity Profiling', 'Clinical Ophthalmology',
  'Regulatory Affairs (FDA / NMPA)', 'Patient Registries',
];

export default function Platform() {
  return (
    <section id="technology" className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="reveal mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#2AB2E3] uppercase mb-3">Technology Platform</p>
          <h2 className="text-4xl font-bold text-[#0E204C] mb-5">Built for the Retina</h2>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            Our integrated platform combines best-in-class vector engineering, translational biology, and clinical operations
            to advance durable, single-administration therapies for blinding diseases.
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className="reveal bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#EAF8FD] flex items-center justify-center mb-5">{p.icon}</div>
              <h3 className="font-semibold text-[#0E204C] mb-2">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* OcuHLE-X® Callout */}
        <div className="reveal rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#0E204C] p-10 text-white">
            <p className="text-xs font-semibold tracking-widest text-[#2AB2E3] uppercase mb-3">Core Asset</p>
            <h3 className="text-3xl font-bold mb-4">OcuHLE-X<sup>®</sup></h3>
            <p className="text-white/70 leading-relaxed mb-6 text-sm">
              Our high-load efficiency AAV variant delivers superior photoreceptor transduction compared
              to legacy serotypes, with a favorable safety profile validated across multiple non-human
              primate and ex-vivo human retinal studies.
            </p>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#2AB2E3] inline-block" />Enhanced sub-retinal tropism</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#2AB2E3] inline-block" />Reduced immunogenic footprint</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#2AB2E3] inline-block" />Scalable GMP manufacturing</li>
            </ul>
          </div>
          <div className="bg-[#0a1a3e] p-10">
            <p className="text-xs font-semibold tracking-widest text-[#2AB2E3] uppercase mb-6">Retinal Transduction Efficiency vs. Comparators</p>
            <div className="space-y-5">
              {RH_BARS.map(b => (
                <div key={b.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-white/80 font-medium">{b.label}</span>
                    <span className="text-white/50">{b.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${b.pct}%`, backgroundColor: b.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-white/30 mt-6">Efficiency index derived from internal ex-vivo transduction assays. For illustrative purposes.</p>
          </div>
        </div>

        {/* Capabilities */}
        <div className="reveal mt-12">
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">Core Capabilities</p>
          <div className="flex flex-wrap gap-2">
            {CAPABILITIES.map(c => (
              <span key={c} className="text-sm text-[#0E204C] bg-white border border-slate-200 rounded-full px-4 py-1.5 font-medium">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
