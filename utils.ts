import { useLanguage } from '../App';
import {
  Truck,
  Car,
  Wrench,
  AlertTriangle,
  Globe,
  Trash2,
} from 'lucide-react';

const Services = () => {
  const { lang, t } = useLanguage();

  const services = [
    {
      icon: Truck,
      key: 'towing',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      title: t('services.towing.title'),
      description: t('services.towing.desc'),
    },
    {
      icon: Car,
      key: 'recovery',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      title: t('services.recovery.title'),
      description: t('services.recovery.desc'),
    },
    {
      icon: Wrench,
      key: 'roadside',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      title: t('services.roadside.title'),
      description: t('services.roadside.desc'),
    },
    {
      icon: AlertTriangle,
      key: 'accident',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      title: t('services.accident.title'),
      description: t('services.accident.desc'),
    },
    {
      icon: Globe,
      key: 'transport',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      title: t('services.transport.title'),
      description: t('services.transport.desc'),
    },
    {
      icon: Trash2,
      key: 'junk',
      color: 'from-gray-600 to-gray-700',
      bgColor: 'bg-gray-50 dark:bg-gray-900/20',
      title: t('services.junk.title'),
      description: t('services.junk.desc'),
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {lang === 'en' ? 'What We Offer' : 'ما نقدمه'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.key}
              className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon
                  className={`w-8 h-8 bg-gradient-to-br ${service.color} bg-clip-text`}
                  style={{ color: service.color.includes('blue') ? '#3b82f6' : service.color.includes('green') ? '#22c55e' : service.color.includes('orange') ? '#f97316' : service.color.includes('red') ? '#ef4444' : service.color.includes('purple') ? '#a855f7' : '#6b7280' }}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mt-4 group-hover:gap-3 transition-all ${
                  lang === 'ar' ? 'flex-row-reverse' : ''
                }`}
              >
                <span>{lang === 'en' ? 'Learn More' : 'اعرف المزيد'}</span>
                <svg
                  className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
