import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Public klasörü içindeki yollar
const images = [
    "/image1.jpg", // Dosya uzantınız neyse (jpg, png, webp) ona göre güncelleyin
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
    "/image6.jpg"
];

const HeroSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3500);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                >
                    <img
                        src={images[currentIndex]}
                        alt={`Sektörel Görsel ${currentIndex + 1}`}
                        className="w-full h-full object-cover"
                        // Yerel görsellerde yükleme performansını artırmak için:
                        loading={currentIndex === 0 ? "eager" : "lazy"}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Karartma ve Gradyan Katmanları */}
            <div className="absolute inset-0 bg-black/40 z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        </div>
    );
};

export default HeroSlideshow;