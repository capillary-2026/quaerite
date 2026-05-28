import { User } from 'lucide-react';

const TEAM = [
  { abbr: 'CEO', title: 'Chief Executive Officer',  bio: 'Leadership profile coming soon. Our CEO brings deep expertise in biopharmaceutical company building and global clinical development.' },
  { abbr: 'CSO', title: 'Chief Scientific Officer',  bio: 'Scientific leadership profile coming soon. Our CSO leads protein engineering strategy and our proprietary OcuHLE-X® platform.' },
  { abbr: 'CMO', title: 'Chief Medical Officer',     bio: 'Clinical leadership profile coming soon. Our CMO oversees all clinical program strategy, medical affairs, and regulatory interactions.' },
  { abbr: 'CFO', title: 'Chief Financial Officer',   bio: 'Financial leadership profile coming soon. Our CFO manages corporate finance, business development, and investor relations.' },
];

export default function Team() {
  return (
    <section id="team" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="reveal mb-14">
          <p className="text-[#2AB2E3] text-xs font-bold tracking-[0.18em] uppercase mb-3">Leadership</p>
          <h2 className="text-4xl lg:text-[2.75rem] font-bold text-[#0E204C] mb-4">Our Team</h2>
          <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
            Guided by seasoned leaders in ophthalmology, protein engineering, and clinical development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <div
              key={member.abbr}
              className="reveal bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-md hover:border-[#2AB2E3]/30 transition-all"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Avatar placeholder */}
              <div className="h-48 bg-slate-100 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center">
                  <User size={34} className="text-slate-400" />
                </div>
              </div>
              <div className="p-5">
                <span className="inline-block px-2 py-0.5 text-xs font-bold text-[#2AB2E3] bg-[#2AB2E3]/10 rounded mb-2">
                  {member.abbr}
                </span>
                <h3 className="text-[#0E204C] font-semibold text-sm mb-2">{member.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
