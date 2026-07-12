import { Linkedin, Mail } from 'lucide-react';

const LINKS = [
  {
    heading: 'Company',
    items: [
      { label: 'About Us', href: '#about' },
      { label: 'Team', href: '#team' },
      { label: 'News', href: '#news' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    heading: 'Research',
    items: [
      { label: 'Technology', href: '#technology' },
      { label: 'Pipeline', href: '#pipeline' },
      { label: 'Disease Areas', href: '#diseases' },
      { label: 'Publications', href: '#publications' },
    ],
  },
  {
    heading: 'Investors',
    items: [
      { label: 'Investor Relations', href: '#' },
      { label: 'Corporate Governance', href: '#' },
      { label: 'SEC Filings', href: '#' },
      { label: 'Events & Presentations', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0E204C] text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold tracking-tight">Quaerite</span>
              <span className="text-xs text-white/40 border border-white/20 rounded px-1.5 py-0.5">Biopharm</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
              Clinical-stage gene therapy company dedicated to developing durable, single-treatment
              solutions for blinding retinal diseases.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#2AB2E3] hover:text-[#2AB2E3] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@quaerite.com"
                aria-label="Email"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-[#2AB2E3] hover:text-[#2AB2E3] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link groups */}
          {LINKS.map((group) => (
            <div key={group.heading}>
              <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-4">{group.heading}</p>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Quaerite Biopharm Research. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Use</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
