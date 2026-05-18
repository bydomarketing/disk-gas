import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

const WHATSAPP_LINK = "https://wa.me/5511950760161?text=Olá! Gostaria de pedir um gás.";

export default function WhatsAppCTA() {
  return (
    <div className="mt-16 md:mt-24 p-8 md:p-12 bg-slate-50 rounded-[3rem] border border-slate-100 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-nacional-red/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-nacional-blue/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      
      <div className="relative z-10">
        <h3 className="text-3xl md:text-4xl font-black text-nacional-blue uppercase tracking-tighter mb-4 leading-none">
          Não fique sem <span className="text-nacional-red">cozinhar!</span>
        </h3>
        <p className="text-lg md:text-xl text-slate-600 font-bold mb-8 leading-tight">
          Peça seu gás agora e receba em minutos em qualquer lugar de Ribeirão Pires.
        </p>
        
        <div className="flex justify-center">
          <motion.a
            href={WHATSAPP_LINK}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl text-xl font-black flex items-center justify-center gap-4 transition-all shadow-xl shadow-green-900/20 w-full sm:w-auto uppercase tracking-tighter"
          >
            <MessageCircle className="w-7 h-7" />
            PEDIR PELO WHATSAPP
          </motion.a>
        </div>
      </div>
    </div>
  );
}
