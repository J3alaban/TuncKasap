import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Utensils, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import HeroSlideshow from '@/components/HeroSlideshow';
<<<<<<< HEAD
import Features from '@/components/Features';
=======
>>>>>>> 7f8e678f53a9ccb7ad70db81d71e4839e7479291

const HomePage = () => {
    const services = [
        {
            icon: Utensils,
            title: "Taze Et Ürünleri",
            description: "Günlük kesim, yerli besi dana ve kuzu eti seçenekleriyle mutfağınıza lezzet katıyoruz."
        },
        {
            icon: Award,
            title: "Gurme Şarküteri",
            description: "Özel yapım sucuk, pastırma ve özenle seçilmiş yöresel kahvaltılık ürünler."
        },
        {
            icon: Heart,
            title: "Özel Hazırlık",
            description: "Köfte çeşitleri, marine edilmiş etler ve dilediğiniz özel kesim teknikleri."
        }
    ];

<<<<<<< HEAD
    return (
        // Sayfanın sağa sola kaymasını engellemek için overflow-x-hidden ekledik
        <div className="w-full overflow-x-hidden">
            <Helmet>
                <title>Tunc Kasap - Geleneksel Lezzet, Modern Hizmet</title>
                <meta name="description" content="En taze et ürünleri, gurme şarküteri ve özel kasaplık hizmetleriyle Özmen Kasap hizmetinizde." />
            </Helmet>

            {/* --- HERO SECTION --- */}
            <section className="relative bg-[#1a1a1a] pt-20 md:pt-32">
                <div className="container mx-auto px-4 mb-10 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-block bg-red-600/20 text-red-500 px-4 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-red-500/30">
                            1992'den Beri Ustalıkla
                        </div>
                        <h1 className="text-4xl md:text-8xl font-black text-white mb-6 leading-[0.9] uppercase italic">
                            Lezzetin <br />
                            <span className="text-red-600">Doğru Adresi</span>
                        </h1>
                        <p className="text-base md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
                            Doğal beslenen hayvanlardan elde edilen, veteriner kontrollü ve %100 yerli besi ürünlerimizle sofralarınızın kalitesini artırıyoruz.
                        </p>
                    </motion.div>
                </div>

                {/* HeroSlideshow'u kısıtlayan h-[60vh] kaldırıldı, kendi iç yüksekliğini kullanmasına izin verildi */}
                <div className="relative w-full overflow-hidden">
                    <HeroSlideshow />
                </div>
            </section>

            {/* --- SERVICES SECTION --- */}
            <section id="services" className="py-20 md:py-32 bg-[#0f0f0f] relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase">
                            Ürün ve <span className="text-red-600">Hizmetlerimiz</span>
                        </h2>
                        <div className="h-1 w-20 bg-red-600 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} index={index} />
                        ))}
