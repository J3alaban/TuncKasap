import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const ReviewCard = ({ review }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
            {/* Rating */}
            <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`h-5 w-5 ${
                            i < review.rating
                                ? 'text-[#FF7F50] fill-[#FF7F50]'
                                : 'text-gray-300'
                        }`}
                    />
                ))}
            </div>

            {/* Comment */}
            <p className="text-gray-700 mb-4 leading-relaxed">
                "{review.comment}"
            </p>

            {/* Author */}
            <div className="flex items-center justify-between border-t pt-3">
                <div>
                    <p className="font-semibold text-gray-800">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <div className="bg-[#FFDAB9] rounded-full p-3">
                    <div className="text-2xl">✍️</div>
                </div>
            </div>
        </motion.div>
    );
};

export default ReviewCard;