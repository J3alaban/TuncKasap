import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    { id: 1, url: "/image1.jpg", title: "Endüstriyel Çözümler" },
    { id: 2, url: "/image2.jpg", title: "Lojistik Ağımız" },
    { id: 3, url: "/image3.jpg", title: "Teknoloji ve Ar-Ge" },
    { id: 4, url: "/image4.jpg", title: "Sürdürülebilirlik" },
    { id: 5, url: "/image5.jpg", title: "Global Erişim" },
    { id: 6, url: "/image6.jpg", title: "Kalite Standartları" }
];

const HeroSlideshow = () => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setExpandedIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
        }, 4000); // 4 saniye daha akıcı bir geçiş sağlar
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col md:flex-row w-full h-[600px] md:h-[550px] gap-3">
            {images.map((image, index) => (
                <motion.div
                    key={image.id}
                    layout
                    onClick={() => setExpandedIndex(index)}
                    className={`relative cursor-pointer overflow-hidden rounded-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        expandedIndex === index
                        ? 'flex-[6] md:flex-[10]' // Mobilde ve masaüstünde aktif olanın büyüklüğü
                        : 'flex-[1] md:flex-[1]'  // Pasif olanlar
                    }`}
                >
                    <motion.img
                        layout
                        src={image.url}
                        alt={image.title}
                        className="absolute inset-0 w-full h-full object-cover select-none"
                    />

                    {/* Overlay: Aktif olmayanda daha koyu, aktifte daha şeffaf */}
                    <div className={`absolute inset-0 transition-colors duration-700 ${
                        expandedIndex === index ? 'bg-black/10' : 'bg-black/60 hover:bg-black/40'
                    }`} />

                    {/* Yazı Alanı */}
                    <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                        <AnimatePresence mode="wait">
                            {expandedIndex === index ? (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="w-10 h-1 bg-yellow-500" />
                                    <h3 className="text-white text-xl md:text-3xl font-black uppercase italic tracking-tighter">
                                        {image.title}
                                    </h3>
                                </motion.div>
                            ) : (
                                // Dikey yazı - Sadece Masaüstünde
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.5 }}
                                    className="hidden md:block absolute bottom-24 left-1/2 -translate-x-1/2 [writing-mode:vertical-lr] rotate-180 text-white font-bold uppercase tracking-widest text-[10px] whitespace-nowrap"
                                >
                                    {image.title}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Alt Çizgi Progress Bar (Sadece Aktif Olanda) */}
                    {expandedIndex === index && (
                        <motion.div
                            layoutId="progress-bar"
                            className="absolute bottom-0 left-0 h-1.5 bg-yellow-500 z-30"
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 4, ease: "linear" }}
                        />
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default HeroSlideshow;