import { useLanguage } from '../App';
import { Zap, Clock, Users, DollarSign, Truck, Shield } from 'lucide-react';

const WhyChoose = () => {
  const { lang, t } = useLanguage();

  const features = [
    {
      icon: Zap,
      color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
      title: t('why.fast.title'),
      description: t('why.fast.desc'),
    },
    {
      icon: Clock,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      title: t('why.available.title'),
      description: t('why.available.desc'),
    },
    {
      icon: Users,
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      title: t('why.professional.title'),
      description: t('why.professional.desc'),
    },
    {
      icon: DollarSign,
      color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
      title: t('why.pricing.title'),
      description: t('why.pricing.desc'),
    },
    {
      icon: Truck,
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      title: t('why.equipment.title'),
      description: t('why.equipment.desc'),
    },
    {
      icon: Shield,
      color: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
      title: t('why.insured.title'),
      description: t('why.insured.desc'),
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {lang === 'en' ? 'Why Us' : 'لماذا نحن'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('why.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('why.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '10+', label: lang === 'en' ? 'Years Experience' : 'سنوات من الخبرة' },
              { number: '10,000+', label: lang === 'en' ? 'Happy Customers' : 'عميل سعيد' },
              { number: '50+', label: lang === 'en' ? 'Service Vehicles' : 'مركبة خدمة' },
              { number: '100%', label: lang === 'en' ? 'Customer Satisfaction' : 'رضا العملاء' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
