import type { ReactNode } from 'react';

interface Disease {
  abbr: string;
  name: string;
  prevalence: string;
  description: string;
  icon: ReactNode;
}

const EyeIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <ellipse cx="24" cy="24" rx="20" ry="13" stroke={color} strokeWidth="2.5" />
    <circle cx="24" cy="24" r="6" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="2.5" />
    <circle cx="24" cy="24" r="2.5" fill={color} />
  </svg>
);

const DISEASES: Disease[] = [
  {
    abbr: 'nAMD',
    name: 'Neovascular Age-related Macular Degeneration',
    prevalence: '~20M patients globally',
    description: 'Abnormal blood vessel growth beneath the retina causes rapid, severe central vision loss. Anti-VEGF injections are standard of care but require indefinite repeat dosing.',
    icon: <EyeIcon color="#2AB2E3" />,
  },
  {
    abbr: 'DME',
    name: 'Diabetic Macular Edema',
    prevalence: '~21M patients globally',
    description: 'Fluid accumulation in the macula driven by diabetic retinopathy. Leading cause of vision impairment in working-age adults worldwide.',
    icon: <EyeIcon color="#C41E7F" />,
  },
  {
    abbr: 'GA',
    name: 'Geographic Atrophy',
    prevalence: '~5M patients globally',
    description: 'Advanced dry AMD characterized by progressive loss of RPE and photoreceptors. No curative therapy; complement inhibition remains an area of active investigation.',
    icon: <EyeIcon color="#E5A044" />,
  },
  {
    abbr: 'RVO',
    name: 'Retinal Vein Occlusion',
    prevalence: '~16M patients globally',
    description: 'Blockage of retinal veins leads to macular edema and vision loss. Anti-VEGF therapy provides benefit but requires frequent administration.',
    icon: <EyeIcon color="#2AB2E3" />,
  },
  {
    abbr: 'TED',
    name: 'Thyroid Eye Disease',
    prevalence: '~1M patients in US/EU',
    description: 'Autoimmune orbital inflammation causing proptosis, diplopia, and compressive optic neuropathy. Emerging IGF-1R targeted therapies demonstrate meaningful efficacy.',
    icon: <EyeIcon color="#C41E7F" />,
  },
  {
    abbr: 'DR/DMI',
    name: 'Diabetic Retinopathy & Macular Ischemia',
    prevalence: '~100M patients globally',
    description: 'Microvascular complications of diabetes affecting retinal perfusion and integrity. A leading cause of blindness in working-age populations worldwide.',
    icon: <EyeIcon color="#E5A044" />,
  },
];

export default function Diseases() {
  return (
    <section id="diseases" className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#2AB2E3] uppercase mb-3">Disease Areas</p>
          <h2 className="text-4xl font-bold text-[#0E204C] mb-5">Conditions We Target</h2>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            We focus on high-unmet-need retinal and orbital diseases where durable gene therapy can
            replace the burden of repeated intravitreal injections or where no adequate treatment exists.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DISEASES.map((d, i) => (
            <div
              key={d.abbr}
              className="reveal bg-white border border-slate-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mb-4">{d.icon}</div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-xl font-bold text-[#0E204C]">{d.abbr}</span>
                <span className="text-xs text-slate-400 font-medium">{d.prevalence}</span>
              </div>
              <p className="text-xs text-slate-500 font-medium mb-3">{d.name}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
