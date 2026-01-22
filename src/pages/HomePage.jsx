import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Truck, Shield, Clock, Anchor, Settings, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import HeroSlideshow from '@/components/HeroSlideshow';


const HomePage = () => {
    const services = [
        {
            icon: Truck,
            title: "Vinç Kiralama",
            description: "Farklı tonajlarda mobil ve kule vinç kiralama hizmetleri. Projenize uygun esnek çözümler."
        },
        {
            icon: Anchor,
            title: "Ağır Yük Taşıma",
            description: "Özel ekipmanlarla ağır ve geniş yüklerin güvenli bir şekilde taşınması ve yerleştirilmesi."
        },
        {
            icon: Building2,
            title: "İnşaat Desteği",
            description: "Yüksek katlı binalar ve şantiyeler için profesyonel kaldırma ve montaj desteği."
        },
        {
            icon: Settings,
            title: "Endüstriyel Çözümler",
            description: "Fabrika kurulumu, makine taşıma ve endüstriyel tesis montaj hizmetleri."
        }
    ];

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

    const handleScrollToServices = (e) => {
        e.preventDefault();
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Helmet>
                <title>ÖzmenVinç - Profesyonel Vinç Kiralama ve Ağır Yük Taşıma</title>
                <meta name="description" content="Profesyonel vinç kiralama, ağır yük taşıma ve inşaat destek hizmetleri. Güvenilir, hızlı ve sertifikalı çözümler." />

            </Helmet>

            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center">
                <div className="absolute inset-0 z-0">
                    <HeroSlideshow />
                </div>

                <div className="container mx-auto px-4 relative z-10 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-block bg-crane-orange/20 text-crane-orange px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-crane-orange/30">
                            Özmen Vinç Çözümleri
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Profesyonel <br />
                            <span className="text-crane-orange">Vinç Hizmetleri</span>
                        </h1>
                        <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
                            En zorlu kaldırma ve taşıma projelerinizde, deneyimli ekibimiz ve güçlü filomuzla yanınızdayız.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/about-contact">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-crane-orange text-white px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide hover:bg-[#b35900] transition-colors w-full sm:w-auto"
                                >
                                    Hemen Teklif Al
                                </motion.button>
                            </Link>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleScrollToServices}
                                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide hover:border-crane-orange hover:text-crane-orange transition-colors w-full sm:w-auto"
                            >
                                Hizmetlerimiz
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 bg-black relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Hizmet<span className="text-crane-orange">lerimiz</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            İhtiyacınıza yönelik geniş kapsamlı kaldırma ve taşıma çözümleri sunuyoruz.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-crane-darkGray">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Neden Bizi <br />
                                <span className="text-crane-orange">Tercih Etmelisiniz?</span>
                            </h2>
                            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                                20 yılı aşkın tecrübemizle, sektördeki en güvenilir çözüm ortağınız olmayı hedefliyoruz. Her projede mükemmelliği ve güvenliği ön planda tutuyoruz.
                            </p>

                            <div className="space-y-8">
                                {features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="flex items-start"
                                    >
                                        <div className="bg-black p-3 rounded-lg border border-gray-800 mr-4">
                                            <feature.icon className="w-6 h-6 text-crane-orange" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                            <p className="text-gray-400">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-crane-orange/20 rounded-xl blur-lg" />
                            <img
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                                alt="Vinç Operasyonu"
                                className="relative rounded-xl shadow-2xl border border-gray-800 w-full object-cover h-[600px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-crane-orange relative overflow-hidden">
                <div className="absolute inset-0 bg-pattern opacity-10" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                        Projeniz İçin Hazırız
                    </h2>
                    <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">
                        Hemen iletişime geçin, uzman ekibimiz projeniz için en uygun çözümü ve fiyat teklifini sunsun.
                    </p>
                    <Link to="/about-contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-black text-white px-10 py-5 rounded-lg font-bold text-lg uppercase tracking-wide hover:bg-gray-900 transition-colors shadow-2xl"
                        >
                            İletişime Geçin
                        </motion.button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default HomePage;