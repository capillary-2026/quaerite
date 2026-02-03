import { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, Globe, Microscope, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Target,
      title: t.about.features.focus.title,
      description: t.about.features.focus.desc,
    },
    {
      icon: Microscope,
      title: t.about.features.expert.title,
      description: t.about.features.expert.desc,
    },
    {
      icon: Globe,
      title: t.about.features.global.title,
      description: t.about.features.global.desc,
    },
  ];

  const stats = [
    { value: 15, suffix: '+', label: t.about.stats.experience },
    { value: 6, suffix: '+', label: t.about.stats.projects },
    { value: 3, suffix: '', label: t.about.stats.platforms },
    { value: 20, suffix: 'M+', label: t.about.stats.patients },
  ];

  return (
    <section id="about" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-4">
            {t.about.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.about.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.about.missionStatement}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed">
                <strong className="text-white">{t.about.companyName}</strong>
                {language === 'zh' ? t.about.companyDesc1 : t.about.companyDesc1}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {language === 'zh' ? t.about.companyDesc2 : t.about.companyDesc2}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
                    <Target size={20} className="text-teal-400" />
                  </div>
                  <h3 className="text-white font-semibold">{t.about.mission.title}</h3>
                </div>
                <p className="text-sm text-gray-400">{t.about.mission.content}</p>
              </div>
              <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <Lightbulb size={20} className="text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold">{t.about.vision.title}</h3>
                </div>
                <p className="text-sm text-gray-400">{t.about.vision.content}</p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20">
              <div className="flex items-center gap-3 mb-3">
                <Award size={20} className="text-teal-400" />
                <h3 className="text-white font-semibold">{t.about.values.title}</h3>
              </div>
              <p className="text-sm text-gray-400">{t.about.values.content}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <div className="text-sm text-gray-500 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-teal-500/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon size={24} className="text-teal-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold text-teal-400">
      {count}
      {suffix}
    </div>
  );
}
