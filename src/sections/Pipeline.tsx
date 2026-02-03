import { useState } from 'react';
import { Beaker, FlaskConical, Microscope, Rocket, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Pipeline() {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState('qbr202');

  const pipelineData = [
    {
      id: 'qbr202',
      name: 'QBR202',
      fullName: t.pipeline.products.qbr202.fullName,
      phase: 'IND-Enabling',
      phaseColor: 'bg-amber-500',
      indications: ['wAMD', 'DME', 'RVO'],
      description: t.pipeline.products.qbr202.desc,
      highlights: t.pipeline.products.qbr202.highlights,
      progress: 75,
      icon: Rocket,
      year: '2025',
    },
    {
      id: 'qbr207',
      name: 'QBR207',
      fullName: t.pipeline.products.qbr207.fullName,
      phase: 'PCC',
      phaseColor: 'bg-blue-500',
      indications: ['GA'],
      description: t.pipeline.products.qbr207.desc,
      highlights: t.pipeline.products.qbr207.highlights,
      progress: 45,
      icon: Beaker,
      year: '2026',
    },
    {
      id: 'qbr209',
      name: 'QBR209',
      fullName: t.pipeline.products.qbr209.fullName,
      phase: 'PCC',
      phaseColor: 'bg-blue-500',
      indications: ['wAMD', 'DME', 'TED', 'UME'],
      description: t.pipeline.products.qbr209.desc,
      highlights: t.pipeline.products.qbr209.highlights,
      progress: 40,
      icon: FlaskConical,
      year: '2026',
    },
    {
      id: 'qbr210',
      name: 'QBR210',
      fullName: t.pipeline.products.qbr210.fullName,
      phase: 'Discovery',
      phaseColor: 'bg-purple-500',
      indications: ['DR', 'DMI'],
      description: t.pipeline.products.qbr210.desc,
      highlights: t.pipeline.products.qbr210.highlights,
      progress: 25,
      icon: Microscope,
      year: '2027',
    },
  ];

  const indications = [
    { code: 'wAMD', name: language === 'zh' ? '湿性AMD' : 'wAMD', fullName: t.pipeline.indications.wamd },
    { code: 'DME', name: 'DME', fullName: t.pipeline.indications.dme },
    { code: 'RVO', name: 'RVO', fullName: t.pipeline.indications.rvo },
    { code: 'GA', name: 'GA', fullName: t.pipeline.indications.ga },
    { code: 'TED', name: 'TED', fullName: t.pipeline.indications.ted },
    { code: 'UME', name: 'UME', fullName: t.pipeline.indications.ume },
    { code: 'DR', name: 'DR', fullName: t.pipeline.indications.dr },
    { code: 'DMI', name: 'DMI', fullName: t.pipeline.indications.dmi },
  ];

  const selectedProduct = pipelineData.find(p => p.id === selectedProject);

  return (
    <section id="pipeline" className="section-padding bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-4">
            {t.pipeline.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.pipeline.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.pipeline.subtitle}
          </p>
        </div>

        <div className="mb-12 overflow-x-auto">
          <div className="min-w-[800px] p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="grid grid-cols-5 gap-4 text-sm">
              <div className="text-gray-500 font-medium">{t.pipeline.table.project}</div>
              <div className="text-gray-500 font-medium">2025</div>
              <div className="text-gray-500 font-medium">2026</div>
              <div className="text-gray-500 font-medium">2027</div>
              <div className="text-gray-500 font-medium">{t.pipeline.table.indications}</div>
            </div>
            {pipelineData.map((item) => (
              <div key={item.id} className="grid grid-cols-5 gap-4 py-3 border-t border-white/10 items-center">
                <div className="text-white font-medium">{item.name}</div>
                <div className="col-span-3 relative">
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.phaseColor} rounded-full transition-all duration-1000`}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                  <div
                    className="absolute top-4 text-xs text-gray-500"
                    style={{ left: `${item.progress}%`, transform: 'translateX(-50%)' }}
                  >
                    {item.phase}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {item.indications.map((ind) => (
                    <span key={ind} className="px-2 py-0.5 text-xs bg-white/10 text-gray-300 rounded">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {pipelineData.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                className={`w-full p-5 rounded-xl text-left transition-all ${
                  selectedProject === project.id
                    ? 'bg-teal-500/20 border border-teal-500/50'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        selectedProject === project.id ? 'bg-teal-500/30' : 'bg-white/10'
                      }`}
                    >
                      <project.icon
                        size={24}
                        className={selectedProject === project.id ? 'text-teal-400' : 'text-gray-400'}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                      <p className="text-sm text-gray-400">{project.fullName}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${project.phaseColor} text-white`}
                  >
                    {project.phase}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {selectedProduct && (
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-teal-500/20 flex items-center justify-center">
                  <selectedProduct.icon size={32} className="text-teal-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedProduct.name}</h3>
                  <p className="text-gray-400">{selectedProduct.fullName}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{selectedProduct.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-500 mb-3">{t.pipeline.product.highlights}</h4>
                <ul className="space-y-2">
                  {selectedProduct.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 size={18} className="text-teal-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-500 mb-3">{t.pipeline.product.indications}</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.indications.map((indCode) => {
                    const ind = indications.find((i) => i.code === indCode);
                    return (
                      <span
                        key={indCode}
                        className="px-3 py-1.5 text-sm bg-white/10 text-gray-300 rounded-lg border border-white/10"
                        title={ind?.fullName}
                      >
                        {ind?.name || indCode}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{t.pipeline.product.progress}</span>
                  <span className="text-sm text-teal-400 font-medium">{selectedProduct.progress}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${selectedProduct.phaseColor} rounded-full transition-all duration-500`}
                    style={{ width: `${selectedProduct.progress}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-4">{t.pipeline.indications.title}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {indications.map((ind) => (
              <div key={ind.code} className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-xs bg-teal-500/20 text-teal-400 rounded font-medium">
                  {ind.code}
                </span>
                <span className="text-sm text-gray-400">{ind.fullName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
