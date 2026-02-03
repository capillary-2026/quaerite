import { Linkedin, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  const footerLinks = {
    company: [
      { label: t.nav.about, href: '#about' },
      { label: language === 'zh' ? '研发团队' : 'R&D Team', href: '#' },
      { label: language === 'zh' ? '企业文化' : 'Culture', href: '#' },
      { label: language === 'zh' ? '加入我们' : 'Careers', href: '#' },
    ],
    research: [
      { label: t.nav.pipeline, href: '#pipeline' },
      { label: t.nav.platform, href: '#platform' },
      { label: t.nav.publications, href: '#publications' },
      { label: language === 'zh' ? '临床试验' : 'Clinical Trials', href: '#' },
    ],
    news: [
      { label: t.nav.news, href: '#news' },
      { label: language === 'zh' ? '行业动态' : 'Industry News', href: '#news' },
      { label: language === 'zh' ? '媒体中心' : 'Media Center', href: '#' },
      { label: language === 'zh' ? '活动预告' : 'Events', href: '#' },
    ],
    contact: [
      { label: t.nav.contact, href: '#contact' },
      { label: t.nav.investor, href: '#' },
      { label: language === 'zh' ? '合作伙伴' : 'Partners', href: '#' },
      { label: language === 'zh' ? '不良反应报告' : 'Adverse Event Reporting', href: '#' },
    ],
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-6 gap-10">
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                  <span className="text-white font-bold">Q</span>
                </div>
                <span className="text-white font-semibold text-xl">QUAERITE</span>
              </a>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                {t.footer.desc}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/寻济生物/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="mailto:info@quaerite.com"
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.links.company}</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.links.research}</h4>
              <ul className="space-y-2">
                {footerLinks.research.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.links.news}</h4>
              <ul className="space-y-2">
                {footerLinks.news.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.links.contact}</h4>
              <ul className="space-y-2">
                {footerLinks.contact.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              {t.footer.copyright}
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                {t.footer.privacy}
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                {t.footer.terms}
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
                {t.footer.sitemap}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
