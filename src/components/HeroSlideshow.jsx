import React from "react";
import { motion } from "framer-motion";

const images = [
    { url: "/image1.jpg", title: "Dana Antrikot" },
    { url: "/image2.jpg", title: "Özel Dinlendirilmiş" },
    { url: "/image3.jpg", title: "Kuzu Kafes" },
    { url: "/image4.jpg", title: "Zırh Kıyması" },
    { url: "/image5.jpg", title: "Gurme Sucuk" },
    { url: "/image6.jpg", title: "Kuzu Tandır" },
];

// Akışın kesintisiz olması için listeyi çoğaltıyoruz
const marqueeItems = [...images, ...images, ...images];

const HeroSlideshow = () => {
    return (
        <section className="relative bg-[#0a0a0a] w-full overflow-hidden py-10">

            {/* Üst Başlık Alanı */}
            <div className="container mx-auto px-6 mb-12 z-10">
                <h2 className="text-white text-5xl md:text-9xl font-black uppercase tracking-tighter leading-none">
                    USTA <span className="text-red-600">KESİMLER</span>
                </h2>
                <p className="text-gray-500 text-sm md:text-xl mt-4 max-w-2xl uppercase tracking-[0.3em]">
                    Kalite ve Tazeliğin Buluştuğu Nokta
                </p>
            </div>

            {/* Marquee Konteynerı */}
            <div className="flex overflow-hidden group">
                <motion.div
                    className="flex gap-4 md:gap-8 whitespace-nowrap"
                    animate={{ x: [0, -2500] }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                >
                    {marqueeItems.map((item, idx) => (
                        <div
                            key={idx}
                            // Mobilde 280px genişlik, Desktopta 450px
                            className="relative flex-shrink-0 w-[280px] h-[200px] md:w-[500px] md:h-[350px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border border-white/10 group/card"
                        >
                            <img
                                src={item.url}
                                alt={item.title}
                                className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700 group-hover/card:scale-110"
                            />

                            {/* Gradyan Karartma */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                            {/* Resim Üzerindeki Yazı */}
                            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                                <h3 className="text-white text-xl md:text-3xl font-black uppercase tracking-tighter">
                                    {item.title}
                                </h3>
                                <div className="w-8 h-1 bg-red-600 mt-2" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Arka Plan Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent pointer-events-none" />
        </section>
    );
};

export default HeroSlideshow;