import { useState } from 'react';
import { Dna, Zap, Droplets, Layers, CheckCircle2, Microscope, Beaker } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Platform() {
  const { t, language } = useLanguage();
  const [activeFeature, setActiveFeature] = useState('multispecific');

  const platformFeatures = [
    {
      id: 'multispecific',
      icon: Layers,
      title: t.platform.features.multispecific.title,
      subtitle: t.platform.features.multispecific.subtitle,
      description: t.platform.features.multispecific.desc,
      details: t.platform.features.multispecific.details,
    },
    {
      id: 'modular',
      icon: Dna,
      title: t.platform.features.modular.title,
      subtitle: t.platform.features.modular.subtitle,
      description: t.platform.features.modular.desc,
      details: t.platform.features.modular.details,
    },
    {
      id: 'halflife',
      icon: Zap,
      title: t.platform.features.halflife.title,
      subtitle: t.platform.features.halflife.subtitle,
      description: t.platform.features.halflife.desc,
      details: t.platform.features.halflife.details,
    },
    {
      id: 'formulation',
      icon: Droplets,
      title: t.platform.features.formulation.title,
      subtitle: t.platform.features.formulation.subtitle,
      description: t.platform.features.formulation.desc,
      details: t.platform.features.formulation.details,
    },
  ];

  const pkData = [
    { name: 'Aflibercept', rh: 4.927, color: '#6b7280' },
    { name: 'QBR202 DP', rh: 6.263, color: '#14b8a6' },
    { name: 'QBR-D33 DP', rh: 7.962, color: '#06b6d4' },
  ];

  const viscosityData = [
    { name: language === 'zh' ? 'Aflibercept\n(42 mg/mL)' : 'Aflibercept\n(42 mg/mL)', value: 1.97 },
    { name: language === 'zh' ? 'Faricimab\n(120 mg/mL)' : 'Faricimab\n(120 mg/mL)', value: 14 },
    { name: language === 'zh' ? 'QBR202 DP\n(50 mg/mL)' : 'QBR202 DP\n(50 mg/mL)', value: 8.73, highlight: true },
    { name: language === 'zh' ? 'QBR207 DP\n(50 mg/mL)' : 'QBR207 DP\n(50 mg/mL)', value: 8.36, highlight: true },
  ];

  const activeFeatureData = platformFeatures.find(f => f.id === activeFeature);

  return (
    <section id="platform" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-4">
            {t.platform.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.platform.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t.platform.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            {platformFeatures.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full p-5 rounded-xl text-left transition-all ${
                  activeFeature === feature.id
                    ? 'bg-teal-500/20 border border-teal-500/50'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeFeature === feature.id ? 'bg-teal-500/30' : 'bg-white/10'
                    }`}
                  >
                    <feature.icon
                      size={24}
                      className={activeFeature === feature.id ? 'text-teal-400' : 'text-gray-400'}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.subtitle}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {activeFeatureData && (
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-teal-500/20 flex items-center justify-center">
                  <activeFeatureData.icon size={32} className="text-teal-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{activeFeatureData.title}</h3>
                  <p className="text-gray-500">{activeFeatureData.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{activeFeatureData.description}</p>

              <div className="space-y-3">
                {activeFeatureData.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-teal-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-teal-500/10 via-cyan-500/10 to-blue-500/10 border border-teal-500/20 mb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 text-teal-400 text-sm font-medium mb-6">
                <Zap size={16} />
                {t.platform.ocuHLE.badge}
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.platform.ocuHLE.title}
              </h3>
              <p className="text-lg text-gray-400 mb-6">
                {t.platform.ocuHLE.subtitle}
              </p>

              <div className="p-5 rounded-xl bg-white/5 border border-white/10 mb-6">
                <h4 className="text-sm font-semibold text-white mb-4">{t.platform.ocuHLE.designTitle}</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-teal-500/30 flex items-center justify-center text-teal-400 text-xs font-medium flex-shrink-0">A</span>
                    <span className="text-gray-300">{t.platform.ocuHLE.modules.a}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-medium flex-shrink-0">B</span>
                    <span className="text-gray-300">{t.platform.ocuHLE.modules.b}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-400 text-xs font-medium flex-shrink-0">C</span>
                    <span className="text-gray-300">{t.platform.ocuHLE.modules.c}</span>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {t.platform.ocuHLE.features.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center">
                      <CheckCircle2 size={14} className="text-teal-400" />
                    </div>
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h4 className="text-lg font-semibold text-white mb-2">{t.platform.ocuHLE.rhTitle}</h4>
              <p className="text-sm text-gray-500 mb-6">{t.platform.ocuHLE.rhSubtitle}</p>
              
              <div className="space-y-4">
                {pkData.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-300">{item.name}</span>
                      <span className="text-sm font-medium" style={{ color: item.color }}>{item.rh} nm</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${(item.rh / 8.5) * 100}%`,
                          backgroundColor: item.color 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-teal-500/10 border border-teal-500/20">
                <p className="text-sm text-teal-400">
                  {t.platform.ocuHLE.rhNote}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-2">{t.platform.formulationData.viscosityTitle}</h4>
            <p className="text-sm text-gray-500 mb-6">{t.platform.formulationData.viscositySubtitle}</p>
            
            <div className="space-y-4">
              {viscosityData.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-sm ${item.highlight ? 'text-teal-400' : 'text-gray-300'}`}>
                      {item.name.split('\n')[0]}
                      <span className="text-gray-500 text-xs block">{item.name.split('\n')[1]}</span>
                    </span>
                    <span className={`text-sm font-medium ${item.highlight ? 'text-teal-400' : 'text-gray-400'}`}>
                      {item.value} mPa·s
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        item.highlight ? 'bg-teal-500' : 'bg-gray-500'
                      }`}
                      style={{ width: `${(item.value / 15) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-6">{t.platform.formulationData.qualityTitle}</h4>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Beaker size={18} className="text-teal-400" />
                  <span className="text-sm font-medium text-white">{t.platform.formulationData.endotoxin}</span>
                </div>
                <p className="text-2xl font-bold text-teal-400">&lt; 0.2</p>
                <p className="text-xs text-gray-500">EU/mL</p>
                <p className="text-xs text-gray-400 mt-1">USP Standard</p>
              </div>
              
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Microscope size={18} className="text-cyan-400" />
                  <span className="text-sm font-medium text-white">{t.platform.formulationData.particles}</span>
                </div>
                <div className="space-y-1 text-xs text-gray-400">
                  <p>≥10μm: ≤50 particles/mL</p>
                  <p>≥25μm: ≤5 particles/mL</p>
                  <p>≥50μm: ≤2 particles/mL</p>
                </div>
                <p className="text-xs text-gray-500 mt-2">USP Standard</p>
              </div>
              
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets size={18} className="text-blue-400" />
                  <span className="text-sm font-medium text-white">{t.platform.formulationData.osmolality}</span>
                </div>
                <p className="text-2xl font-bold text-blue-400">240-360</p>
                <p className="text-xs text-gray-500">mOsmol/kg</p>
                <p className="text-xs text-gray-400 mt-1">Isotonic with vitreous</p>
              </div>
              
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={18} className="text-amber-400" />
                  <span className="text-sm font-medium text-white">{t.platform.formulationData.stability}</span>
                </div>
                <p className="text-sm text-gray-300">Stable after 3-5 freeze-thaw cycles</p>
                <p className="text-xs text-gray-400 mt-1">Stable at 40°C for &gt;4 weeks</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 rounded-2xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">{t.platform.rdCapability}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              language === 'zh' ? '分子设计与构建' : 'Molecular Design',
              language === 'zh' ? '抗体发现' : 'Antibody Discovery',
              language === 'zh' ? '蛋白工程' : 'Protein Engineering',
              language === 'zh' ? '药理与DMPK' : 'Pharmacology & DMPK',
              language === 'zh' ? '生物制剂纯化' : 'Biologics Purification',
              language === 'zh' ? '分析方法开发' : 'Analytical Methods',
              language === 'zh' ? '制剂开发' : 'Formulation Dev',
              language === 'zh' ? 'QA质控' : 'QA',
            ].map((item, index) => (
              <div key={index} className="p-3 rounded-lg bg-white/5 text-center">
                <span className="text-xs text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
