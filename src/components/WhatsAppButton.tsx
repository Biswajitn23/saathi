import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "911234567890"; // Change this to your actual number
  const message = "Hello Saathi Group, I have a question about a project.";

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
      <div className="relative">
        {/* The Animated Pulse (The "Ring" around the button) */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />

        <motion.a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-8 w-8 fill-current" />
          
          {/* Small Green Dot (Online Status) */}
          <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
             <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default WhatsAppButton;