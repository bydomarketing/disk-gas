import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, Facebook, Instagram, Calendar, User, Tag } from 'lucide-react';
import { articles } from '../data/articles';
import Breadcrumbs from '../components/Breadcrumbs';
import WhatsAppCTA from '../components/WhatsAppCTA';

const WHATSAPP_LINK = "https://wa.me/5511950760161?text=Olá! Gostaria de pedir um gás.";
const FACEBOOK_LINK = "https://www.facebook.com/people/Diskgasdecozinha-Nacional-Gas/pfbid02bsYJLPtzkMEMzaFkqp6xwSZgmFUQ375U2A6xTddvtrGiWu3PR2ffbLRejwnRUhnEl/";
const INSTAGRAM_LINK = "https://www.instagram.com/diskgasdecozinha.nacionalgas/";
const GOOGLE_MAPS_LINK = "https://www.google.com/maps?sca_esv=4ae20d8bd47daad1&output=search&q=nacional+gas+em+santa+luzia+ribeirao+pires&source=lnms&fbs=ADc_l-acAb_3MMOAUx0zmbUpgBqRuweMR6bfOpj9a0gCa_xFt1zigmJhliJsoTZAqvO7YjNqvECqJyHcucT6SvCRq4iI2pblmVi1tfZ4EA_MceO-AEmXmajTtib7OosMAtVl1m1iaqRZvDymqiM12_XulMnMgNEBXrh38-3R9AwSTWxRw7J40Ijk3tH1ExEXGBF5G8j8fiW9ZGz-Gt9dZQxNhTbL8XLpzA&entry=mc&ved=1t:200715&ictx=111";

import SEO from '../components/SEO';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-white flex flex-col pt-24">
      <SEO 
        title={`${article.title} - Nacional Gás`} 
        description={article.excerpt || `Leia sobre ${article.title} no blog da Nacional Gás.`}
        canonical={`/blog/${slug}`}
        type="article"
      />
      <main className="flex-1 pb-20">
        {/* Header do Artigo */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs 
              items={[
                { label: 'Blog', href: '/blog' },
                { label: article.title }
              ]} 
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <span className="text-xs md:text-sm font-black uppercase tracking-[0.3em] text-nacional-red mb-4 block">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-6xl font-black text-nacional-blue leading-[1.1] mb-8 uppercase tracking-tighter">
                {article.h1}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-12">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-nacional-red" />
                  12 de Maio, 2026
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-nacional-red" />
                  Nacional Gás
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4 text-nacional-red" />
                  Ribeirão Pires
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl mb-16 md:mb-20 aspect-video"
            >
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Conteúdo do Artigo */}
            <div className="max-w-[800px] mx-auto prose prose-slate prose-lg">
              {article.content.map((block, index) => {
                if (block.type === 'h2') {
                  return (
                    <h2 key={index} className="text-2xl md:text-4xl font-black text-nacional-blue mt-12 mb-6 uppercase tracking-tight leading-tight">
                      {block.value}
                    </h2>
                  );
                }
                if (block.type === 'box') {
                  return (
                    <div key={index} className="my-10 p-8 md:p-10 bg-blue-50/50 rounded-[2rem] border-l-8 border-nacional-blue relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-nacional-blue/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                      <h4 className="text-xl md:text-2xl font-black text-nacional-blue uppercase tracking-tight mb-4 relative z-10">
                        {block.title}
                      </h4>
                      <div className="text-slate-700 font-bold leading-relaxed relative z-10 italic">
                        {block.value.split('\n').map((line, i) => {
                          if (line.trim().startsWith('•')) {
                            return (
                              <div key={i} className="flex gap-3 mb-1 ml-2">
                                <span className="text-nacional-blue font-black">•</span>
                                <span>{line.trim().substring(1).trim()}</span>
                              </div>
                            );
                          }
                          return (
                            <p key={i} className={line.trim() === '' ? 'h-3' : 'mb-3'}>
                              {line}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={index} className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-6">
                    {block.value.split('\n').map((line, i) => {
                      if (line.trim().startsWith('•')) {
                        return (
                          <div key={i} className="flex gap-3 mb-2 ml-4">
                            <span className="text-nacional-red font-black">•</span>
                            <span>{line.trim().substring(1).trim()}</span>
                          </div>
                        );
                      }
                      if (/^\d+\./.test(line.trim())) {
                        const dotIndex = line.indexOf('.');
                        const number = line.substring(0, dotIndex);
                        const text = line.substring(dotIndex + 1);
                        return (
                          <div key={i} className="flex gap-3 mb-2 ml-4">
                            <span className="text-nacional-red font-black">{number}.</span>
                            <span>{text.trim()}</span>
                          </div>
                        );
                      }
                      return (
                        <p key={i} className={line.trim() === '' ? 'h-4' : 'mb-4'}>
                          {line}
                        </p>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            {/* CTA Final */}
            <WhatsAppCTA />
          </div>
        </section>
      </main>

      {/* Footer minimalista para o Blog */}
      <footer className="bg-nacional-blue text-white pt-16 pb-8 px-4 relative overflow-hidden mt-auto">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-nacional-red/10 rounded-full blur-3xl -mb-48 -mr-48"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-4">
              <img 
                src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773838165/nacional-gas_chuksa.svg" 
                alt="Nacional Gás Logo" 
                className="h-12 w-auto brightness-0 invert opacity-90"
                referrerPolicy="no-referrer"
              />
              <p className="text-white/60 font-medium text-sm">
                Sua revenda autorizada de confiança em Ribeirão Pires.
              </p>
            </div>
            <div>
              <h4 className="font-black text-white mb-6 uppercase tracking-widest text-sm border-l-4 border-nacional-red pl-4">Contato</h4>
              <ul className="space-y-4">
                <li>
                  <a href={WHATSAPP_LINK} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                    <Phone className="w-4 h-4 text-nacional-red" />
                    <span className="font-medium text-sm">(11) 95076-0161</span>
                  </a>
                </li>
                <li>
                  <a href={GOOGLE_MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                    <MapPin className="w-4 h-4 text-nacional-red" />
                    <span className="font-medium text-sm leading-tight">R. Prof. Antônio Nunes, 484 - Santa Luzia<br/>Ribeirão Pires - SP, 09430-380</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-6 uppercase tracking-widest text-sm border-l-4 border-nacional-red pl-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-white/40 text-[10px] font-bold uppercase tracking-widest">
            <p>Todos os direitos reservados Nacional Gás Ribeirão Pires © 2026. Desenvolvido por <a href="https://bydomarketing.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Bydo Marketing</a>.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
