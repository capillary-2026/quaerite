import { useEffect, useRef, useState } from 'react';

const PHASES = ['Discovery', 'Preclinical', 'Phase I', 'Phase II', 'Phase III'];

interface Program {
  code: string;
  name: string;
  target: string;
  indications: string[];
  phase: number;
  filled: number;
}

const PROGRAMS: Program[] = [
  { code: 'QBR202', name: 'OcuHLE-X® / VEGF-A', target: 'VEGF-A', indications: ['Wet AMD', 'DME', 'RVO'], phase: 2, filled: 3 },
  { code: 'QBR207', name: 'OcuHLE-X® / CFI', target: 'Complement Factor I', indications: ['Geographic Atrophy'], phase: 1, filled: 2 },
  { code: 'QBR209', name: 'OcuHLE-X® / CNTF', target: 'CNTF', indications: ['Retinal Degeneration'], phase: 1, filled: 2 },
  { code: 'QBR210', name: 'OcuHLE-X® / IGF-1R', target: 'IGF-1R', indications: ['DR', 'DMI'], phase: 0, filled: 1 },
];

const GLOSSARY = [
  ['AMD', 'Age-related Macular Degeneration'],
  ['DME', 'Diabetic Macular Edema'],
  ['RVO', 'Retinal Vein Occlusion'],
  ['GA', 'Geographic Atrophy'],
  ['DR', 'Diabetic Retinopathy'],
  ['DMI', 'Diabetic Macular Ischemia'],
];

function PipelineRow({ prog, idx }: { prog: Program; idx: number }) {
  const ref = useRef<HTMLTableRowElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <tr ref={ref} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <td className="py-5 pr-4 align-top">
        <p className="font-bold text-[#0E204C] text-sm">{prog.code}</p>
        <p className="text-xs text-slate-400 mt-0.5">{prog.target}</p>
      </td>
      <td className="py-5 pr-4 align-top">
        <div className="flex flex-wrap gap-1">
          {prog.indications.map(ind => (
            <span key={ind} className="text-xs bg-[#EAF8FD] text-[#0E204C] rounded-full px-2.5 py-0.5 font-medium">{ind}</span>
          ))}
        </div>
      </td>
      <td className="py-5 align-top w-full">
        <div className="flex gap-1.5 items-center">
          {PHASES.map((phase, i) => {
            const isFilled = i < prog.filled;
            const isCurrent = i === prog.phase;
            return (
              <div key={phase} className="flex-1 h-8 rounded-md overflow-hidden relative" title={phase}>
                <div
                  className="absolute inset-0 rounded-md"
                  style={{
                    backgroundColor: isFilled ? '#0E204C' : '#e2e8f0',
                    transform: visible ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: `transform 0.55s cubic-bezier(0.4,0,0.2,1) ${idx * 100 + i * 60}ms`,
                  }}
                />
                {isCurrent && (
                  <span
                    className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold z-10"
                    style={{ color: isFilled ? '#2AB2E3' : '#64748b' }}
                  >
                    ●
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </td>
    </tr>
  );
}

export default function Pipeline() {
  return (
    <section id="pipeline" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#2AB2E3] uppercase mb-3">Clinical Pipeline</p>
          <h2 className="text-4xl font-bold text-[#0E204C] mb-5">Programs in Development</h2>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            All programs leverage the OcuHLE-X® delivery platform. QBR202 is our lead asset, currently
            enrolling patients in a Phase I/II open-label dose-escalation study.
          </p>
        </div>

        {/* Phase header labels */}
        <div className="hidden md:flex mb-2 pl-[calc(10rem+1rem)]">
          {PHASES.map(p => (
            <div key={p} className="flex-1 text-center text-[11px] font-semibold text-slate-400 uppercase tracking-wide">{p}</div>
          ))}
        </div>

        <div className="reveal overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wide pb-3 pr-4 w-36">Program</th>
                <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wide pb-3 pr-4 w-40">Indication(s)</th>
                <th className="text-left text-xs font-semibold text-slate-400 uppercase tracking-wide pb-3">Development Stage</th>
              </tr>
            </thead>
            <tbody>
              {PROGRAMS.map((prog, i) => (
                <PipelineRow key={prog.code} prog={prog} idx={i} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Glossary */}
        <div className="reveal mt-10 pt-8 border-t border-slate-100">
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">Glossary</p>
          <div className="flex flex-wrap gap-x-8 gap-y-1">
            {GLOSSARY.map(([abbr, full]) => (
              <p key={abbr} className="text-xs text-slate-500"><span className="font-semibold text-slate-700">{abbr}</span> — {full}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
