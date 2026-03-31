import React, { useState, useEffect, useCallback } from 'react';
import { 
  MessageCircle, 
  Truck, 
  ShieldCheck, 
  Clock, 
  Droplets, 
  CheckCircle2, 
  ChevronDown, 
  Handshake,
  MapPin, 
  Phone,
  Star,
  CreditCard,
  Calendar,
  Zap,
  Headset,
  Facebook,
  Instagram
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_LINK = "https://wa.me/5511950760161?text=Olá! Gostaria de pedir um gás.";
const FACEBOOK_LINK = "https://www.facebook.com/people/Diskgasdecozinha-Nacional-Gas/pfbid02bsYJLPtzkMEMzaFkqp6xwSZgmFUQ375U2A6xTddvtrGiWu3PR2ffbLRejwnRUhnEl/";
const INSTAGRAM_LINK = "https://www.instagram.com/diskgasdecozinha.nacionalgas/";
const GOOGLE_MAPS_LINK = "https://www.google.com/maps?sca_esv=4ae20d8bd47daad1&output=search&q=nacional+gas+em+santa+luzia+ribeirao+pires&source=lnms&fbs=ADc_l-acAb_3MMOAUx0zmbUpgBqRuweMR6bfOpj9a0gCa_xFt1zigmJhliJsoTZAqvO7YjNqvECqJyHcucT6SvCRq4iI2pblmVi1tfZ4EA_MceO-AEmXmajTtib7OosMAtVl1m1iaqRZvDymqiM12_XulMnMgNEBXrh38-3R9AwSTWxRw7J40Ijk3tH1ExEXGBF5G8j8fiW9ZGz-Gt9dZQxNhTbL8XLpzA&entry=mc&ved=1t:200715&ictx=111";

const GoogleReviewCard = ({ name, text, stars = 5, time = "há 2 dias" }: { name: string, text: string, stars?: number, time?: string, key?: React.Key }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
    className="bg-white rounded-[16px] p-5 shadow-sm border border-slate-100 flex flex-col min-w-[280px] md:min-w-[260px] h-full transition-all duration-300 cursor-pointer"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-full bg-nacional-blue/10 flex items-center justify-center text-nacional-blue font-bold text-lg">
        {name[0]}
      </div>
      <div className="flex-1">
        <p className="font-bold text-sm text-slate-900 leading-none mb-1">{name}</p>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: stars }).map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-[#FBBC04] text-[#FBBC04]" />
            ))}
          </div>
          <span className="text-[10px] text-slate-400 uppercase tracking-widest">{time}</span>
        </div>
      </div>
      <div className="w-6 h-6 bg-slate-50 rounded-full flex items-center justify-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" alt="Google" className="w-3 h-3" />
      </div>
    </div>
    <p className="text-sm text-slate-600 font-medium leading-relaxed line-clamp-4 italic">
      "{text}"
    </p>
    <div className="mt-auto pt-4 flex items-center gap-1 text-[10px] font-black text-green-600 uppercase tracking-tighter">
      <CheckCircle2 className="w-3 h-3" />
      Avaliação Verificada
    </div>
  </motion.div>
);

const TestimonialCarousel = () => {
  const testimonials = [
    { name: "Ialle 3101", text: "Bruno e Adriana são super prestativos e educados sempre que eu preciso de um gás de qualidade eles tem disponível tanto gás e agua mineral .", time: "Há 5 semanas" },
    { name: "katia Regina", text: "Atendimento top", time: "Há 7 semanas" },
    { name: "Maria Elena", text: "Ótimo atendimento. Entrega rápida", time: "Há 8 semanas" },
    { name: "Leandro Rodrigues", text: "Preço muito bom.....E o atendimento fenomenal....Gostei muito do atendimento..", time: "Há 8 semanas" },
    { name: "Jaque Ribeiro", text: "Ótimo atendimento! Rápidos no atendimento e também na entrega!", time: "Há 8 semanas" },
    { name: "Fabio Adriano", text: "Atendimento exemplar, produto de procedência e boa qualidade. Já sou cliente e não compro em outro lugar jamais", time: "Há 8 semanas" },
    { name: "Cris Carvalho", text: "Entrega rápida, e exelente atendimento, índico para todos", time: "Há 8 semanas" },
    { name: "Walter Souza", text: "Parabéns pelo atendimento super indico", time: "Há 8 semanas" },
    { name: "José Roberto Simões", text: "Entrega super rápido, entregador educado, super recomendo", time: "Há 8 semanas" },
    { name: "mauricio edson Souza", text: "são muito prestativos e eficiente,", time: "Há 8 semanas" },
    { name: "Marcos Henrique", text: "Melhor gás de Mauá, atendimento rápido e preço muito acessível", time: "Há 8 semanas" },
    { name: "Denis Robertosibem", text: "Gás de ótima qualidade, e ótimo atendimento aos clientes!...", time: "Há 8 semanas" },
    { name: "Willian Pereira", text: "Tem preço e qualidade, esse eu confio.", time: "Há 8 semanas" },
  ];

  // Double the array for seamless loop
  const doubledTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full py-10 overflow-hidden">
      {/* Gradient masks for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F8F9FA] via-[#F8F9FA]/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F8F9FA] via-[#F8F9FA]/80 to-transparent z-10 pointer-events-none"></div>

      <motion.div 
        className="flex gap-6 px-6"
        animate={{ x: [0, -3692] }} // (260px width + 24px gap) * 13 items = 3692px
        transition={{ 
          duration: 45, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{ width: "fit-content" }}
      >
        {doubledTestimonials.map((t, i) => (
          <GoogleReviewCard key={i} name={t.name} text={t.text} time={t.time} />
        ))}
      </motion.div>
    </div>
  );
};

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-12 px-4 md:py-20 ${className}`}>
    <div className="max-w-5xl mx-auto">
      {children}
    </div>
  </section>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string, key?: React.Key }) => (
  <div className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 ${className}`}>
    {children}
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left hover:text-nacional-blue transition-colors"
      >
        <span className="font-semibold text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-slate-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header for Mobile Conversion */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <motion.a
          href={WHATSAPP_LINK}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center ripple-effect"
        >
          <MessageCircle className="w-8 h-8" />
        </motion.a>
      </div>      {/* Navigation / Top Bar */}
      <nav className="bg-transparent absolute top-0 left-0 right-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773838165/nacional-gas_chuksa.svg" 
              alt="Nacional Gás Logo" 
              className="h-8 md:h-12 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={WHATSAPP_LINK}
              className="bg-nacional-red hover:bg-red-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm font-black flex items-center gap-2 transition-all shadow-xl active:translate-y-1"
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              PEDIR AGORA
            </a>
          </div>
        </div>
      </nav>

      {/* SEÇÃO 1: Hero - High Impact */}
      <section className="relative h-[100dvh] md:h-[850px] flex items-center md:items-start overflow-hidden pt-16 md:pt-28">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773762910/NACIONAL_GAS_FOTO_T_OPO_DE_SITE_1920X1080_ytuuoe.svg" 
            alt="Nacional Gás Ribeirão Pires - Topo do Site" 
            className="w-full h-full object-cover object-[60%_center] md:object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 w-full relative z-10 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[70%] md:max-w-2xl"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-block bg-nacional-blue text-white px-3 py-1 md:px-6 md:py-2 rounded-full text-[10px] md:text-sm font-black uppercase tracking-widest mb-20 md:mb-8 shadow-2xl"
            >
              🚀 ENTREGA MAIS RÁPIDA DA CIDADE
            </motion.div>
            
            <h1 className="text-3xl md:text-7xl font-black text-white leading-[0.9] mb-4 md:mb-8 uppercase tracking-tighter drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
              GÁS DE COZINHA <br/>
              EM <span className="text-nacional-red">RIBEIRÃO PIRES</span>
            </h1>
            
            <p className="text-base md:text-3xl text-white mb-6 md:mb-12 leading-tight font-bold drop-shadow-lg max-w-lg">
              Somos distribuidor autorizada da Nacional Gás em Ribeirão Pires com entrega rápida e preço justo. <br className="hidden md:block"/><br className="hidden md:block"/>
              Disk gás de cozinha agora mesmo!
            </p>

            <div className="flex items-center gap-4">
              {/* Red Button - Aligned left */}
              <motion.div 
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="inline-flex bg-nacional-red text-white p-3.5 md:p-6 rounded-2xl shadow-2xl border-2 md:border-4 border-white flex-col items-center justify-center -rotate-2"
              >
                <span className="text-base md:text-2xl font-black uppercase tracking-tighter italic">chega rapidinho!</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 2: Gás do Povo - White background, light gray card */}
      <Section className="bg-white py-24 relative z-20">
        <Card className="bg-slate-50 overflow-hidden relative border-0 shadow-xl rounded-[3rem] p-10 md:p-16">
          <div className="md:flex items-center gap-12 relative z-10">
            <div className="flex-1">
              <div className="inline-block bg-nacional-blue text-white px-4 py-1 rounded-full text-xs font-black uppercase mb-6">PARCEIRO OFICIAL</div>
              <h2 className="text-4xl md:text-6xl font-black text-nacional-blue mb-6 leading-none uppercase tracking-tighter">
                AQUI TEM<br/><span className="text-nacional-red">GÁS DO POVO!</span> 🤝
              </h2>
              <p className="text-slate-700 text-xl font-bold leading-tight mb-6 md:mb-10">
                Beneficiário do Governo? Sua recarga é garantida aqui em Ribeirão Pires. Simples, seguro e sem burocracia.
              </p>

              {/* Mobile Image - Only visible on mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="md:hidden mb-10 flex justify-center"
              >
                <img 
                  src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773769617/gas_de_cozinha_ribeirao_pires6_silmlj.svg" 
                  alt="Gás do Povo" 
                  className="w-full max-w-[280px] h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                <div className="bg-slate-50 p-6 rounded-3xl border-2 border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-nacional-blue text-white rounded-2xl flex items-center justify-center shrink-0">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <p className="font-black text-nacional-blue text-lg leading-none uppercase">Aceitamos<br/>o Cartão</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border-2 border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-nacional-red text-white rounded-2xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <p className="font-black text-nacional-red text-lg leading-none uppercase">Recarga<br/>Garantida</p>
                </div>
              </div>

              <a 
                href={WHATSAPP_LINK}
                className="inline-flex items-center gap-4 bg-nacional-blue hover:bg-blue-900 text-white px-10 py-5 rounded-2xl text-xl font-black transition-all shadow-xl w-full sm:w-auto justify-center uppercase tracking-tighter"
              >
                <MessageCircle className="w-6 h-6" />
                CONSULTAR PELO WHATSAPP
              </a>
            </div>
            
            <div className="hidden md:block w-2/5 shrink-0 invisible">
              {/* Spacer to keep layout balance while image is absolute */}
            </div>
          </div>

          {/* Imagem de fundo animada */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute right-[-5%] bottom-[-10%] w-1/2 h-[120%] pointer-events-none z-0 hidden md:block"
          >
            <motion.img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773769617/gas_de_cozinha_ribeirao_pires6_silmlj.svg" 
              alt="Gás do Povo Background" 
              animate={{ 
                y: [0, -30, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-full h-full object-contain opacity-100"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </Card>
      </Section>

      {/* Seção: Por que escolher a gente? - Vibrant Cards */}
      <Section className="bg-white py-32">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black text-nacional-blue uppercase tracking-tighter mb-4"
          >
            POR QUE <span className="text-nacional-red">ESCOLHER</span> A GENTE?
          </motion.h2>
          <div className="h-3 bg-nacional-red w-48 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Zap />, title: "Entrega Expressa ⚡", desc: "Seu gás na porta entre 20 a 40 minutos. Agilidade real.", color: "bg-nacional-red" },
            { icon: <CreditCard />, title: "Pague na Entrega 💳", desc: "Aceitamos Pix, Cartão ou Dinheiro. Praticidade total.", color: "bg-nacional-blue" },
            { icon: <Headset />, title: "Atendimento Humano 🤝", desc: "Fale com pessoas de verdade. Sem robôs.", color: "bg-green-500" },
            { icon: <ShieldCheck />, title: "Nacional Gás Oficial 🛡️", desc: "Revenda Autorizada com peso garantido.", color: "bg-nacional-red" }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-2 border-slate-50 relative overflow-hidden group"
            >
              <div className={`w-20 h-20 ${card.color} text-white rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:rotate-12 transition-transform`}>
                {React.cloneElement(card.icon as React.ReactElement, { className: "w-10 h-10" })}
              </div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4 leading-none">{card.title}</h3>
              <p className="text-slate-600 font-bold text-lg leading-tight">{card.desc}</p>
              {i === 3 && <div className="absolute top-0 right-0 w-24 h-24 bg-nacional-blue/10 rounded-full -mr-12 -mt-12"></div>}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SEÇÃO: Nossa História - About the Company */}
      <Section id="sobre" className="bg-slate-50 py-32 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-nacional-red font-black uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Sobre nós
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-nacional-blue uppercase tracking-tighter leading-none mb-8"
          >
            MAIS DE 10 ANOS ENTREGANDO <span className="text-nacional-red">CONFIANÇA</span> EM RIBEIRÃO PIRES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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
      </Section>
      
      {/* SEÇÃO: Combo Gás + Água - SEO Strategic Section based on Instagram Post */}
      <Section className="bg-slate-50 relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-nacional-blue/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-nacional-red/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block bg-nacional-red text-white px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-6">
              SOLUÇÃO COMPLETA EM RIBEIRÃO PIRES
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-nacional-blue mb-6 leading-none uppercase tracking-tighter">
              AQUI VOCÊ <span className="text-nacional-red">ENCONTRA</span> TUDO!
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-bold text-slate-700 mb-8 leading-tight">
              Água mineral e gás de cozinha em um só lugar. Facilitamos sua vida com entrega combinada!
            </h3>

            {/* Image moved below the phrase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-10 max-w-2xl mx-auto"
            >
              <div className="relative">
                <img 
                  src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773787433/2_r62cec.svg" 
                  alt="Solução Completa Gás e Água" 
                  className="rounded-[3rem] shadow-2xl w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <div className="space-y-6 mb-10 text-left md:text-center">
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Por que pedir em dois lugares diferentes se você pode receber tudo de uma vez? Somos a sua distribuidora de confiança em Ribeirão Pires para <strong>Gás de Cozinha (P13)</strong> e <strong>Água Mineral de 20 Litros</strong>.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {[
                  "Entrega unificada",
                  "Água sempre fresca",
                  "Gás com peso garantido",
                  "Aceitamos Gás do Povo",
                  "Pagamento facilitado",
                  "Atendimento via WhatsApp"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <a 
                href={WHATSAPP_LINK}
                className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl text-xl font-black flex items-center justify-center gap-4 transition-all shadow-[0_6px_0_rgb(21,128,61)] active:translate-y-1 active:shadow-none w-full sm:w-auto uppercase tracking-tighter"
              >
                <MessageCircle className="w-7 h-7" />
                CHAMA NO ZAP AGORA
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
      <Section className="bg-nacional-red py-24 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773769620/gas_de_cozinha_ribeirao_pires7_sw3zao.svg" 
                alt="Entrega de Gás Nacional Gás" 
                className="rounded-[2.5rem] shadow-2xl border-4 border-white/20 rotate-2 w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-nacional-red p-6 rounded-2xl shadow-xl font-black rotate-[-3deg]">
                <p className="text-sm uppercase tracking-widest">Rápido e Seguro</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">
                NÃO FIQUE NA MÃO!<br/>
                <span className="text-white text-2xl md:text-4xl block mt-4">PEÇA SEU GÁS DE COZINHA EM RIBEIRÃO PIRES AQUI.</span>
              </h2>
              <p className="text-xl font-bold mb-10 opacity-90 leading-tight">
                A panela está no fogo e o gás acabou? Não entre em pânico. A Nacional Gás resolve seu problema em minutos com atendimento humano e entrega ultra rápida.
              </p>
              <a 
                href={WHATSAPP_LINK}
                className="inline-flex items-center gap-4 bg-white text-nacional-red px-10 py-5 rounded-2xl text-xl font-black hover:bg-slate-100 transition-all shadow-2xl uppercase tracking-tighter"
              >
                <MessageCircle className="w-6 h-6" />
                PEDIR AGORA PELO WHATSAPP
              </a>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <Truck className="text-nacional-red" />, title: "Entrega rápida", desc: "Em todos os bairros de Ribeirão Pires." },
            { icon: <ShieldCheck className="text-nacional-blue" />, title: "Segurança Total", desc: "Botijões novos, revisados e certificados." },
            { icon: <CheckCircle2 className="text-green-500" />, title: "Pesagem Garantida", desc: "Peso exato garantido pela Nacional Gás." }
          ].map((item, i) => (
            <Card key={i} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-slate-500">{item.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* SEÇÃO 4: Água Mineral - Cross-sell */}
      <Section className="bg-gradient-to-br from-blue-50 to-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-black mb-6 uppercase tracking-widest">
              <Droplets className="w-4 h-4" />
              Combo Praticidade
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-nacional-blue mb-6 leading-tight uppercase italic tracking-tighter">
              Aproveite que já pediu o gás e peça sua <span className="text-nacional-red">Água Mineral</span> também!
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
              Trabalhamos com as melhores marcas de água mineral 20L. Higiene garantida e entrega no mesmo caminhão do seu gás.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href={WHATSAPP_LINK}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-nacional-blue hover:bg-blue-800 text-white px-8 py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/20 group"
              >
                <Droplets className="w-6 h-6 group-hover:animate-bounce" />
                ADICIONAR ÁGUA AO PEDIDO
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl scale-75"></div>
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773837259/combo_vndmn1.svg" 
              alt="Combo Praticidade - Gás e Água" 
              className="relative z-10 rounded-3xl shadow-2xl border-8 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-nacional-red text-white p-3 md:p-6 rounded-xl md:rounded-2xl shadow-xl font-black text-center z-20 rotate-3">
              <p className="text-[8px] md:text-xs uppercase tracking-widest mb-0.5 md:mb-1">Qualidade</p>
              <p className="text-lg md:text-3xl">Garantida</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* SEÇÃO 5: Prova Social - Interactive Carousel Full Width */}
      <section className="bg-[#F8F9FA] py-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center mb-8 px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase italic tracking-tighter text-nacional-blue">
              Quem pede, <span className="text-nacional-red">recomenda!</span>
            </h2>
            <p className="text-xl text-slate-600 font-bold max-w-2xl mx-auto leading-tight">
              Confira as avaliações reais de quem já conhece nossa agilidade e confiança em Ribeirão Pires.
            </p>
          </motion.div>
        </div>

        <TestimonialCarousel />

        <div className="max-w-5xl mx-auto flex justify-center mt-12 px-4 relative z-10">
          <motion.a 
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl text-xl font-black flex items-center gap-4 transition-all shadow-xl shadow-green-900/20 uppercase tracking-tighter"
          >
            <Star className="w-6 h-6 fill-current" />
            CONFERIR TODAS AS AVALIAÇÕES NO GOOGLE
          </motion.a>
        </div>
      </section>

      {/* SEÇÃO 6: FAQ - Clean & Modern */}
      <Section id="faq" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-nacional-blue mb-4 uppercase italic tracking-tighter">Dúvidas <span className="text-nacional-red">Frequentes</span></h2>
              <div className="w-24 h-2 bg-nacional-red mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-slate-500 font-medium">Tudo o que você precisa saber antes de fazer seu pedido.</p>
            </motion.div>
          </div>
          <div className="bg-slate-50 rounded-3xl p-4 md:p-8 shadow-inner border border-slate-100">
            <div className="space-y-2">
              <FAQItem 
                question="Qual o tempo médio de entrega?" 
                answer="Nossa meta é entregar entre 20 a 40 minutos. Ribeirão Pires é nossa casa, conhecemos cada atalho para chegar rápido até você." 
              />
              <FAQItem 
                question="Quais as formas de pagamento aceitas?" 
                answer="Aceitamos Pix (com confirmação na hora), todos os cartões de débito e crédito, e dinheiro. O entregador leva a maquininha até você." 
              />
              <FAQItem 
                question="Vocês entregam aos Domingos e Feriados?" 
                answer="Sim! Funcionamos todos os dias. De Segunda a Sábado das 08h às 20h. Domingos e Feriados das 08h às 14h. O gás não escolhe dia para acabar!" 
              />
              <FAQItem 
                question="Posso usar o benefício Gás do Povo?" 
                answer="Com certeza! Somos revenda credenciada. Basta informar no WhatsApp que deseja usar seu benefício e ter o cartão ou CPF em mãos." 
              />
            </div>
          </div>
        </div>
      </Section>

      {/* SEÇÃO 7: Localização - Google Maps */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter mb-4">NOSSA <span className="text-nacional-red">LOCALIZAÇÃO</span></h2>
            <p className="text-xl text-slate-500 font-medium italic">Venha nos visitar ou peça sua entrega!</p>
          </motion.div>
          
          <div className="w-[80%] mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-100 h-[450px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.887640428587!2d-46.4069444!3d-23.7155556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce150000000000%3A0x0!2zMjPCsDQyJzU2LjAiUyA0NsKwMjQnMjUuMCJX!5e0!3m2!1spt-BR!2sbr!4v1710680000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Nacional Gás Ribeirão Pires"
            ></iframe>
          </div>
          
          <div className="mt-10">
            <a 
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-nacional-blue font-black uppercase tracking-widest hover:text-nacional-red transition-colors"
            >
              <MapPin className="w-6 h-6" />
              Ver no Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8: Rodapé - Professional & Trustworthy */}
      <footer className="bg-nacional-blue text-white pt-20 pb-10 px-4 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-nacional-red/10 rounded-full blur-3xl -mb-48 -mr-48"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img 
                  src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773838165/nacional-gas_chuksa.svg" 
                  alt="Nacional Gás Logo" 
                  className="h-20 w-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
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
                    <span className="text-white/80 font-medium leading-tight">Rua Professor Antônio Nunes, 484<br/>Santa Luzia, Ribeirão Pires — SP</span>
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
            <p>Todos os direitos reservados Nacional Gás Ribeirão Pires © 2026. Desenvolvido por Bydo Marketing.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
