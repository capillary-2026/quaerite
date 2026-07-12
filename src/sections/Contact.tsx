import { MapPin, Mail, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const INFO = [
  {
    icon: <Building className="w-5 h-5 text-[#2AB2E3]" />,
    label: 'Headquarters',
    value: 'Quaerite Biopharm Research',
    sub: 'Beijing, China',
  },
  {
    icon: <MapPin className="w-5 h-5 text-[#2AB2E3]" />,
    label: 'R&D Center',
    value: 'Zhongguancun Life Science Park',
    sub: 'Changping District, Beijing',
  },
  {
    icon: <Mail className="w-5 h-5 text-[#2AB2E3]" />,
    label: 'General Inquiries',
    value: 'info@quaerite.com',
    sub: 'Business hours: Mon–Fri 9:00–18:00 CST',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-16">
          <p className="text-sm font-semibold tracking-widest text-[#2AB2E3] uppercase mb-3">Contact</p>
          <h2 className="text-4xl font-bold text-[#0E204C] mb-5">Get in Touch</h2>
          <p className="text-slate-600 max-w-2xl leading-relaxed">
            Whether you are a potential partner, investor, patient organization, or member of the press,
            we welcome your inquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info column */}
          <div className="reveal lg:col-span-2 space-y-6">
            {INFO.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#EAF8FD] flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">{item.label}</p>
                  <p className="text-sm font-semibold text-[#0E204C]">{item.value}</p>
                  <p className="text-xs text-slate-400">{item.sub}</p>
                </div>
              </div>
            ))}

            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Partnerships & Licensing</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                For business development and out-licensing inquiries, please contact
                {' '}<a href="mailto:bd@quaerite.com" className="text-[#2AB2E3] hover:underline font-medium">bd@quaerite.com</a>.
              </p>
            </div>
          </div>

          {/* Form column */}
          <div className="reveal lg:col-span-3">
            <form
              className="bg-slate-50 border border-slate-100 rounded-2xl p-8 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="first" className="text-xs text-slate-500 font-semibold uppercase tracking-wide">First Name</Label>
                  <Input id="first" placeholder="Jane" className="bg-white" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="last" className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Last Name</Label>
                  <Input id="last" placeholder="Smith" className="bg-white" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Email Address</Label>
                <Input id="email" type="email" placeholder="jane@example.com" className="bg-white" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="org" className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Organization</Label>
                <Input id="org" placeholder="Company / Institution" className="bg-white" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="msg" className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Message</Label>
                <Textarea id="msg" placeholder="How can we help you?" className="bg-white min-h-[120px]" />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#0E204C] hover:bg-[#162d6b] text-white font-semibold py-2.5"
              >
                Send Message
              </Button>
              <p className="text-[11px] text-center text-slate-400">We typically respond within 2 business days.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
