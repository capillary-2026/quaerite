import { useState } from 'react';
import { Eye, Activity, AlertCircle, TrendingUp, Users, Pill } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Diseases() {
  const { t, language } = useLanguage();
  const [activeDisease, setActiveDisease] = useState('wamd');

  const diseases = [
    {
      id: 'wamd',
      name: language === 'zh' ? '湿性年龄相关性黄斑变性' : 'wet AMD',
      shortName: language === 'zh' ? '湿性 AMD' : 'wet AMD',
      englishName: t.diseases.wamd.englishName,
      icon: Eye,
      color: 'from-red-500/20 to-orange-500/20',
      borderColor: 'border-red-500/30',
      stats: {
        globalPatients: language === 'zh' ? '1.96亿' : '196M',
        globalPatients2020: language === 'zh' ? '2020年全球约1.96亿患者' : '~196M patients globally in 2020',
        projectedPatients: language === 'zh' ? '2.88亿' : '288M',
        projectedYear: language === 'zh' ? '预计到2040年达2.88亿' : 'Projected to reach 288M by 2040',
        blindnessRate: language === 'zh' ? '90%' : '90%',
        blindnessDesc: language === 'zh' ? '导致90%的AMD相关失明事件' : 'Causes 90% of AMD-related blindness',
        marketSize: language === 'zh' ? '100亿+' : '$10B+',
        marketDesc: language === 'zh' ? '全球市场规模超100亿美元' : 'Global market exceeds $10B',
      },
      description: t.diseases.wamd.desc,
      currentTreatment: [
        language === 'zh' ? 'Vabysmo 6mg (Faricimab) - FDA批准的一线药物' : 'Vabysmo 6mg (Faricimab) - FDA-approved first-line therapy',
        language === 'zh' ? 'Eylea 8mg (Aflibercept) - 延长给药周期' : 'Eylea 8mg (Aflibercept) - Extended dosing intervals',
        language === 'zh' ? '给药周期：2-4个月' : 'Dosing interval: 2-4 months',
      ],
      unmetNeeds: [
        language === 'zh' ? '患者依从性不足导致临床获益不佳' : 'Insufficient patient compliance leads to suboptimal clinical benefit',
        language === 'zh' ? '部分患者对抗VEGF治疗反应不完全' : 'Some patients show incomplete response to anti-VEGF therapy',
        language === 'zh' ? '需要更长的给药间隔和更好的视力预后' : 'Need for longer dosing intervals and better visual outcomes',
      ],
    },
    {
      id: 'dryamd',
      name: language === 'zh' ? '干性年龄相关性黄斑变性' : 'Dry AMD / GA',
      shortName: language === 'zh' ? '干性 AMD / GA' : 'Dry AMD / GA',
      englishName: t.diseases.dryamd.englishName,
      icon: Activity,
      color: 'from-yellow-500/20 to-amber-500/20',
      borderColor: 'border-yellow-500/30',
      stats: {
        globalPatients: language === 'zh' ? '80-90%' : '80-90%',
        globalPatients2020: language === 'zh' ? '占AMD患者的80-90%' : 'Accounts for 80-90% of AMD patients',
        projectedPatients: language === 'zh' ? '500万' : '5M',
        projectedYear: language === 'zh' ? '全球约500万GA患者' : '~5M GA patients globally',
        blindnessRate: language === 'zh' ? '9倍' : '9x',
        blindnessDesc: language === 'zh' ? '患病率是湿性AMD的9倍' : '9x higher prevalence than wet AMD',
        marketSize: language === 'zh' ? '新市场' : 'Emerging',
        marketDesc: language === 'zh' ? '2023年起新获批药物进入市场' : 'New drugs approved since 2023',
      },
      description: t.diseases.dryamd.desc,
      currentTreatment: [
        language === 'zh' ? 'SYFOVRE (Pegcetacoplan) - 2023年FDA批准' : 'SYFOVRE (Pegcetacoplan) - FDA approved 2023',
        language === 'zh' ? 'IZERVAY (Avacincaptad pegol) - 2023年FDA批准' : 'IZERVAY (Avacincaptad pegol) - FDA approved 2023',
        language === 'zh' ? '给药间隔：1-2个月' : 'Dosing interval: 1-2 months',
      ],
      unmetNeeds: [
        language === 'zh' ? '仅有两款获批药物，治疗选择有限' : 'Only two approved drugs, limited treatment options',
        language === 'zh' ? '给药频率高，患者负担重' : 'High dosing frequency, heavy patient burden',
        language === 'zh' ? '疗效有限，需要更有效的治疗方案' : 'Limited efficacy, need for more effective treatments',
      ],
    },
    {
      id: 'dme',
      name: language === 'zh' ? '糖尿病黄斑水肿' : 'Diabetic Macular Edema',
      shortName: 'DME',
      englishName: t.diseases.dme.englishName,
      icon: AlertCircle,
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      stats: {
        globalPatients: language === 'zh' ? '2000万+' : '20M+',
        globalPatients2020: language === 'zh' ? '全球超过2000万患者' : 'Over 20M patients globally',
        projectedPatients: language === 'zh' ? '5.29亿' : '529M',
        projectedYear: language === 'zh' ? '2021年全球糖尿病患者5.29亿' : '529M diabetes patients globally in 2021',
        blindnessRate: language === 'zh' ? '4-13%' : '4-13%',
        blindnessDesc: language === 'zh' ? '2型糖尿病患者中DME患病率' : 'DME prevalence in Type 2 diabetes patients',
        marketSize: language === 'zh' ? '持续增长' : 'Growing',
        marketDesc: language === 'zh' ? '随糖尿病患病率增长而扩大' : 'Expanding with diabetes prevalence',
      },
      description: t.diseases.dme.desc,
      currentTreatment: [
        language === 'zh' ? '抗VEGF药物玻璃体腔注射（一线治疗）' : 'Anti-VEGF intravitreal injection (first-line)',
        language === 'zh' ? '玻璃体腔皮质类固醇植入物' : 'Intravitreal corticosteroid implants',
        language === 'zh' ? '激素治疗有眼压升高等副作用' : 'Hormone therapy has side effects like increased IOP',
      ],
      unmetNeeds: [
        language === 'zh' ? '部分患者对抗VEGF治疗反应不佳' : 'Some patients respond poorly to anti-VEGF therapy',
        language === 'zh' ? '激素治疗有青光眼风险等副作用' : 'Hormone therapy carries risks like glaucoma',
        language === 'zh' ? '需要更安全有效的治疗选择' : 'Need for safer and more effective treatment options',
      ],
    },
  ];

  const activeDiseaseData = diseases.find(d => d.id === activeDisease);

  return (
    <section id="diseases" className="section-padding bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-4">
            {t.diseases.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.diseases.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.diseases.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {diseases.map((disease) => (
            <button
              key={disease.id}
              onClick={() => setActiveDisease(disease.id)}
              className={`px-5 py-3 rounded-xl font-medium transition-all ${
                activeDisease === disease.id
                  ? 'bg-teal-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {disease.shortName}
            </button>
          ))}
        </div>

        {activeDiseaseData && (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div
                className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${activeDiseaseData.color} border ${activeDiseaseData.borderColor}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                    <activeDiseaseData.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {activeDiseaseData.name}
                    </h3>
                    <p className="text-gray-400">{activeDiseaseData.englishName}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{activeDiseaseData.description}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <Users size={24} className="text-teal-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{activeDiseaseData.stats.globalPatients}</div>
                  <div className="text-xs text-gray-500">{activeDiseaseData.stats.globalPatients2020}</div>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <TrendingUp size={24} className="text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{activeDiseaseData.stats.projectedPatients}</div>
                  <div className="text-xs text-gray-500">{activeDiseaseData.stats.projectedYear}</div>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <AlertCircle size={24} className="text-amber-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{activeDiseaseData.stats.blindnessRate}</div>
                  <div className="text-xs text-gray-500">{activeDiseaseData.stats.blindnessDesc}</div>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <Pill size={24} className="text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{activeDiseaseData.stats.marketSize}</div>
                  <div className="text-xs text-gray-500">{activeDiseaseData.stats.marketDesc}</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Pill size={20} className="text-teal-400" />
                    {t.diseases.wamd.treatmentTitle}
                  </h4>
                  <ul className="space-y-2">
                    {activeDiseaseData.currentTreatment.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <AlertCircle size={20} className="text-amber-400" />
                    {t.diseases.wamd.unmetTitle}
                  </h4>
                  <ul className="space-y-2">
                    {activeDiseaseData.unmetNeeds.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">
                  {language === 'zh' ? '相关疾病' : 'Related Diseases'}
                </h4>
                <div className="space-y-3">
                  {diseases.map((disease) => (
                    <button
                      key={disease.id}
                      onClick={() => setActiveDisease(disease.id)}
                      className={`w-full p-3 rounded-lg text-left transition-all ${
                        activeDisease === disease.id
                          ? 'bg-teal-500/20 border border-teal-500/30'
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="font-medium text-white">{disease.shortName}</div>
                      <div className="text-xs text-gray-500">{disease.englishName}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">{t.diseases.solution.title}</h4>
                <p className="text-sm text-gray-400 mb-4">
                  {t.diseases.solution.desc}
                </p>
                <a
                  href="#pipeline"
                  className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-medium"
                >
                  {t.diseases.solution.cta}
                  <span className="text-lg">→</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
