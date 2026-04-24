import { useState, createContext, useContext, ReactNode } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Language Context
type Language = 'en' | 'ar';
const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}>({
  lang: 'en',
  setLang: () => {},
  t: () => '',
  dir: 'ltr'
});

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.coverage': 'Coverage',
    'nav.contact': 'Contact',
    'nav.getQuote': 'Get Quote',

    // Hero
    'hero.title': '24/7 Car Recovery & Towing Services',
    'hero.subtitle': 'Fast, Reliable Vehicle Recovery Across All UAE',
    'hero.description': 'Professional towing and car recovery services available round the clock. We serve all emirates with experienced teams and modern equipment.',
    'hero.cta': 'Call Now',
    'hero.whatsapp': 'WhatsApp Us',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive Vehicle Recovery Solutions',
    'services.towing.title': 'Towing Service',
    'services.towing.desc': 'Safe and secure towing for all vehicle types using modern flatbed and hook trucks.',
    'services.recovery.title': 'Car Recovery',
    'services.recovery.desc': 'Emergency vehicle recovery from accidents, breakdowns, or difficult locations.',
    'services.roadside.title': 'Roadside Assistance',
    'services.roadside.desc': 'Battery jump-start, tire change, fuel delivery, and lockout services.',
    'services.accident.title': 'Accident Recovery',
    'services.accident.desc': 'Professional accident scene clearing and vehicle transport to repair facilities.',
    'services.transport.title': 'Vehicle Transport',
    'services.transport.desc': 'Long-distance vehicle transport between any UAE cities.',
    'services.junk.title': 'Junk Car Removal',
    'services.junk.desc': 'Free junk car pickup and environmentally responsible disposal.',

    // Why Choose Us
    'why.title': 'Why Choose Us',
    'why.subtitle': 'Your Trusted Partner in Vehicle Recovery',
    'why.fast.title': 'Fast Response',
    'why.fast.desc': 'Average response time under 30 minutes across all UAE locations.',
    'why.available.title': '24/7 Availability',
    'why.available.desc': 'Round-the-clock service, 365 days a year, including holidays.',
    'why.professional.title': 'Professional Team',
    'why.professional.desc': 'Trained operators with years of experience in vehicle recovery.',
    'why.pricing.title': 'Fair Pricing',
    'why.pricing.desc': 'Transparent pricing with no hidden fees or surprises.',
    'why.equipment.title': 'Modern Equipment',
    'why.equipment.desc': 'Latest recovery equipment and well-maintained fleet of tow trucks.',
    'why.insured.title': 'Fully Insured',
    'why.insured.desc': 'Complete insurance coverage for your peace of mind.',

    // Coverage
    'coverage.title': 'Coverage Area',
    'coverage.subtitle': 'Serving All Emirates Across UAE',
    'coverage.description': 'We provide comprehensive car recovery and towing services throughout the United Arab Emirates. Our strategic locations ensure quick response times no matter where you are.',
    'coverage.dubai': 'Dubai',
    'coverage.abudhabi': 'Abu Dhabi',
    'coverage.sharjah': 'Sharjah',
    'coverage.ajman': 'Ajman',
    'coverage.fujairah': 'Fujairah',
    'coverage.rak': 'Ras Al Khaimah',
    'coverage.umaqran': 'Umm Al Quwain',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': "We're Here to Help 24/7",
    'contact.name': 'Your Name',
    'contact.phone': 'Phone Number',
    'contact.email': 'Email Address',
    'contact.service': 'Select Service',
    'contact.location': 'Your Location',
    'contact.message': 'Additional Details',
    'contact.submit': 'Send Request',
    'contact.call': 'Call Us Directly',
    'contact.whatsapp': 'WhatsApp',
    'contact.hours': 'Working Hours',
    'contact.hoursValue': '24 Hours / 7 Days',

    // Footer
    'footer.description': 'Leading car recovery and towing service provider in UAE. Available 24/7 for all your vehicle recovery needs.',
    'footer.quickLinks': 'Quick Links',
    'footer.ourServices': 'Our Services',
    'footer.contactInfo': 'Contact Info',
    'footer.copyright': 'All Rights Reserved.',

    // Form Options
    'form.selectService': 'Select a service',
    'form.towing': 'Towing Service',
    'form.recovery': 'Car Recovery',
    'form.roadside': 'Roadside Assistance',
    'form.accident': 'Accident Recovery',
    'form.transport': 'Vehicle Transport',
    'form.other': 'Other',

    // Placeholders
    'placeholder.name': 'Enter your full name',
    'placeholder.phone': 'Enter your phone number',
    'placeholder.email': 'Enter your email',
    'placeholder.location': 'Where are you located?',
    'placeholder.message': 'Describe your situation...',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.about': 'من نحن',
    'nav.coverage': 'تغطية المناطق',
    'nav.contact': 'اتصل بنا',
    'nav.getQuote': 'احصل على عرض سعر',

    // Hero
    'hero.title': 'خدمات إنقاذ السيارات و السحب على مدار الساعة',
    'hero.subtitle': 'إنقاذ سريع وموثوق للمركبات في جميع أنحاء الإمارات',
    'hero.description': 'خدمات السحب وإنقاذ السيارات المهنية متاحة على مدار الساعة. نخدم جميع الإمارات بفرق ذات خبرة ومعدات حديثة.',
    'hero.cta': 'اتصل الآن',
    'hero.whatsapp': 'تواصل عبر واتساب',

    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول شاملة لإنقاذ المركبات',
    'services.towing.title': 'خدمة السحب',
    'services.towing.desc': 'سحب آمن لجميع أنواع المركبات باستخدام شاحنات السحب المسطحة والخطافية الحديثة.',
    'services.recovery.title': 'إنقاذ السيارات',
    'services.recovery.desc': 'إنقاذ طوارئ للمركبات من الحوادث أو الأعطال أو المواقع الصعبة.',
    'services.roadside.title': 'المساعدة على الطريق',
    'services.roadside.desc': 'بدء البطارية، تغيير الإطارات، توصيل الوقود، وخدمات فتح الأقفال.',
    'services.accident.title': 'إنقاذ الحوادث',
    'services.accident.desc': 'تنظيف مواقع الحوادث ونقل المركبات إلى مرافق الإصلاح.',
    'services.transport.title': 'نقل المركبات',
    'services.transport.desc': 'نقل المركبات لمسافات طويلة بين أي مدن في الإمارات.',
    'services.junk.title': 'إزالة السيارات التالفة',
    'services.junk.desc': 'استلام مجاني للسيارات التالفة والتخلص منها بطريقة صديقة للبيئة.',

    // Why Choose Us
    'why.title': 'لماذا تختارنا',
    'why.subtitle': 'شريكك الموثوق في إنقاذ المركبات',
    'why.fast.title': 'استجابة سريعة',
    'why.fast.desc': 'متوسط وقت الاستجابة أقل من 30 دقيقة في جميع أنحاء الإمارات.',
    'why.available.title': 'متاح على مدار الساعة',
    'why.available.desc': 'خدمة على مدار الساعة، 365 يومًا في السنة، بما في ذلك العطلات.',
    'why.professional.title': 'فريق محترف',
    'why.professional.desc': 'مشغلون مدربون مع سنوات من الخبرة في إنقاذ المركبات.',
    'why.pricing.title': 'أسعار عادلة',
    'why.pricing.desc': 'تسعير شفاف بدون رسوم خفية أو مفاجآت.',
    'why.equipment.title': 'معدات حديثة',
    'why.equipment.desc': 'أحدث معدات الإنقاذ وأسطول جيد الصيانة من شاحنات السحب.',
    'why.insured.title': 'مؤمن عليه بالكامل',
    'why.insured.desc': 'تغطية تأمينية كاملة لراحة بالك.',

    // Coverage
    'coverage.title': 'منطقة التغطية',
    'coverage.subtitle': 'نخدم جميع إمارات الدولة',
    'coverage.description': 'نقدم خدمات شاملة لإنقاذ السيارات والسحب في جميع أنحاء الإمارات العربية المتحدة. تضمن مواقعنا الاستراتيجية أوقات استجابة سريعة أينما كنت.',
    'coverage.dubai': 'دبي',
    'coverage.abudhabi': 'أبوظبي',
    'coverage.sharjah': 'الشارقة',
    'coverage.ajman': 'عجمان',
    'coverage.fujairah': 'الفجيرة',
    'coverage.rak': 'رأس الخيمة',
    'coverage.umaqran': 'أم القيوين',

    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'نحن هنا لمساعدتك على مدار الساعة',
    'contact.name': 'اسمك',
    'contact.phone': 'رقم الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.service': 'اختر الخدمة',
    'contact.location': 'موقعك',
    'contact.message': 'تفاصيل إضافية',
    'contact.submit': 'إرسال الطلب',
    'contact.call': 'اتصل بنا مباشرة',
    'contact.whatsapp': 'واتساب',
    'contact.hours': 'ساعات العمل',
    'contact.hoursValue': '24 ساعة / 7 أيام',

    // Footer
    'footer.description': 'مزود رائد لخدمات إنقاذ السيارات والسحب في الإمارات. متاح على مدار الساعة لجميع احتياجات إنقاذ المركبات الخاصة بك.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.ourServices': 'خدماتنا',
    'footer.contactInfo': 'معلومات الاتصال',
    'footer.copyright': 'جميع الحقوق محفوظة.',

    // Form Options
    'form.selectService': 'اختر خدمة',
    'form.towing': 'خدمة السحب',
    'form.recovery': 'إنقاذ السيارات',
    'form.roadside': 'المساعدة على الطريق',
    'form.accident': 'إنقاذ الحوادث',
    'form.transport': 'نقل المركبات',
    'form.other': 'أخرى',

    // Placeholders
    'placeholder.name': 'أدخل اسمك الكامل',
    'placeholder.phone': 'أدخل رقم هاتفك',
    'placeholder.email': 'أدخل بريدك الإلكتروني',
    'placeholder.location': 'أين أنت موجود؟',
    'placeholder.message': 'صف موقفك...',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  const t = (key: string) => translations[lang][key] || key;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      <div dir={dir} lang={lang} className={lang === 'ar' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
export type { Language };

// Main App Component
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WhyChoose />
      <Coverage />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
