import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Snowflake, MapPin, ChevronRight, Star } from 'lucide-react';

const Features = () => {
    const [activeTab, setActiveTab] = useState(0);

    const features = [
        {
            icon: ShieldCheck,
            title: "%100 Hijyen ve Güven",
            desc: "Etlerimiz, İslami usullere uygun olarak, modern tesislerde ve sürekli veteriner kontrolü altında hazırlanır. Sağlığınız bizim için en büyük önceliktir.",
            image: "/Features1.png",
            tag: "Gıda Güvenliği"
        },
        {
            icon: Star,
            title: "Yerli Besi & Doğallık",
            desc: "Fabrika yemi yerine doğal meralarda beslenen hayvanları tercih ediyoruz. Etin renginden dokusuna kadar her detayda doğallığı hissedeceksiniz.",
            image: "https://images.unsplash.com/photo-1551028150-64b9f398f678?q=80&w=2070&auto=format&fit=crop",
            tag: "Ustalık Seçimi"
        },
        {
            icon: Snowflake,
            title: "Tazelik ve Soğuk Zincir",
            desc: "Ürünlerimizi parçaladığımız andan size ulaştırdığımız ana kadar ısı kontrolünü elden bırakmıyoruz. Asla dondurulmuş ürün satmıyoruz.",
            image: "https://images.unsplash.com/photo-1602491673980-73aa38de027a?q=80&w=2070&auto=format&fit=crop",
            tag: "Tazelik Garantisi"
        }
    ];

    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Arka Plan Süslemesi (Sarı yerine Kırmızı) */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-600/5 blur-[120px] rounded-full" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic">
                        Lezzet <span className="text-red-600">Sırrımız</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* SOL TARAF: TAB BUTONLARI */}
                    <div className="w-full lg:w-1/3 space-y-4">
                        {features.map((feature, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-500 text-left border ${
                                    activeTab === index
                                        ? "bg-red-600 border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.2)]"
                                        : "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700"
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl ${activeTab === index ? "bg-black text-red-600" : "bg-zinc-800 text-red-600"}`}>
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <span className={`font-bold uppercase tracking-wider ${activeTab === index ? "text-white" : "text-gray-400"}`}>
                                        {feature.title}
                                    </span>
                                </div>
                                <ChevronRight className={`w-5 h-5 transition-transform ${activeTab === index ? "rotate-90 text-white" : "text-zinc-600"}`} />
                            </button>
                        ))}
                    </div>

                    {/* SAĞ TARAF: DİNAMİK İÇERİK */}
                    <div className="w-full lg:w-2/3 min-h-[450px] relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900/30 p-8 rounded-[32px] border border-zinc-800/50 backdrop-blur-sm"
                            >
                                <div className="space-y-6 flex flex-col justify-center">
                                    <span className="text-red-600 font-black text-xs uppercase tracking-[0.3em]">
                                        {features[activeTab].tag}
                                    </span>
                                    <h3 className="text-3xl font-black text-white uppercase leading-tight">
                                        {features[activeTab].title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        {features[activeTab].desc}
                                    </p>
                                    <div className="pt-4">
                                        <div className="h-1 w-24 bg-red-600" />
                                    </div>
                                </div>

                                <div className="relative h-[300px] md:h-full overflow-hidden rounded-2xl">
                                    <motion.img
                                        initial={{ scale: 1.2 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.8 }}
                                        src={features[activeTab].image}
                                        alt={features[activeTab].title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;