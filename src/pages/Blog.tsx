import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Facebook, Instagram } from 'lucide-react';
import { articles } from '../data/articles';
import BlogCard from '../components/BlogCard';
import SEO from '../components/SEO';

const WHATSAPP_LINK = "https://wa.me/5511950760161?text=Olá! Gostaria de pedir um gás.";
const FACEBOOK_LINK = "https://www.facebook.com/people/Diskgasdecozinha-Nacional-Gas/pfbid02bsYJLPtzkMEMzaFkqp6xwSZgmFUQ375U2A6xTddvtrGiWu3PR2ffbLRejwnRUhnEl/";
const INSTAGRAM_LINK = "https://www.instagram.com/diskgasdecozinha.nacionalgas/";
const GOOGLE_MAPS_LINK = "https://www.google.com/maps?sca_esv=4ae20d8bd47daad1&output=search&q=nacional+gas+em+santa+luzia+ribeirao+pires&source=lnms&fbs=ADc_l-acAb_3MMOAUx0zmbUpgBqRuweMR6bfOpj9a0gCa_xFt1zigmJhliJsoTZAqvO7YjNqvECqJyHcucT6SvCRq4iI2pblmVi1tfZ4EA_MceO-AEmXmajTtib7OosMAtVl1m1iaqRZvDymqiM12_XulMnMgNEBXrh38-3R9AwSTWxRw7J40Ijk3tH1ExEXGBF5G8j8fiW9ZGz-Gt9dZQxNhTbL8XLpzA&entry=mc&ved=1t:200715&ictx=111";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pt-24">
      <SEO 
        title="Blog - Dicas sobre Gás e Água em Ribeirão Pires" 
        description="Acompanhe as dicas e novidades da Nacional Gás Ribeirão Pires no nosso blog."
        canonical="/blog"
      />
      <main className="flex-1">
        {/* Hero Section do Blog */}
        <section className="bg-white py-16 md:py-24 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-block bg-nacional-blue/10 text-nacional-blue px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                CONTEÚDO EXCLUSIVO
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-6">
                Blog <span className="text-nacional-red">Nacional Gás</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                Dicas de segurança, receitas deliciosas e tudo o que você precisa saber sobre o uso consciente do gás de cozinha.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Grid de Artigos */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {articles.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BlogCard article={article} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contato" className="bg-nacional-blue text-white pt-20 pb-10 px-4 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-nacional-red/10 rounded-full blur-3xl -mb-48 -mr-48"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div className="space-y-6">
              <img 
                src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773838165/nacional-gas_chuksa.svg" 
                alt="Nacional Gás Logo" 
                className="h-20 w-auto"
                referrerPolicy="no-referrer"
              />
              <p className="text-white/60 leading-relaxed font-medium text-lg">
                Sua revenda autorizada de confiança. Compromisso com a segurança da sua família e a agilidade no seu dia a dia.
              </p>
              <div className="flex gap-4">
                <motion.a 
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }} 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }} 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              </div>
            </div>

            <div>
              <h4 className="font-black text-white mb-8 uppercase tracking-widest text-sm border-l-4 border-nacional-red pl-4">Onde Estamos</h4>
              <ul className="space-y-6">
                <li className="flex gap-4 group cursor-pointer">
                  <a 
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-nacional-red rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-white/80 font-medium leading-tight">R. Prof. Antônio Nunes, 484 - Santa Luzia<br/>Ribeirão Pires - SP, 09430-380</span>
                  </a>
                </li>
                <li className="flex gap-4 group cursor-pointer">
                  <a href={WHATSAPP_LINK} className="flex gap-4">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-white/80 font-medium text-lg">(11) 95076-0161</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-white mb-8 uppercase tracking-widest text-sm border-l-4 border-nacional-red pl-4">Atendimento</h4>
              <ul className="space-y-4">
                <li className="bg-white/5 p-4 rounded-2xl border border-white/10 flex justify-between items-center">
                  <span className="text-white/60 font-bold uppercase text-xs tracking-widest">Seg — Sáb</span>
                  <span className="font-black text-lg">08h às 20h</span>
                </li>
                <li className="bg-white/5 p-4 rounded-2xl border border-white/10 flex justify-between items-center">
                  <span className="text-white/60 font-bold uppercase text-xs tracking-widest">Dom — Fer</span>
                  <span className="font-black text-lg">08h às 14h</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col items-center gap-6 text-white/40 text-[10px] md:text-xs font-bold uppercase tracking-widest text-center">
            <p>Todos os direitos reservados Nacional Gás Ribeirão Pires © 2026. Desenvolvido por <a href="https://bydomarketing.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Bydo Marketing</a>.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
