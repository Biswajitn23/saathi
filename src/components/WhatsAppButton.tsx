import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "911234567890"; // Change this to your actual number
  const message = "Hello Saathi Group, I have a question about a project.";

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[100] flex flex-col items-start gap-3">
      <div className="relative">
        {/* The Animated Pulse (The "Ring" around the button) */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse opacity-25" />

        <motion.a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 32 32" className="h-7 w-7 sm:h-8 sm:w-8 fill-current" aria-hidden="true">
            <path d="M19.11 17.36c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.14-1.13-.41-2.15-1.3-.79-.7-1.33-1.57-1.49-1.84-.16-.27-.02-.41.12-.55.12-.12.27-.31.41-.46.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.46-.84-2-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.97 2.63 1.11 2.82c.14.18 1.9 2.9 4.6 4.06.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
            <path d="M16.01 3C8.84 3 3 8.84 3 16.01c0 2.3.6 4.55 1.73 6.54L3 29l6.64-1.72a12.95 12.95 0 0 0 6.37 1.64h.01C23.18 28.92 29 23.08 29 15.91 29 8.74 23.18 3 16.01 3zm0 23.66h-.01a10.7 10.7 0 0 1-5.47-1.5l-.39-.23-3.94 1.02 1.05-3.84-.25-.4a10.68 10.68 0 0 1-1.65-5.69C5.35 10.09 10.09 5.35 16.01 5.35c2.87 0 5.57 1.12 7.59 3.14a10.66 10.66 0 0 1 3.14 7.58c0 5.92-4.82 10.59-10.73 10.59z" />
          </svg>
          
          {/* Small Green Dot (Online Status) */}
           <div className="absolute top-1 right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white rounded-full flex items-center justify-center">
             <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full" />
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default WhatsAppButton;