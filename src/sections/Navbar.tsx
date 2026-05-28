import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'About',        href: '#about' },
  { label: 'Technology',   href: '#platform' },
  { label: 'Pipeline',     href: '#pipeline' },
  { label: 'Diseases',     href: '#diseases' },
  { label: 'Publications', href: '#publications' },
  { label: 'Team',         href: '#team' },
  { label: 'News',         href: '#news' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white border-b border-slate-200 shadow-sm' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
            <span className="w-7 h-7 rounded bg-[#2AB2E3] flex items-center justify-center text-white font-bold text-xs">
              Q
            </span>
            <span className={`font-bold text-sm tracking-[0.18em] uppercase transition-colors ${
              scrolled ? 'text-[#0E204C]' : 'text-white'
            }`}>
              Quaerite
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center">
            {NAV_ITEMS.map(item => (
              <a
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
                  scrolled
                    ? 'text-slate-600 hover:text-[#0E204C] hover:bg-slate-50'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className={`px-5 py-2.5 text-sm font-semibold rounded transition-all ${
                scrolled
                  ? 'bg-[#0E204C] text-white hover:bg-[#152C5F]'
                  : 'border border-white/30 text-white hover:bg-white/10'
              }`}
            >
              Partner With Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-1.5 rounded transition-colors ${
              scrolled ? 'text-[#0E204C]' : 'text-white'
            }`}
            aria-label="Toggle navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-4 py-3 space-y-0.5">
            {NAV_ITEMS.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-slate-700 hover:text-[#0E204C] hover:bg-slate-50 rounded text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block mt-2 px-3 py-2.5 text-center text-white bg-[#0E204C] rounded text-sm font-semibold"
            >
              Partner With Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
