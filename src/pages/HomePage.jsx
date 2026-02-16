import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Utensils, Award, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import HeroSlideshow from '@/components/HeroSlideshow';
import Features from '@/components/Features';

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
                    </div>
                </div>
            </section>

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
                    <Link to="/about-contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-black text-white px-10 py-4 md:px-14 md:py-6 rounded-full font-black text-base md:text-lg uppercase tracking-widest shadow-2xl transition-all"
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
        </div>
    );
};

export default HomePage;