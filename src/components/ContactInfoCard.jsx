import React from 'react';
import { motion } from 'framer-motion';

const ContactInfoCard = ({ icon: Icon, title, value, link, actionText }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-crane-darkGray border border-gray-800 p-6 rounded-xl flex items-start space-x-4 hover:border-crane-orange transition-colors duration-300"
        >
            <div className="bg-black p-3 rounded-lg border border-gray-800 text-crane-orange">
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <h4 className="text-white font-bold mb-1">{title}</h4>
                <p className="text-gray-400 text-sm mb-2">{value}</p>
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-crane-orange text-sm font-semibold hover:underline"
                    >
                        {actionText}
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default ContactInfoCard;