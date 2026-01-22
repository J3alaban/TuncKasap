import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative bg-crane-darkGray border border-gray-800 p-8 rounded-xl overflow-hidden hover:border-crane-orange transition-colors duration-300"
        >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-crane-orange/10 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />

            <div className="relative z-10">
                <div className="w-14 h-14 bg-black border border-gray-800 rounded-lg flex items-center justify-center mb-6 group-hover:border-crane-orange group-hover:text-crane-orange transition-colors duration-300">
                    <Icon className="w-7 h-7 text-white group-hover:text-crane-orange transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-crane-orange transition-colors">
                    {title}
                </h3>
                {/* Description and "Detaylı Bilgi" button removed as per Task 1 */}
                {/* <p className="text-gray-400 mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center text-sm font-semibold text-white group-hover:text-crane-orange transition-colors cursor-pointer">
          Detaylı Bilgi
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div> */}
            </div>
        </motion.div>
    );
};

export default ServiceCard;