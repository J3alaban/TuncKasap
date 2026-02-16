import React from "react";
import { motion } from "framer-motion";

const images = [
<<<<<<< HEAD
    { url: "/image1.jpg", title: "Dana Antrikot" },
    { url: "/image2.jpg", title: "Özel Dinlendirilmiş" },
    { url: "/image3.jpg", title: "Kuzu Kafes" },
    { url: "/image4.jpg", title: "Zırh Kıyması" },
    { url: "/image5.jpg", title: "Gurme Sucuk" },
    { url: "/image6.jpg", title: "Kuzu Tandır" },
=======
    { id: 1, url: "/image1.jpg", title: "Endüstriyel Çözümler" },
    { id: 2, url: "/image2.jpg", title: "Lojistik Ağımız" },
    { id: 3, url: "/image3.jpg", title: "Teknoloji ve Ar-Ge" },
    { id: 4, url: "/image4.jpg", title: "Sürdürülebilirlik" },
    { id: 5, url: "/image5.jpg", title: "Global Erişim" },
    { id: 6, url: "/image6.jpg", title: "Kalite Standartları" }
>>>>>>> 7f8e678f53a9ccb7ad70db81d71e4839e7479291
];

// Akışın kesintisiz olması için listeyi çoğaltıyoruz
const marqueeItems = [...images, ...images, ...images];

const HeroSlideshow = () => {
<<<<<<< HEAD
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
=======
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
>>>>>>> 7f8e678f53a9ccb7ad70db81d71e4839e7479291
    );
};

export default HeroSlideshow;