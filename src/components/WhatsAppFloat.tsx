import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_LINK = "https://wa.me/5511950760161?text=Olá! Gostaria de pedir um gás.";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar pelo WhatsApp"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 flex items-center justify-center rounded-full shadow-2xl"
          style={{ backgroundColor: '#25D366' }}
        >
          {/* Ícone oficial do WhatsApp */}
          <svg
            viewBox="0 0 32 32"
            className="w-9 h-9"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M16.004 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.35.637 4.56 1.748 6.468L2.667 29.333l7.07-1.716A13.276 13.276 0 0 0 16.004 29.333C23.37 29.333 29.333 23.37 29.333 16S23.37 2.667 16.004 2.667zm0 2.4c5.86 0 10.596 4.736 10.596 10.6 0 5.862-4.736 10.6-10.596 10.6a10.568 10.568 0 0 1-5.517-1.543l-.395-.24-4.195 1.018 1.055-4.07-.263-.41A10.559 10.559 0 0 1 5.404 16c0-5.864 4.736-10.6 10.6-10.6zm-3.09 5.067c-.215 0-.564.08-.86.4-.296.32-1.133 1.107-1.133 2.697 0 1.59 1.16 3.127 1.32 3.343.16.216 2.28 3.48 5.527 4.74 2.67 1.055 3.248.847 3.834.793.585-.053 1.89-.773 2.158-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373-.32-.16-1.89-.933-2.182-1.04-.293-.106-.507-.16-.72.16-.213.32-.826 1.04-.973 1.253-.146.214-.294.24-.614.08-.32-.16-1.35-.497-2.571-1.587-.95-.847-1.593-1.893-1.78-2.213-.186-.32-.02-.493.14-.653.144-.143.32-.374.48-.56.16-.187.213-.32.32-.533.106-.214.053-.4-.027-.56-.08-.16-.706-1.72-.976-2.36-.254-.613-.517-.52-.72-.52z"/>
          </svg>

          {/* Pulso animado */}
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: '#25D366' }}
            animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
          />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
