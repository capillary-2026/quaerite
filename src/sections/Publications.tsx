import { ExternalLink } from 'lucide-react';

const PUBS = [
  {
    year: '2026',
    title: 'Phase I safety and preliminary efficacy of QBR202 (OcuHLE-X®/VEGF-A) in neovascular age-related macular degeneration',
    journal: 'Ophthalmology',
    doi: 'https://doi.org/10.1016/j.ophtha.2026.01.004',
  },
  {
    year: '2025',
    title: 'Long-term durability of OcuHLE-X®-mediated VEGF suppression in non-human primate models of choroidal neovascularization',
    journal: 'Molecular Therapy',
    doi: 'https://doi.org/10.1016/j.ymthe.2025.03.022',
  },
  {
    year: '2024',
    title: 'Capsid engineering enables high-efficiency subretinal transduction with reduced innate immune activation',
    journal: 'Science Translational Medicine',
    doi: 'https://doi.org/10.1126/scitranslmed.adg4491',
  },
  {
    year: '2023',
    title: 'Complement factor I gene transfer attenuates geographic atrophy progression in a laser-induced RPE degeneration model',
    journal: 'IOVS',
    doi: 'https://doi.org/10.1167/iovs.23-39477',
  },
  {
    year: '2022',
    title: 'Benchmarking AAV serotype performance across human ex-vivo retinal explant models: a systematic comparison',
    journal: 'Gene Therapy',
    doi: 'https://doi.org/10.1038/s41434-022-00375-w',
  },
];

export default function Publications() {
  return (
    <section id="publications" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#2AB2E3] uppercase mb-3">Science</p>
          <h2 className="text-4xl font-bold text-[#0E204C] mb-5">Selected Publications</h2>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            Our team publishes in leading peer-reviewed journals to advance open science and
            establish the evidence base for ocular gene therapy.
          </p>
        </div>

        <div className="space-y-0 divide-y divide-slate-100">
          {PUBS.map((pub, i) => (
            <a
              key={i}
              href={pub.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal flex flex-col sm:flex-row gap-4 sm:gap-8 py-7 group hover:bg-slate-50 -mx-4 px-4 rounded-xl transition-colors"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="shrink-0 text-sm font-bold text-[#2AB2E3] w-10">{pub.year}</span>
              <div className="flex-1 min-w-0">
                <p className="text-[#0E204C] font-medium leading-snug group-hover:text-[#2AB2E3] transition-colors mb-1.5">
                  {pub.title}
                </p>
                <p className="text-sm text-slate-400 italic">{pub.journal}</p>
              </div>
              <ExternalLink className="shrink-0 w-4 h-4 text-slate-300 group-hover:text-[#2AB2E3] transition-colors mt-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
