import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t, language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.info.address.title,
      content: language === 'zh' ? '北京市海淀区杏石口路65号' : 'No. 65 Xingshikou Road, Haidian District, Beijing',
      subContent: language === 'zh' ? '益园C区9号楼2层' : '2nd Floor, Building 9, Yiyuan C',
    },
    {
      icon: Phone,
      title: t.contact.info.phone.title,
      content: '+86 10 6994 5859',
      subContent: t.contact.info.phone.time,
    },
    {
      icon: Mail,
      title: t.contact.info.email.title,
      content: 'info@quaerite.com',
      subContent: t.contact.info.email.note,
    },
    {
      icon: Clock,
      title: t.contact.info.hours.title,
      content: t.contact.info.hours.days,
      subContent: t.contact.info.hours.time,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-4">
            {t.contact.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-500/20 flex items-center justify-center mb-4">
                    <item.icon size={24} className="text-teal-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-300">{item.content}</p>
                  <p className="text-sm text-gray-500">{item.subContent}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">{t.contact.location}</h3>
              <div className="aspect-video rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <MapPin size={48} className="text-teal-400 mx-auto mb-3" />
                  <p className="text-white font-medium">
                    {language === 'zh' ? '北京市海淀区' : 'Haidian District, Beijing'}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {language === 'zh' ? '杏石口路65号益园C区9号楼2层' : 'No. 65 Xingshikou Road, Yiyuan C, Building 9, 2F'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-2">{t.contact.form.title}</h3>
            <p className="text-gray-400 mb-6">{t.contact.form.subtitle}</p>

            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-teal-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{t.contact.form.success}</h4>
                <p className="text-gray-400">{t.contact.form.successMsg}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">
                      {t.contact.form.name} <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={language === 'zh' ? '请输入姓名' : 'Enter your name'}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-teal-500 focus:ring-teal-500/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      {t.contact.form.email} <span className="text-red-400">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={language === 'zh' ? '请输入邮箱' : 'Enter your email'}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-teal-500 focus:ring-teal-500/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-300">
                    {t.contact.form.company}
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder={language === 'zh' ? '请输入公司名称（选填）' : 'Company name (optional)'}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-teal-500 focus:ring-teal-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">
                    {t.contact.form.message} <span className="text-red-400">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={language === 'zh' ? '请输入您想咨询的内容...' : 'Enter your message...'}
                    required
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-teal-500 focus:ring-teal-500/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-6 bg-teal-600 hover:bg-teal-500 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  {t.contact.form.send}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  {t.contact.form.privacy}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
