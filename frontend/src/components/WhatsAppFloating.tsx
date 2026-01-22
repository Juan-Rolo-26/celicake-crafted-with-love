import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppFloating = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/543515157731?text=Hola!%20Quiero%20hacer%20un%20pedido",
      "_blank"
    );
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary shadow-elevated flex items-center justify-center text-secondary"
      aria-label="Contactar por WhatsApp"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <MessageCircle size={26} />
      </motion.div>
    </motion.button>
  );
};

export default WhatsAppFloating;