=======
    const features = [
        {
            icon: Shield,
            title: "Güvenlik Önceliği",
            desc: "Tüm operasyonlarımızda uluslararası iş güvenliği standartlarına %100 uyum sağlıyoruz."
        },
        {
            icon: Clock,
            title: "7/24 Hizmet",
            desc: "Acil durumlar ve planlı projeleriniz için günün her saati kesintisiz hizmet veriyoruz."
        },
        {
            icon: Truck,
            title: "Modern Filo",
            desc: "Bakımları düzenli yapılan, son teknoloji vinç ve taşıma ekipmanları filosu."
        }
    ];

    return (
            <div className="bg-black min-h-screen">
                <Helmet>
                    <title>ÖzmenVinç - Profesyonel Vinç Kiralama ve Ağır Yük Taşıma</title>
                    <meta name="description" content="Profesyonel vinç kiralama, ağır yük taşıma ve inşaat destek hizmetleri." />
                </Helmet>

                {/* HERO SECTION */}
                <section className="relative overflow-hidden pt-20 md:pt-28">
                    <div className="container mx-auto px-4 relative z-10 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center max-w-4xl mx-auto mb-12"
                        >
                            <div className="inline-block bg-yellow-500 text-black px-4 py-1 rounded-sm text-xs font-bold uppercase tracking-[0.2em] mb-6">
                                Özmen Vinç Çözümleri
                            </div>

                            <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-none italic uppercase tracking-tighter">
                                Profesyonel <br />
                                <span className="text-yellow-500">Kaldırma Sistemleri</span>
                            </h1>

                            <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed pointer-events-auto">
                                En zorlu kaldırma ve taşıma projelerinizde, deneyimli ekibimiz ve modern filomuzla Türkiye'nin her yerindeyiz.
                            </p>
                        </motion.div>
                    </div>

                    {/* SLIDESHOW - Daha geniş ve etkileyici bir alan */}
                    <div className="w-full max-w-[1600px] mx-auto px-4 pb-12">
                        <HeroSlideshow />
>>>>>>> 7f8e678f53a9ccb7ad70db81d71e4839e7479291
                    </div>
                </section>

<<<<<<< HEAD
            {/* --- WHY CHOOSE US --- */}
            <Features />

            {/* --- CTA SECTION --- */}
            <section className="py-20 md:py-32 bg-red-600 relative overflow-hidden text-center px-4">
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase italic leading-none">
                        Akşama Ne <br className="md:hidden" /> Pişiriyoruz?
                    </h2>
                    <p className="text-white/90 mb-10 text-lg md:text-xl max-w-2xl mx-auto">
                        Dükkanımıza uğrayıp günün en taze kesimlerini birlikte seçelim, ustalığımızla sofranıza değer katalım.
                    </p>
=======
                {/* SERVICES SECTION */}
                <section id="services" className="py-24 bg-zinc-950 border-t border-zinc-900">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 italic uppercase">
                                Hizmet<span className="text-yellow-500">lerimiz</span>
                            </h2>
                            <div className="h-1.5 w-24 bg-yellow-500 mx-auto" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {services.map((service, index) => (
                                <ServiceCard key={index} {...service} index={index} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY US & CTA (Kodun geri kalanı aynı şekilde devam eder) */}
  <section className="py-24 bg-black border-y border-zinc-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase italic leading-none">
                                Neden <br />
                                <span className="text-yellow-500">Bizi Seçmelisiniz?</span>
                            </h2>

                            <div className="space-y-6">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800"
                                    >
                                        <div className="bg-yellow-500 p-3 rounded-lg mr-5">
                                            <feature.icon className="w-6 h-6 text-black" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white uppercase italic">
                                                {feature.title}
                                            </h3>
                                            <p className="text-sm text-gray-500">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-2 bg-yellow-500/20 rounded-3xl blur-2xl opacity-50" />
                            <img
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                                alt="Özmen Vinç"
                                className="relative rounded-2xl shadow-2xl border border-zinc-800 w-full object-cover h-[500px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-yellow-500 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-6xl font-black text-black mb-6 uppercase italic">
                        Yükünüzü Biz Kaldıralım
                    </h2>

>>>>>>> 7f8e678f53a9ccb7ad70db81d71e4839e7479291
                    <Link to="/about-contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
<<<<<<< HEAD
                            className="bg-black text-white px-10 py-4 md:px-14 md:py-6 rounded-full font-black text-base md:text-lg uppercase tracking-widest shadow-2xl transition-all"
=======
                            className="bg-black text-yellow-500 px-12 py-5 rounded-full font-black text-lg uppercase tracking-widest shadow-2xl"
>>>>>>> 7f8e678f53a9ccb7ad70db81d71e4839e7479291
                        >
                            İletişime Geçin
                        </motion.button>
                    </Link>
                </div>

                {/* Dekoratif Arka Plan Yazısı (Opsiyonel - Şıklık katar) */}
                <div className="absolute -bottom-10 -right-10 text-white/5 text-[15rem] font-black select-none pointer-events-none uppercase italic">
                    KASAP
                </div>
            </section>
<<<<<<< HEAD
        </div>
    );
};
=======
>>>>>>> 7f8e678f53a9ccb7ad70db81d71e4839e7479291







            </div>






        );
    };

    export default HomePage;