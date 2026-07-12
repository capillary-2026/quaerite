const VALUES = [
  { title: 'Mission', text: 'To advance the discovery of innovative protein therapeutics and delivery technologies for eye diseases.' },
  { title: 'Vision',  text: 'To become a leading research-driven biotechnology company in ophthalmology, bringing hope and improved vision to patients worldwide.' },
  { title: 'Values',  text: 'Scientific inquiry, courageous innovation, collaborative excellence, agile execution, and a patient-centered mindset.' },
];

const STATS = [
  { value: 'Phase I',  label: 'Lead program in clinic', sub: 'QBR202 · nAMD & DME' },
  { value: '4',        label: 'Pipeline programs',       sub: 'Across major indications' },
  { value: '200M+',   label: 'Patients targeted',        sub: 'Projected globally by 2040' },
  { value: 'Beijing', label: 'Headquarters',             sub: 'FDA & NMPA IND cleared' },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">

          {/* Text column */}
          <div className="reveal-left">
            <p className="text-[#2AB2E3] text-xs font-bold tracking-[0.18em] uppercase mb-3">About Quaerite</p>
            <h2 className="text-4xl lg:text-[2.75rem] font-bold text-[#0E204C] leading-tight mb-5">
              The Pursuit of Sight
            </h2>
            <p className="text-[#2AB2E3] italic text-base mb-1">&#8220;Quaerite et invenietis&#8221;</p>
            <p className="text-slate-400 text-[0.6875rem] font-bold tracking-[0.2em] uppercase mb-7">Seek and You Shall Find</p>

            <p className="text-slate-700 text-[1.0625rem] leading-[1.75] mb-4">
              <strong className="text-[#0E204C] font-semibold">Quaerite Biopharm Research</strong> is a clinical-stage
              biotechnology company pioneering the next generation of protein therapeutics for vision-threatening
              ocular diseases. Inspired by the Latin phrase <em>Quaerite et invenietis</em>, we are dedicated to
              finding the truth in science to protect the gift of sight.
            </p>
            <p className="text-slate-600 text-[1.0625rem] leading-[1.75] mb-8">
              Our mission is to redefine the standard of ocular care. Through our integrated platform of antibody
              engineering and proprietary delivery systems, we are overcoming the limitations of current biologics
              to provide the global ophthalmology market with more effective, long-acting, and patient-friendly therapies.
            </p>

            <a
              href="#platform"
              className="inline-flex items-center gap-1.5 text-[#0E204C] font-semibold text-sm border-b border-[#0E204C]/25 hover:border-[#2AB2E3] hover:text-[#2AB2E3] transition-all pb-0.5"
            >
              Explore our technology &#8594;
            </a>
          </div>

          {/* Stats grid */}
          <div className="reveal-right grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="p-6 border border-slate-200 rounded-lg hover:border-[#2AB2E3]/50 hover:shadow-md transition-all group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <p className="text-2xl font-bold text-[#0E204C] mb-1 group-hover:text-[#2AB2E3] transition-colors">{s.value}</p>
                <p className="text-sm font-semibold text-slate-700 mb-0.5">{s.label}</p>
                <p className="text-xs text-slate-400">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values row */}
        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-slate-100">
          {VALUES.map((v, i) => (
            <div key={v.title} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <p className="text-[#2AB2E3] text-xs font-bold tracking-[0.18em] uppercase mb-3">{v.title}</p>
              <p className="text-slate-600 leading-relaxed text-sm">{v.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
