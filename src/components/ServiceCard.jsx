import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, index }) => {
    // Fare konumunu takip eden değerler
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Fare hareketini yakalayan fonksiyon
    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    // Spotlight maskesi (Sarı yerine Kırmızı gradyan)
    const background = useMotionTemplate`
        radial-gradient(
            400px circle at ${mouseX}px ${mouseY}px,
            rgba(220, 38, 38, 0.15),
            transparent 80%
        )
    `;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            className="group relative bg-[#0d0d0d] border border-zinc-800/50 p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:border-red-600/50"
        >
            {/* Spotlight Katmanı (Kırmızı Işık) */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
                style={{ background }}
            />

            <div className="relative z-10">
                {/* İkon Kutusu */}
                <div className="w-16 h-16 bg-black border border-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:border-red-600 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.2)] transition-all duration-300">
                    <Icon className="w-8 h-8 text-white group-hover:text-red-600 transition-colors" />
                </div>

                {/* Başlık */}
                <h3 className="text-xl font-black text-white mb-3 uppercase tracking-wide group-hover:text-red-600 transition-colors">
                    {title}
                </h3>

                {/* Açıklama */}
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {description}
                </p>

                {/* Alt Köşe Süslemesi (Kırmızı Glow) */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/20 transition-all duration-500" />
            </div>
        </motion.div>
    );
};

export default ServiceCard;