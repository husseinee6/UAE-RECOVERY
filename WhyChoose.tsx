import { useLanguage } from '../App';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const { lang, t } = useLanguage();
  const phoneNumber = '+971507245242';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className={lang === 'ar' ? 'lg:col-span-2 lg:text-right' : ''}>
            {/* Logo */}
            <div className={`flex items-center gap-3 mb-6 ${lang === 'ar' ? 'lg:justify-end' : ''}`}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">RC</span>
              </div>
              <div>
                <span className="font-bold text-xl">Recovery Car</span>
                <span className="block text-sm text-blue-400">
                  {lang === 'en' ? 'UAE Services' : 'خدمات الإمارات'}
                </span>
              </div>
            </div>

            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              {t('footer.description')}
            </p>

            {/* Social Links */}
            <div className={`flex gap-4 ${lang === 'ar' ? 'lg:justify-end' : ''}`}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {['home', 'services', 'about', 'coverage', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    <span>{t(`nav.${item}`)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t('footer.ourServices')}</h3>
            <ul className="space-y-3">
              {['towing', 'recovery', 'roadside', 'accident', 'transport'].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span>{t(`services.${service}.title`)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">{t('footer.contactInfo')}</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Phone size={18} />
                  </div>
                  <span>{phoneNumber}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <span>{lang === 'en' ? 'info@recoverycar.ae' : 'info@recoverycar.ae'}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <span>{lang === 'en' ? 'United Arab Emirates' : 'الإمارات العربية المتحدة'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              {lang === 'en' ? '©' : '©'} {currentYear} Recovery Car UAE. {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">
                {lang === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {lang === 'en' ? 'Terms of Service' : 'شروط الخدمة'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Add missing whatsappLink reference
const whatsappLink = 'https://wa.me/971507245242';

export default Footer;
