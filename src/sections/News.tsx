import { useState } from 'react';
import { Calendar, ExternalLink, FileText, ChevronRight, Beaker, Landmark } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function News() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(language === 'zh' ? '全部' : 'All');
  const [expandedNews, setExpandedNews] = useState<number | null>(null);

  const newsItems = [
    {
      id: 1,
      title: t.news.articles.article1.title,
      titleEn: t.news.articles.article1.titleEn,
      date: '2026-01-31',
      category: language === 'zh' ? '临床进展' : 'Clinical Progress',
      icon: Beaker,
      color: 'from-teal-500/20 to-cyan-500/20',
      borderColor: 'border-teal-500/30',
      summary: t.news.articles.article1.summary,
      content: t.news.articles.article1.content,
      link: 'https://www.linkedin.com/company/寻济生物/',
      featured: true,
    },
    {
      id: 2,
      title: t.news.articles.article2.title,
      titleEn: t.news.articles.article2.titleEn,
      date: '2026-01-15',
      category: language === 'zh' ? '监管进展' : 'Regulatory',
      icon: Landmark,
      color: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/30',
      summary: t.news.articles.article2.summary,
      content: t.news.articles.article2.content,
      link: 'https://www.linkedin.com/company/寻济生物/',
      featured: true,
    },
  ];

  const categories = language === 'zh' 
    ? ['全部', '临床进展', '监管进展', '公司新闻', '学术会议']
    : ['All', 'Clinical Progress', 'Regulatory', 'Company News', 'Conferences'];

  const filteredNews = activeCategory === (language === 'zh' ? '全部' : 'All')
    ? newsItems
    : newsItems.filter(n => n.category === activeCategory);

  const milestones = language === 'zh' ? [
    { date: '2026-01-31', title: 'QBR202 Phase I 临床试验启动会召开', status: 'completed' },
    { date: '2026-01-15', title: '获得NMPA IND批准', status: 'completed' },
    { date: '2025-12-20', title: '获得FDA IND批准', status: 'completed' },
    { date: '2026-05-??', title: 'ARVO年会海报展示', status: 'upcoming' },
  ] : [
    { date: '2026-01-31', title: 'QBR202 Phase I Investigators\' Meeting', status: 'completed' },
    { date: '2026-01-15', title: 'NMPA IND Clearance', status: 'completed' },
    { date: '2025-12-20', title: 'FDA IND Clearance', status: 'completed' },
    { date: '2026-05-??', title: 'ARVO Annual Meeting Poster', status: 'upcoming' },
  ];

  return (
    <section id="news" className="section-padding bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-4">
            {t.news.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.news.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.news.subtitle}
          </p>
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

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {filteredNews.map((news) => (
            <div
              key={news.id}
              className={`group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${news.color} border ${news.borderColor} overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <news.icon size={20} className="text-white" />
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded-full">
                      {news.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar size={14} />
                    {news.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 italic">
                  {news.titleEn}
                </p>

                <p className="text-gray-300 mb-6 line-clamp-3">
                  {news.summary}
                </p>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setExpandedNews(expandedNews === news.id ? null : news.id)}
                    className="flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <FileText size={16} />
                    {expandedNews === news.id ? t.news.collapse : t.news.readMore}
                  </button>
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} />
                    {t.news.linkedin}
                  </a>
                </div>

                {expandedNews === news.id && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {news.content}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-lg font-semibold text-white mb-6">{t.news.timeline}</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 to-cyan-500" />
            
            <div className="space-y-6">
              {milestones.map((item, index) => (
                <div key={index} className="relative flex items-start gap-6 pl-12">
                  <div className={`absolute left-2 w-5 h-5 rounded-full border-2 transform -translate-x-1/2 ${
                    item.status === 'completed'
                      ? 'bg-teal-500 border-teal-500'
                      : 'bg-slate-900 border-gray-500'
                  }`}>
                    {item.status === 'completed' && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <span className={`text-sm ${item.status === 'completed' ? 'text-teal-400' : 'text-gray-500'}`}>
                      {item.date}
                    </span>
                    <p className={`font-medium ${item.status === 'completed' ? 'text-white' : 'text-gray-400'}`}>
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.linkedin.com/company/寻济生物/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/10 transition-all"
          >
            {t.news.viewMore}
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
