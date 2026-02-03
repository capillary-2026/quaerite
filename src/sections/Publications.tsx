import { useState, useEffect } from 'react';
import { BookOpen, ExternalLink, FileText, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Publications() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');

  // Reset category when language changes
  useEffect(() => {
    setActiveCategory(language === 'zh' ? '全部' : 'All');
  }, [language]);

  const publications = [
    {
      id: 1,
      title: 'Water Resistant Drug Polymer Interaction Contributes to the Formation of Nano Species during the Dissolution of Felodipine Amorphous Solid Dispersions',
      authors: language === 'zh' ? '公司研究团队' : 'Quaerite Research Team',
      journal: language === 'zh' ? '国际药剂学杂志' : 'International Journal of Pharmaceutics',
      year: '2024',
      category: language === 'zh' ? '制剂技术' : 'Formulation',
      description: language === 'zh' 
        ? '研究药物-聚合物相互作用在无定形固体分散体溶解过程中纳米物种形成的机制'
        : 'Study of drug-polymer interaction mechanisms in nano species formation during dissolution of amorphous solid dispersions',
      link: '#',
      type: 'pdf',
    },
    {
      id: 2,
      title: 'Polymorphic nanobody crystals as long-acting intravitreal therapy for wet age-related macular degeneration',
      authors: language === 'zh' ? '公司研究团队' : 'Quaerite Research Team',
      journal: 'Nature Communications',
      year: '2024',
      category: language === 'zh' ? '纳米抗体' : 'Nanobody',
      description: language === 'zh' 
        ? '多态性纳米抗体晶体作为湿性年龄相关性黄斑变性的长效玻璃体腔治疗'
        : 'Polymorphic nanobody crystals as long-acting intravitreal therapy for wet AMD',
      link: 'https://pubmed.ncbi.nlm.nih.gov/38023710/',
      type: 'link',
    },
    {
      id: 3,
      title: 'A bioengineered anti-VEGF protein with high affinity and high concentration for intravitreal treatment of wet Age-related Macular Degeneration',
      authors: 'Huang et al.',
      journal: 'Bioengineering & Translational Medicine',
      year: '2023',
      category: language === 'zh' ? '蛋白工程' : 'Protein Engineering',
      description: language === 'zh' 
        ? '高亲和力、高浓度的抗VEGF蛋白工程改造用于湿性AMD的玻璃体腔治疗'
        : 'Bioengineered anti-VEGF protein with high affinity and concentration for wet AMD intravitreal treatment',
      link: 'https://aiche.onlinelibrary.wiley.com/doi/full/10.1002/btm2.10632',
      type: 'link',
    },
    {
      id: 4,
      title: 'Supramolecular Self-Assembled Multivalent Anti-VEGF Protein Nanospheres for Prolonged Ocular Therapy',
      authors: 'Tian et al.',
      journal: 'Small',
      year: '2025',
      category: language === 'zh' ? '纳米药物' : 'Nanomedicine',
      description: language === 'zh' 
        ? '超分子自组装多价抗VEGF蛋白纳米球用于延长眼部治疗'
        : 'Supramolecular self-assembled multivalent anti-VEGF protein nanospheres for prolonged ocular therapy',
      link: '#',
      type: 'pdf',
    },
    {
      id: 5,
      title: 'Novel therapeutic strategies for ocular neovascularization: targeting multiple angiogenic pathways',
      authors: language === 'zh' ? '公司研究团队' : 'Quaerite Research Team',
      journal: language === 'zh' ? '国际眼科研究期刊' : 'International Journal of Ophthalmology Research',
      year: '2024',
      category: language === 'zh' ? '治疗策略' : 'Therapeutic Strategy',
      description: language === 'zh' 
        ? '眼部新生血管化的新型治疗策略：靶向多种血管生成通路'
        : 'Novel therapeutic strategies for ocular neovascularization targeting multiple angiogenic pathways',
      link: 'https://pubmed.ncbi.nlm.nih.gov/39894217/',
      type: 'link',
    },
    {
      id: 6,
      title: 'Engineered protein therapeutics for retinal diseases: advances in half-life extension and tissue targeting',
      authors: language === 'zh' ? '公司研究团队' : 'Quaerite Research Team',
      journal: 'Advanced Drug Delivery Reviews',
      year: '2025',
      category: language === 'zh' ? '蛋白治疗' : 'Protein Therapeutics',
      description: language === 'zh' 
        ? '视网膜疾病的工程化蛋白治疗：半衰期延长和组织靶向的进展'
        : 'Engineered protein therapeutics for retinal diseases: advances in half-life extension and tissue targeting',
      link: 'https://pubmed.ncbi.nlm.nih.gov/41316698/',
      type: 'link',
    },
  ];

  const categories = language === 'zh' 
    ? ['全部', '纳米抗体', '蛋白工程', '纳米药物', '制剂技术', '治疗策略', '蛋白治疗']
    : ['All', 'Nanobody', 'Protein Engineering', 'Nanomedicine', 'Formulation', 'Therapeutic Strategy', 'Protein Therapeutics'];

  const allCategory = language === 'zh' ? '全部' : 'All';
  const filteredPublications = activeCategory === allCategory
    ? publications
    : publications.filter(p => p.category === activeCategory);

  return (
    <section id="publications" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-4">
            {t.publications.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.publications.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.publications.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-4xl font-bold text-teal-400 mb-2">6</div>
            <div className="text-sm text-gray-500">{t.publications.stats.papers}</div>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">5</div>
            <div className="text-sm text-gray-500">{t.publications.stats.journals}</div>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
            <div className="text-4xl font-bold text-amber-400 mb-2">3</div>
            <div className="text-sm text-gray-500">{t.publications.stats.fields}</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-teal-600 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPublications.map((pub) => (
            <div
              key={pub.id}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal-500/30 transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 text-xs font-medium bg-teal-500/20 text-teal-400 rounded-full">
                  {pub.category}
                </span>
                <span className="text-sm text-gray-500">{pub.year}</span>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-3 line-clamp-3 group-hover:text-teal-400 transition-colors">
                  {pub.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {pub.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="text-gray-400">{pub.journal}</span>
                  </div>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    {pub.type === 'pdf' ? (
                      <>
                        <FileText size={16} />
                        PDF
                      </>
                    ) : (
                      <>
                        <ExternalLink size={16} />
                        {language === 'zh' ? '查看' : 'View'}
                      </>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/?term=quaerite+biopharm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/10 transition-all"
          >
            <BookOpen size={18} />
            {t.publications.viewMore}
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
