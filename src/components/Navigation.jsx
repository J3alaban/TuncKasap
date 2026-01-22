import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Construction, Phone } from 'lucide-react';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Anasayfa' },
        { path: '/about-contact', label: 'Hakkımızda & İletişim' },
    ];

    const isActivePath = (path) => location.pathname === path;

    return (
        <nav className="bg-black/95 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="bg-crane-orange p-2 rounded-lg">
                            <Construction className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-wide uppercase">
                Abdullah Özmen <span className="text-crane-orange">Vinç</span>
              </span>
                            <span className="text-[10px] text-gray-400 tracking-widest uppercase">
                Ağır Yük Çözümleri
              </span>
                        </div>
                    </Link>



                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="relative group py-2"
                            >
                <span className={`text-sm font-bold tracking-wide uppercase transition-colors duration-300 ${
                    isActivePath(link.path) ? 'text-crane-orange' : 'text-gray-300 group-hover:text-white'
                }`}>
                  {link.label}
                </span>
                                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-crane-orange transform origin-left transition-transform duration-300 ${
                                    isActivePath(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                }`} />
                            </Link>
                        ))}

                        <Link to="/about-contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-crane-orange text-white px-6 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#b35900] transition-colors flex items-center"
                            >
                                <Phone className="w-4 h-4 mr-2" />
                                Teklif Al
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-gray-400 hover:text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-8 w-8" />
                        ) : (
                            <Menu className="h-8 w-8" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-crane-darkGray border-t border-gray-800 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block text-lg font-bold ${
                                        isActivePath(link.path) ? 'text-crane-orange' : 'text-gray-300'
                                    }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-800">
                                <Link to="/about-contact" onClick={() => setIsMenuOpen(false)}>
                                    <button className="w-full bg-crane-orange text-white py-3 rounded-lg font-bold uppercase tracking-wide">
                                        İletişime Geç
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navigation;