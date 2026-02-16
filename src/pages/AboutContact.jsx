import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageSquare, Code2, Heart } from 'lucide-react';
import {FaWhatsapp} from "react-icons/fa";

const AboutContact = () => {
    const [hoverSide, setHoverSide] = useState(null);

    const aboutSteps = [
        {
            title: "Ustalık Mirası",
            desc: "Yılların verdiği tecrübe ile her bıçak darbesinde aynı kaliteyi ve özeni sofralarınıza taşıyoruz.",
            img: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2070"
        },
        {
            title: "Doğal Besi",
            desc: "Sadece meralarda doğal beslenen, veteriner onaylı hayvanları seçiyor, sağlığınızı önceliğimiz yapıyoruz.",
            img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069"
        },
        {
            title: "Modern Hijyen",
            desc: "Geleneksel lezzeti, en modern soğuk zincir ve hijyen standartlarıyla harmanlayarak sunuyoruz.",
            img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2070"
        }
    ];

    return (
        <div className="bg-black text-white overflow-x-hidden">
            <Helmet>
                <title>Hakkımızda ve İletişim - Tunç Kasap</title>
            </Helmet>

            {/* --- HAKKIMIZDA BÖLÜMÜ --- */}
            <section className="relative flex flex-col lg:flex-row bg-zinc-950">
                {/* Sol Metin Alanı */}
                <div className="w-full lg:w-1/2 px-6 md:px-24 py-20 lg:py-32">
                    {aboutSteps.map((step, i) => (
                        <div key={i} className="min-h-[40vh] lg:min-h-[50vh] flex flex-col justify-center mb-20 lg:mb-32 last:mb-0">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-red-600 font-black mb-4 block tracking-widest text-sm"
                            >
                                BÖLÜM 0{i + 1}
                            </motion.span>

                            {/* Mobilde Gözükecek Görsel */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="w-full h-64 mb-8 rounded-2xl overflow-hidden lg:hidden"
                            >
                                <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-3xl md:text-6xl font-black uppercase mb-6 leading-tight"
                            >
                                {step.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-gray-400 text-base md:text-xl leading-relaxed max-w-md"
                            >
                                {step.desc}
                            </motion.p>
                        </div>
                    ))}
                </div>

                {/* Sağ Sabit Görsel Alanı (Sadece Masaüstü) */}
                <div className="hidden lg:block w-1/2 h-screen sticky top-0 overflow-hidden border-l border-white/5">
                    {aboutSteps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ margin: "-20% 0px -20% 0px" }}
                            className="absolute inset-0"
                        >
                            <img src={step.img} alt={step.title} className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- İLETİŞİM BÖLÜMÜ (RESPONSIVE SPLIT) --- */}
            <section className="relative h-screen md:h-[70vh] flex flex-col md:flex-row overflow-hidden border-t border-zinc-900">

                {/* Tasarımcı Alanı */}
                <motion.div
                    onMouseEnter={() => setHoverSide('designer')}
                    onMouseLeave={() => setHoverSide(null)}
                    animate={{
                        width: typeof window !== 'undefined' && window.innerWidth > 768
                            ? (hoverSide === 'designer' ? '70%' : hoverSide === 'company' ? '30%' : '50%')
                            : '100%',
                        height: typeof window !== 'undefined' && window.innerWidth <= 768
                            ? (hoverSide === 'designer' ? '60%' : hoverSide === 'company' ? '40%' : '50%')
                            : '100%'
                    }}
                    className="relative flex flex-col items-center justify-center p-8 md:p-12 bg-zinc-900 border-b md:border-b-0 md:border-r border-zinc-800 transition-all duration-500 overflow-hidden"
                >
                    <div className="relative z-10 text-center">
                        <Code2 className="w-12 h-12 md:w-16 md:h-16 text-red-600 mx-auto mb-4 md:mb-6" />
                        <h3 className="text-xl md:text-4xl font-black uppercase mb-2 md:mb-4 tracking-tighter">Dijital Tasarım</h3>
                        <p className={`text-gray-400 text-sm md:text-base mb-6 md:mb-8 transition-opacity duration-300 ${hoverSide === 'company' ? 'opacity-0' : 'opacity-100'}`}>
                            Projenin dijital mimarı ile iletişime geçin.
                        </p>
                        <a href="https://wa.me/905459266026" className="inline-flex bg-white text-black px-6 py-3 md:px-8 md:py-3 rounded-full font-bold uppercase text-xs md:text-sm hover:scale-105 transition-transform items-center gap-2">
                            <MessageSquare className="w-4 h-4" /> Geliştirici
                        </a>
                    </div>
                </motion.div>

                {/* Şirket Alanı */}
                <motion.div
                    onMouseEnter={() => setHoverSide('company')}
                    onMouseLeave={() => setHoverSide(null)}
                    animate={{
                        width: typeof window !== 'undefined' && window.innerWidth > 768
                            ? (hoverSide === 'company' ? '70%' : hoverSide === 'designer' ? '30%' : '50%')
                            : '100%',
                        height: typeof window !== 'undefined' && window.innerWidth <= 768
                            ? (hoverSide === 'company' ? '60%' : hoverSide === 'designer' ? '40%' : '50%')
                            : '100%'
                    }}
                    className="relative flex flex-col items-center justify-center p-8 md:p-12 bg-red-600 transition-all duration-500 overflow-hidden"
                >
                    <div className="relative z-10 text-center text-white">
                        <Heart className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto mb-4 md:mb-6" />
                        <h3 className="text-xl md:text-4xl font-black uppercase mb-2 md:mb-4 tracking-tighter">Tunç Kasap</h3>
                        <p className={`text-white/80 text-sm md:text-base mb-6 md:mb-8 transition-opacity duration-300 ${hoverSide === 'designer' ? 'opacity-0' : 'opacity-100'}`}>
                            Sipariş hattı ve konum bilgisi.
                        </p>
                        <div className="flex flex-col gap-3 items-center">

                            <a
                                href="https://wa.me/905315839361"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black text-white px-6 py-3 md:px-8 md:py-3 rounded-full font-bold uppercase text-xs md:text-sm hover:scale-105 transition-transform flex items-center gap-2"
                            >
                                <FaWhatsapp className="w-4 h-4" />
                                İletişime Geç
                            </a>


                        </div>
                    </div>
                </motion.div>

                {/* Orta Ayırıcı Yazı */}
                {!hoverSide && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black border border-zinc-800 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hidden md:block z-20">
                        Seçiminizi Yapın
                    </div>
                )}
            </section>
        </div>
    );
};

export default AboutContact;