import { useLanguage } from '../App';
import { MapPin, Phone } from 'lucide-react';

const Coverage = () => {
  const { lang, t } = useLanguage();
  const phoneNumber = '+971507245242';

  const emirates = [
    { key: 'dubai', name: t('coverage.dubai'), available: true },
    { key: 'abudhabi', name: t('coverage.abudhabi'), available: true },
    { key: 'sharjah', name: t('coverage.sharjah'), available: true },
    { key: 'ajman', name: t('coverage.ajman'), available: true },
    { key: 'fujairah', name: t('coverage.fujairah'), available: true },
    { key: 'rak', name: t('coverage.rak'), available: true },
    { key: 'umaqran', name: t('coverage.umaqran'), available: true },
  ];

  return (
    <section id="coverage" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            {lang === 'en' ? 'Where We Serve' : 'أين نخدم'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('coverage.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('coverage.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Area - Visual Representation */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white">
              {/* UAE Map Representation */}
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Simplified UAE Shape */}
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {/* UAE Map Outline */}
                  <path
                    d="M100 20 L140 30 L170 50 L180 80 L160 120 L130 150 L100 170 L70 160 L40 140 L30 100 L40 60 L70 30 Z"
                    fill="rgba(255,255,255,0.1)"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="2"
                  />

                  {/* Emirates Markers */}
                  {/* Abu Dhabi */}
                  <circle cx="100" cy="120" r="8" fill="#22c55e" className="animate-pulse">
                    <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text x="100" y="145" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">ABU DHABI</text>

                  {/* Dubai */}
                  <circle cx="120" cy="90" r="8" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: '0.3s' }}>
                    <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" begin="0.3s" />
                  </circle>
                  <text x="120" y="105" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">DUBAI</text>

                  {/* Sharjah */}
                  <circle cx="115" cy="70" r="6" fill="#3b82f6" className="animate-pulse" style={{ animationDelay: '0.6s' }}>
                    <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" begin="0.6s" />
                  </circle>
                  <text x="115" y="55" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold">SHARJAH</text>

                  {/* Other Emirates */}
                  <circle cx="95" cy="60" r="4" fill="#10b981" />
                  <text x="95" y="48" textAnchor="middle" fill="white" fontSize="6">AJMAN</text>

                  <circle cx="85" cy="50" r="4" fill="#10b981" />
                  <text x="85" y="38" textAnchor="middle" fill="white" fontSize="6">UAQ</text>

                  <circle cx="60" cy="55" r="4" fill="#10b981" />
                  <text x="45" y="55" textAnchor="middle" fill="white" fontSize="6">RAK</text>

                  <circle cx="50" cy="100" r="4" fill="#10b981" />
                  <text x="35" y="100" textAnchor="middle" fill="white" fontSize="6">FUJ</text>

                  {/* Connection Lines */}
                  <line x1="100" y1="120" x2="120" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4" />
                  <line x1="120" y1="90" x2="115" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4" />
                </svg>
              </div>

              {/* Legend */}
              <div className="flex justify-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-400 rounded-full" />
                  <span className="text-sm text-blue-100">{lang === 'en' ? 'Main Hubs' : 'المراكز الرئيسية'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-400 rounded-full" />
                  <span className="text-sm text-blue-100">{lang === 'en' ? 'Coverage Areas' : 'مناطق التغطية'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Emirates List */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {emirates.map((emirate, index) => (
                <div
                  key={emirate.key}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 transition-colors"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index < 3 ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-green-100 dark:bg-green-900/30'
                    }`}
                  >
                    <MapPin
                      className={`w-5 h-5 ${
                        index < 3 ? 'text-blue-600 dark:text-blue-400' : 'text-green-600 dark:text-green-400'
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {emirate.name}
                    </span>
                    <span className="text-sm text-green-600 dark:text-green-400 block">
                      {lang === 'en' ? '• Available' : '• متاح'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {lang === 'en' ? 'Need help outside these areas?' : 'تحتاج مساعدة خارج هذه المناطق؟'}
                  </p>
                  <a
                    href={`tel:${phoneNumber}`}
                    className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
