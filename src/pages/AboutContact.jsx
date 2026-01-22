import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare, Code2 } from 'lucide-react';
import ContactInfoCard from '@/components/ContactInfoCard';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import emailjs from '@emailjs/browser';

const AboutContact = () => {
    const { toast } = useToast();
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // EmailJS bilgilerini buraya girin: https://www.emailjs.com/
        emailjs.sendForm(
            'service_u6852dd',
            'template_564ay25',
            form.current,
            'YOUR_PUBLIC_KEY'
        )
            .then((result) => {
                toast({
                    title: "Mesajınız İletildi!",
                    description: "Tasarım talebiniz tasarımcıya başarıyla ulaştırıldı.",
                });
                e.target.reset();
            }, (error) => {
                toast({
                    variant: "destructive",
                    title: "Hata!",
                    description: "Mesaj gönderilirken bir sorun oluştu.",
                });
            })
            .finally(() => setIsSubmitting(false));
    };

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

                        {/* Tasarımcı İletişim Formu */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-crane-darkGray p-8 md:p-12 rounded-2xl border border-crane-orange/30 shadow-lg shadow-orange-900/5"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Code2 className="text-crane-orange w-8 h-8" />
                                <h2 className="text-3xl font-bold text-white">Sayfa Tasarımı İçin</h2>
                            </div>
                            <p className="text-gray-400 mb-8">
                                Bu web sitesi gibi profesyonel bir tasarım projeniz varsa, doğrudan tasarımcı ile iletişime geçebilirsiniz.
                            </p>

                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Adınız</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-crane-orange transition-colors"
                                        placeholder="Mehmet Yılmaz"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">E-posta Adresiniz</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-crane-orange transition-colors"
                                        placeholder="iletisim@tasarimci.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Tasarım Talebiniz</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={4}
                                        className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-crane-orange transition-colors resize-none"
                                        placeholder="Nasıl bir web sitesi hayal ediyorsunuz?"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-crane-orange hover:bg-orange-700 text-white font-bold py-6 rounded-lg text-lg uppercase transition-all"
                                >
                                    {isSubmitting ? 'Gönderiliyor...' : 'Tasarımcıya Ulaş'}
                                    {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                                </Button>
                            </form>
                        </motion.div>

                        {/* Şirket İletişim Bilgileri (Aynen Kaldı) */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
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
                                    // Google Maps'ten gelen gerçek adres verisi
                                    value="Dökmeciler sanayi sitesi, Bahçekapı, 2492. Cd. no 1 /11, 06560 Etimesgut/Ankara"
                                    // İşletmenin doğrudan Google Maps üzerindeki resmi sayfası ve yol tarifi linki
                                    link="https://maps.app.goo.gl/DCz6bJZeuHnPHpHQ7"
                                    actionText="Yol Tarifi Al"
                                />
                            </div>

                            {/* Map */}
                            <div className="bg-crane-darkGray p-2 rounded-2xl border border-gray-800 h-[300px] overflow-hidden relative group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.447543888796!2d28.79051!3d41.07728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzM4LjIiTiAyOMKwNDcnMjUuOCJF!5e0!3m2!1str!2str!4v1635848000000!5m2!1str!2str"
                                    width="100%"
                                    height="100%"
                                    style={{border:0}}
                                    allowFullScreen=""
                                    loading="lazy"
                                    className="grayscale hover:grayscale-0 transition-all duration-500 rounded-xl"
                                ></iframe>
                            </div>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/905334851155"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <div className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-xl flex items-center justify-center font-bold text-lg transition-colors shadow-lg shadow-green-900/20">
                                    <MessageSquare className="w-6 h-6 mr-2" />
                                    WhatsApp Destek Hattı
                                </div>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutContact;