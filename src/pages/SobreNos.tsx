import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Handshake, Headset } from 'lucide-react';
import SEO from '../components/SEO';

export default function SobreNos() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <SEO 
        title="Sobre Nós - Nacional Gás Ribeirão Pires" 
        description="Conheça a história da Nacional Gás em Ribeirão Pires. Mais de 10 anos entregando gás de cozinha com segurança, confiança e agilidade."
        canonical="/sobre-nos"
      />
      
      <section className="bg-slate-50 py-20 md:py-32 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-nacional-red font-black uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Sobre nós
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black text-nacional-blue uppercase tracking-tighter leading-none mb-8"
            >
              MAIS DE 10 ANOS ENTREGANDO <span className="text-nacional-red">CONFIANÇA</span> EM RIBEIRÃO PIRES
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed"
            >
              Nascemos como uma empresa familiar e crescemos com um único propósito: garantir que o gás nunca falte na mesa das famílias da nossa região. Hoje, somos referência em Ribeirão Pires pela agilidade e pelo respeito ao cliente.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-nacional-blue/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 h-full">
                <img 
                  src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773769617/gas_de_cozinha_ribeirao_pires5_opncma.svg" 
                  alt="Nossa História" 
                  className="rounded-[3rem] shadow-2xl border-8 border-white w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Selo de 10 Anos */}
                <motion.div 
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 12 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                  className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 bg-nacional-red text-white w-20 h-20 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center shadow-2xl border-2 md:border-4 border-white z-20"
                >
                  <span className="text-xl md:text-5xl font-black leading-none">10</span>
                  <span className="text-[8px] md:text-sm font-black uppercase tracking-tighter">Anos de</span>
                  <span className="text-[8px] md:text-sm font-black uppercase tracking-tighter">Tradição</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-6 text-xl text-slate-600 font-medium leading-relaxed">
                <p className="border-l-4 border-nacional-red pl-6 italic bg-white p-6 rounded-2xl shadow-sm">
                  Como Revenda Autorizada Nacional Gás, entregamos muito mais do que um botijão azul; entregamos segurança, peso garantido e a certeza de um produto original que segue os mais rígidos padrões de qualidade.
                </p>
              </div>

              <div className="mt-12 space-y-6">
                <h3 className="text-2xl font-black text-nacional-blue uppercase tracking-tight">Por que escolher a nossa distribuidora?</h3>
                
                <div className="grid gap-4">
                  {[
                    { title: "Tradição Local", desc: "Conhecemos cada rua e atalho de Ribeirão para chegar mais rápido.", icon: <MapPin className="w-5 h-5" /> },
                    { title: "Compromisso Social", desc: "Parceiros orgulhosos do programa Gás do Povo.", icon: <Handshake className="w-5 h-5" /> },
                    { title: "Atendimento Humano", desc: "Aqui você fala com gente de verdade, pronta para resolver seu problema.", icon: <Headset className="w-5 h-5" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-10 h-10 bg-nacional-blue/10 text-nacional-blue rounded-xl flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-black text-nacional-blue uppercase text-sm mb-1">{item.title}</h4>
                        <p className="text-slate-500 text-sm font-bold">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
