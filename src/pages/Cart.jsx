import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
    const { toast } = useToast();
    const navigate = useNavigate();

    const handleRemove = (productId, productName) => {
        removeFromCart(productId);
        toast({
            title: "Ürün Kaldırıldı",
            description: `${productName} sepetinizden çıkarıldı.`,
        });
    };

    const handleCheckout = () => {
        toast({
            title: "🚧 Bu özellik henüz hazır değil!",
            description: "Ödeme sistemi yakında aktif olacak. Bir sonraki istekte bu özelliği talep edebilirsiniz! 🚀",
        });
    };

    const handleClearCart = () => {
        clearCart();
        toast({
            title: "Sepet Temizlendi",
            description: "Tüm ürünler sepetinizden kaldırıldı.",
        });
    };

    if (cartItems.length === 0) {
        return (
            <>
                <Helmet>
                    <title>{"Sepetim - KalemKraft"}</title>
                    <meta name="description" content="Alışveriş sepetinizi görüntüleyin" />
                </Helmet>

                <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ShoppingBag className="h-32 w-32 text-gray-300 mx-auto mb-6" />
                        </motion.div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Sepetiniz Boş</h2>
                        <p className="text-gray-600 mb-8">Harika ürünlerimize göz atmaya başlayın!</p>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                                onClick={() => navigate('/')}
                                className="bg-[#FF7F50] hover:bg-[#ff6a3d] text-white px-8 py-6 rounded-2xl text-lg font-semibold"
                            >
                                Alışverişe Başla
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>{`Sepetim (${cartItems.length}) - KalemKraft`}</title>
                <meta name="description" content="Alışveriş sepetinizi görüntüleyin ve siparişinizi tamamlayın" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">Alışveriş Sepetim</h1>
                        <p className="text-gray-600">{cartItems.length} ürün sepetinizde</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cartItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                                >
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        {/* Image */}
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full sm:w-32 h-32 object-cover rounded-xl"
                                        />

                                        {/* Details */}
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                                            <p className="text-gray-600 text-sm mb-4">{item.shortDescription}</p>

                                            <div className="flex items-center justify-between">
                                                {/* Quantity Controls */}
                                                <div className="flex items-center bg-gray-100 rounded-xl">
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="p-2 text-gray-600 hover:text-[#FF7F50] transition-colors"
                                                    >
                                                        <Minus className="h-4 w-4" />
                                                    </motion.button>
                                                    <span className="px-4 font-bold text-gray-800">{item.quantity}</span>
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="p-2 text-gray-600 hover:text-[#FF7F50] transition-colors"
                                                    >
                                                        <Plus className="h-4 w-4" />
                                                    </motion.button>
                                                </div>

                                                {/* Price */}
                                                <div className="text-right">
                                                    <p className="text-2xl font-bold text-[#FF7F50]">
                                                        ₺{(item.price * item.quantity).toFixed(2)}
                                                    </p>
                                                    <p className="text-sm text-gray-500">
                                                        ₺{item.price.toFixed(2)} / adet
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Remove Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.1, rotate: 10 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => handleRemove(item.id, item.name)}
                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                        >
                                            <Trash2 className="h-6 w-6" />
                                        </motion.button>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Clear Cart Button */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Button
                                    onClick={handleClearCart}
                                    variant="outline"
                                    className="w-full border-2 border-gray-300 hover:border-red-500 hover:text-red-500 rounded-xl py-3"
                                >
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Sepeti Temizle
                                </Button>
                            </motion.div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
                            >
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">Sipariş Özeti</h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Ara Toplam</span>
                                        <span className="font-semibold">₺{getCartTotal().toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Kargo</span>
                                        <span className="font-semibold text-green-600">Ücretsiz</span>
                                    </div>
                                    <div className="border-t pt-4">
                                        <div className="flex justify-between text-xl font-bold text-gray-800">
                                            <span>Toplam</span>
                                            <span className="text-[#FF7F50]">₺{getCartTotal().toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        onClick={handleCheckout}
                                        className="w-full bg-[#FF7F50] hover:bg-[#ff6a3d] text-white py-6 rounded-2xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all"
                                    >
                                        Ödemeye Geç
                                        <ArrowRight className="h-5 w-5 ml-2" />
                                    </Button>
                                </motion.div>

                                <p className="text-sm text-gray-500 text-center mt-4">
                                    Güvenli ödeme • 100% güvenli işlem
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;