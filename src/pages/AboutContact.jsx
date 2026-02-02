import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageSquare, Code2, Mail, TowerControl as Crane } from 'lucide-react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import ContactInfoCard from '@/components/ContactInfoCard';

const AboutContact = () => {
    return (
        <>
            <Helmet>
                <title>Hakkımızda ve İletişim - ProVinç</title>
                <meta name="description" content="ProVinç hakkında detaylı bilgi ve iletişim kanalları." />
            </Helmet>

            {/* About Header */}
            <section className="bg-crane-darkGray py-20 border-b border-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Gücümüzü <span className="text-crane-orange">Tecrübemizden</span> Alıyoruz
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            2005 yılından bu yana inşaat ve lojistik sektörlerine profesyonel çözümler sunuyoruz.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-black">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* Tasarımcı İletişim */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <Code2 className="text-crane-orange w-6 h-6" />
                                <h2 className="text-2xl font-bold text-white">Sayfa Tasarımı İçin</h2>
                            </div>

                            <p className="text-gray-400 mb-6">
                                Bu web sitesi gibi profesyonel bir tasarım projeniz varsa, doğrudan iletişime geçebilirsiniz.
                            </p>

                            <div className="grid gap-6">
                                <ContactInfoCard
                                    icon={Mail}
                                    title="E-posta Adresi"
                                    value="balaban1447@gmail.com"
                                    link="mailto:balaban1447@gmail.com"
                                    actionText="E-posta Gönder"
                                />

                                <ContactInfoCard
                                    icon={MessageSquare}
                                    title="Tasarımcı WhatsApp"
                                    value="+90 545 926 60 26"
                                    link="https://wa.me/905459266026"
                                    actionText="Mesaj Atın"
                                />
                            </div>
                        </motion.div>

                        {/* Şirket İletişim Bilgileri */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <Phone className="text-crane-orange w-6 h-6" />
                                <h2 className="text-2xl font-bold text-white">Vinç Çözümleri İçin</h2>
                            </div>

                            <p className="text-gray-400 mb-6">
                                Operasyonel ihtiyaçlarınız ve kiralama süreçleri hakkında bilgi almak için bize ulaşın.
                            </p>

                            <div className="grid gap-6">
                                <ContactInfoCard
                                    icon={Phone}
                                    title="WhatsApp & Telefon"
                                    value="+90 533 485 11 55"
                                    link="https://wa.me/905334851155"
                                    actionText="WhatsApp'tan Yazın"
                                />

                                <ContactInfoCard
                                    icon={MapPin}
                                    title="Merkez Ofis"
                                    value="Dökmeciler sanayi sitesi, Bahçekapı, 2492. Cd. no 1 /11, 06560 Etimesgut/Ankara"
                                    link="https://maps.app.goo.gl/DCz6bJZeuHnPHpHQ7"
                                    actionText="Yol Tarifi Al"
                                />
                            </div>

                            {/* Map */}
                            <div className="bg-crane-darkGray p-2 rounded-2xl border border-gray-800 h-[300px] overflow-hidden mt-2">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.447543888796!2d28.79051!3d41.07728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzM4LjIiTiAyOMKwNDcnMjUuOCJF!5e0!3m2!1str!2str!4v1635848000000!5m2!1str!2str"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    className="grayscale hover:grayscale-0 transition-all duration-500 rounded-xl"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutContact;