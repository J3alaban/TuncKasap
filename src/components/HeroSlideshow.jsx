import React, { useState } from 'react';
import { motion } from 'framer-motion';

const images = [
    { id: 1, url: "/image1.jpg", title: "Endüstriyel Çözümler" },
    { id: 2, url: "/image2.jpg", title: "Lojistik Ağımız" },
    { id: 3, url: "/image3.jpg", title: "Teknoloji ve Ar-Ge" },
    { id: 4, url: "/image4.jpg", title: "Sürdürülebilirlik" },
    { id: 5, url: "/image5.jpg", title: "Global Erişim" },
    { id: 6, url: "/image6.jpg", title: "Kalite Standartları" }
];

const HeroSlideshow = () => {
    // Başlangıçta ilk kartın açık olması için 0 indeksini veriyoruz
    const [expandedIndex, setExpandedIndex] = useState(0);

    return (
        <div className="flex w-full h-screen p-4 gap-4 bg-zinc-950 items-center justify-center overflow-hidden">
            {images.map((image, index) => (
                <motion.div
                    key={image.id}
                    layout
                    onClick={() => setExpandedIndex(index)}
                    initial={false}
                    animate={{
                        flex: expandedIndex === index ? 5 : 1,
                    }}
                    transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1] // Custom cubic-bezier for smooth expansion
                    }}
                    className="relative h-[500px] min-w-[60px] cursor-pointer overflow-hidden rounded-2xl group"
                >
                    {/* Görsel */}
                    <img
                        src={image.url}
                        alt={image.title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Karartma Katmanı */}
                    <div className={`absolute inset-0 bg-black/30 transition-opacity duration-500
                        ${expandedIndex === index ? 'opacity-20' : 'opacity-60'}`}
                    />

                    {/* İçerik (Sadece genişlediğinde görünür) */}
                    <div className="absolute bottom-10 left-10 right-10 z-20 whitespace-nowrap">
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: expandedIndex === index ? 1 : 0,
                                y: expandedIndex === index ? 0 : 20
                            }}
                            transition={{ delay: 0.2 }}
                            className="text-white text-2xl font-bold uppercase tracking-wider"
                        >
                            {image.title}
                        </motion.h3>
                    </div>

                    {/* Dikey Başlık (Kart kapalıyken yan duran yazı) */}
                    {expandedIndex !== index && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 [writing-mode:vertical-lr] rotate-180 text-white/50 font-medium uppercase tracking-widest"
                        >
                            {image.title}
                        </motion.p>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default HeroSlideshow;