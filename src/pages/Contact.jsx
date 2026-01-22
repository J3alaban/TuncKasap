import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'İsim gereklidir';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'E-posta gereklidir';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Geçerli bir e-posta adresi girin';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Konu gereklidir';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Mesaj gereklidir';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Mesaj en az 10 karakter olmalıdır';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            toast({
                title: "Mesajınız Gönderildi! 📧",
                description: "En kısa sürede sizinle iletişime geçeceğiz.",
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
            toast({
                title: "Hata! ❌",
                description: "Lütfen tüm alanları doğru şekilde doldurun.",
                variant: "destructive"
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>{"İletişim - KalemKraft"}</title>
                <meta name="description" content="KalemKraft ile iletişime geçin. Sorularınız ve önerileriniz için bizimle iletişime geçebilirsiniz." />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-5xl font-bold text-gray-800 mb-4">İletişime Geçin</h1>
                        <p className="text-gray-600 text-lg">
                            Sorularınız mı var? Size yardımcı olmaktan mutluluk duyarız!
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white rounded-2xl shadow-lg p-6"
                            >
                                <div className="bg-[#FFDAB9] rounded-full w-14 h-14 flex items-center justify-center mb-4">
                                    <Phone className="h-7 w-7 text-[#FF7F50]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Telefon</h3>
                                <p className="text-gray-600">+90 (212) 555 0123</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white rounded-2xl shadow-lg p-6"
                            >
                                <div className="bg-[#FFDAB9] rounded-full w-14 h-14 flex items-center justify-center mb-4">
                                    <Mail className="h-7 w-7 text-[#FF7F50]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">E-posta</h3>
                                <p className="text-gray-600">info@kalemkraft.com</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-white rounded-2xl shadow-lg p-6"
                            >
                                <div className="bg-[#FFDAB9] rounded-full w-14 h-14 flex items-center justify-center mb-4">
                                    <MapPin className="h-7 w-7 text-[#FF7F50]" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Adres</h3>
                                <p className="text-gray-600">
                                    Atatürk Bulvarı No:123<br />
                                    Kadıköy, İstanbul, Türkiye
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-2"
                        >
                            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                            İsim Soyisim *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-gray-800 focus:outline-none focus:border-[#FF7F50] transition-colors ${
                                                errors.name ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                            placeholder="Adınız ve soyadınız"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                            E-posta *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-gray-800 focus:outline-none focus:border-[#FF7F50] transition-colors ${
                                                errors.email ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                            placeholder="ornek@email.com"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="mb-6">
                                    <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                                        Konu *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-gray-800 focus:outline-none focus:border-[#FF7F50] transition-colors ${
                                            errors.subject ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Mesajınızın konusu"
                                    />
                                    {errors.subject && (
                                        <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                                    )}
                                </div>

                                {/* Message */}
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                                        Mesaj *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="6"
                                        className={`w-full px-4 py-3 rounded-xl border-2 bg-white text-gray-800 focus:outline-none focus:border-[#FF7F50] transition-colors resize-none ${
                                            errors.message ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Mesajınızı buraya yazın..."
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        type="submit"
                                        className="w-full bg-[#FF7F50] hover:bg-[#ff6a3d] text-white py-6 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
                                    >
                                        <Send className="h-5 w-5 mr-2" />
                                        Mesajı Gönder
                                    </Button>
                                </motion.div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;