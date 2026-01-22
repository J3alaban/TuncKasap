import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { toast } = useToast();

    const handleQuickAdd = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, 1);
        toast({
            title: "Sepete Eklendi! 🎉",
            description: `${product.name} sepetinize eklendi.`,
        });
    };

    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group"
        >
            <Link to={`/urun/${product.id}`}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    {/* Image */}
                    <div className="relative overflow-hidden h-64 bg-gray-100">
                        <motion.img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                            {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                            {product.shortDescription}
                        </p>
                        <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-[#FF7F50]">
                ₺{product.price.toFixed(2)}
              </span>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Button
                                    onClick={handleQuickAdd}
                                    className="bg-[#FF7F50] hover:bg-[#ff6a3d] text-white rounded-full p-3"
                                    size="icon"
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                </Button>
                            </motion.div>
                        </div>
                        <Button
                            className="w-full mt-4 bg-[#FFDAB9] hover:bg-[#ffcda3] text-gray-800 rounded-xl font-semibold"
                        >
                            Detayları Gör
                        </Button>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProductCard;