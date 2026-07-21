import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, Truck, ShieldCheck, CheckCircle2, ChevronDown, 
  MapPin, Clock, Headset, Zap, Phone, ArrowRight, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';

const WHATSAPP_MAUA = "https://wa.me/5511933780522?text=Olá! Gostaria de pedir um gás de cozinha.";

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-12 px-4 md:py-20 ${className}`}>
    <div className="max-w-5xl mx-auto">
      {children}
    </div>
  </section>
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
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
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

export default function GasDeCozinhaMaua() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <SEO 
        title="Gás de Cozinha em Mauá com Entrega Rápida – Nacional Gás" 
        description="Peça gás de cozinha em Mauá com entrega rápida. Revenda autorizada Nacional Gás com loja em Ribeirão Pires atendendo toda Mauá. WhatsApp exclusivo (11) 93378-0522."
        canonical="/gas-de-cozinha-maua"
      />
      <Helmet>
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Vocês entregam em toda Mauá?","acceptedAnswer":{"@type":"Answer","text":"Sim. Atendemos todos os bairros de Mauá, incluindo Centro, Vila Assis Brasil, Vila Bocaina, Jardim Zaíra, Jardim Itapeva, Jardim Mauá, Parque São Vicente, Jardim Oratório, Parque das Américas, Vila Vitória e muito mais."}},{"@type":"Question","name":"Quanto tempo demora a entrega em Mauá?","acceptedAnswer":{"@type":"Answer","text":"A entrega é realizada entre 30 e 50 minutos após a confirmação do pedido, dependendo da localidade em Mauá."}},{"@type":"Question","name":"Como faço meu pedido de gás em Mauá?","acceptedAnswer":{"@type":"Answer","text":"Basta enviar uma mensagem pelo WhatsApp exclusivo de Mauá com seu endereço e a quantidade desejada. Em instantes confirmamos e saímos para a entrega."}},{"@type":"Question","name":"A empresa é revenda autorizada Nacional Gás?","acceptedAnswer":{"@type":"Answer","text":"Sim. Somos revenda oficial e autorizada da Nacional Gás, garantindo produto original, peso correto e botijões certificados em todas as entregas."}},{"@type":"Question","name":"Vocês entregam água mineral em Mauá?","acceptedAnswer":{"@type":"Answer","text":"Sim. Entregamos água mineral de 20 litros junto com o gás de cozinha, tudo no mesmo caminhão e com a mesma agilidade."}}]}`}</script>
      </Helmet>

      {/* HERO */}
      <section className="bg-nacional-blue py-20 md:py-32 text-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img 
                src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773769620/gas_de_cozinha_ribeirao_pires7_sw3zao.svg" 
                alt="Entrega de gás de cozinha Nacional Gás em Mauá" 
                className="rounded-[2.5rem] shadow-2xl border-4 border-white/20 rotate-2 w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-nacional-blue p-6 rounded-2xl shadow-xl font-black rotate-[-3deg]">
                <p className="text-sm uppercase tracking-widest">Cobertura em Mauá</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-left"
            >
              <h1 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">
                Gás de Cozinha em Mauá<br/>
                <span className="text-white text-2xl md:text-4xl block mt-4">com Entrega Rápida</span>
              </h1>
              <p className="text-xl font-bold mb-10 opacity-90 leading-tight">
                Nossa loja fica em Ribeirão Pires, mas entregamos em toda Mauá com a mesma agilidade. Somos revenda autorizada Nacional Gás — atendimento ágil, botijões de qualidade e segurança garantida. Peça pelo WhatsApp e receba rapidinho.
              </p>
              <a 
                href={WHATSAPP_MAUA}
                className="inline-flex items-center gap-4 bg-white text-nacional-blue px-10 py-5 rounded-2xl text-xl font-black hover:bg-slate-100 transition-all shadow-2xl uppercase tracking-tighter"
              >
                <MessageCircle className="w-6 h-6" />
                PEDIR PELO WHATSAPP
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <Section className="bg-slate-50">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-nacional-red font-black uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Vantagens para você
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter leading-none"
          >
            POR QUE PEDIR <span className="text-nacional-red">PELA NACIONAL GÁS?</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Zap className="text-nacional-red" />, title: "Entrega rápida em Mauá", desc: "Do pedido à sua porta em até 50 minutos. Conhecemos os atalhos de Mauá para entregar com agilidade." },
            { icon: <ShieldCheck className="text-nacional-blue" />, title: "Revenda autorizada", desc: "Somos revenda oficial da Nacional Gás. Cada botijão é original, com lacre intacto e procedência garantida." },
            { icon: <CheckCircle2 className="text-green-500" />, title: "Procedência e segurança", desc: "Pesagem rigorosa antes de cada entrega. Você recebe exatamente o que pagou, sem surpresas." },
            { icon: <Headset className="text-nacional-red" />, title: "Atendimento exclusivo para Mauá", desc: "WhatsApp dedicado para clientes de Mauá. Fale direto com nossa equipe, sem robôs e sem espera." }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-5">
                {React.cloneElement(card.icon as React.ReactElement, { className: "w-7 h-7" })}
              </div>
              <h3 className="font-bold text-lg mb-3 text-slate-900">{card.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* COMO FUNCIONA A ENTREGA */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773769617/gas_de_cozinha_ribeirao_pires6_silmlj.svg" 
              alt="Entregador Nacional Gás realizando entrega residencial em Mauá" 
              className="rounded-[2.5rem] shadow-2xl border-8 border-white w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-nacional-red font-black uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Processo de entrega
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter leading-none mb-10"
            >
              COMO FUNCIONA <span className="text-nacional-red">A ENTREGA</span>
            </motion.h2>

            <div className="space-y-6">
              {[
                { step: "01", title: "Entre em contato", desc: "Envie uma mensagem pelo WhatsApp exclusivo de Mauá. Informe seu endereço e a quantidade de botijões." },
                { step: "02", title: "Confirmação rápida", desc: "Nossa equipe confirma o pedido em instantes e informa o valor total. Sem surpresas, sem letreiro." },
                { step: "03", title: "Separamos seu pedido", desc: "Cada botijão é pesado e conferido antes de sair. Garantimos que tudo esteja correto antes da entrega." },
                { step: "04", title: "Entrega no seu endereço", desc: "Nosso entregador leva o gás até a sua porta. Pagamento no ato, direto com o motoboy. Rápido e prático." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-5 items-start"
                >
                  <div className="w-14 h-14 bg-nacional-blue text-white rounded-2xl flex items-center justify-center shrink-0 font-black text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ATENDIMENTO EM TODA MAUÁ */}
      <Section className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-nacional-red font-black uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Cobertura em Mauá
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter leading-none mb-8"
            >
              ATENDIMENTO <span className="text-nacional-red">EM TODA MAUÁ</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 text-lg text-slate-600 font-medium leading-relaxed"
            >
              <p>
                A Nacional Gás atende toda a cidade de Mauá com entrega direta e sem intermediários. Seja no Centro, onde o movimento é maior, na Vila Assis Brasil ou na Vila Bocaina, nosso compromisso é levar o gás até a sua casa com agilidade.
              </p>
              <p>
                Atendemos também o Jardim Zaíra, o Jardim Itapeva, o Jardim Mauá e o Parque São Vicente, regiões que já conhecemos bem e onde entregamos com frequência. Se você mora no Jardim Oratório, Parque das Américas ou na Vila Vitória, pode contar com a mesma rapidez e eficiência.
              </p>
              <p>
                Conhecemos cada bairro, cada rua e os horários de maior movimento de Mauá. Isso permite planejar a rota mais eficiente e garantir que seu pedido chegue rápido — sem enrolação. Se precisa de gás de cozinha em Mauá com entrega no mesmo dia, basta chamar no WhatsApp.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a 
                href={WHATSAPP_MAUA}
                className="inline-flex items-center gap-3 bg-nacional-blue hover:bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg uppercase tracking-wide text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                SOLICITAR ENTREGA
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773787433/2_r62cec.svg" 
              alt="Entrega de gás de cozinha em toda a cidade de Mauá" 
              className="rounded-[2.5rem] shadow-2xl border-8 border-white w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-nacional-blue p-6 rounded-2xl shadow-xl font-black rotate-[-3deg]">
              <MapPin className="w-6 h-6 text-nacional-red mb-2" />
              <p className="text-sm uppercase tracking-widest">Toda Mauá</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* REVENDA AUTORIZADA */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773769617/gas_de_cozinha_ribeirao_pires5_opncma.svg" 
              alt="Nacional Gás revenda autorizada atendendo Mauá" 
              className="rounded-[2.5rem] shadow-2xl border-8 border-white w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 12 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
              className="absolute -bottom-5 -right-5 md:-bottom-8 md:-right-8 bg-nacional-red text-white w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white z-20"
            >
              <Star className="w-6 h-6 md:w-8 md:h-8 fill-current mb-1" />
              <span className="text-[8px] md:text-xs font-black uppercase tracking-tighter text-center leading-tight">100%<br/>Original</span>
            </motion.div>
          </motion.div>

          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-nacional-red font-black uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Confiança que você pode ver
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter leading-none mb-8"
            >
              REVENDA AUTORIZADA <span className="text-nacional-red">NACIONAL GÁS</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 text-lg text-slate-600 font-medium leading-relaxed"
            >
              <p>
                Ao comprar numa revenda autorizada, você garante que o produto é original e passou por todos os controles de qualidade da fabricante. Nada de botijões recondicionados, adulterados ou com peso abaixo do que foi cobrado.
              </p>
              <p>
                Cada botijão que entregamos em Mauá possui lacre intacto, é pesado antes da saída e segue toda a cadeia de segurança exigida pela Nacional Gás. Trabalhamos assim há mais de 10 anos — com seriedade, transparência e respeito pelo cliente.
              </p>
              <p>
                Nossa loja fica em Ribeirão Pires, mas atendemos Mauá com a mesma dedicação e qualidade. A distância não é obstáculo para quem busca segurança e agilidade no fornecimento de gás de cozinha.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              {[
                { icon: <ShieldCheck className="w-5 h-5 text-nacional-blue" />, text: "Produto certificado" },
                { icon: <CheckCircle2 className="w-5 h-5 text-green-500" />, text: "Peso conferido" },
                { icon: <Truck className="w-5 h-5 text-nacional-red" />, text: "Entrega própria" },
                { icon: <Headset className="w-5 h-5 text-nacional-blue" />, text: "WhatsApp exclusivo Mauá" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {item.icon}
                  <span className="text-sm font-bold text-slate-700">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-nacional-blue mb-4 uppercase tracking-tighter">
                Perguntas <span className="text-nacional-red">Frequentes</span>
              </h2>
              <div className="w-24 h-2 bg-nacional-red mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-slate-500 font-medium">Tudo o que você precisa saber sobre entrega de gás em Mauá.</p>
            </motion.div>
          </div>

          <div className="bg-white rounded-3xl p-4 md:p-8 shadow-sm border border-slate-100">
            <div className="space-y-2">
              <FAQItem 
                question="Vocês entregam em toda Mauá?" 
                answer="Sim. Atendemos todos os bairros de Mauá: Centro, Vila Assis Brasil, Vila Bocaina, Jardim Zaíra, Jardim Itapeva, Jardim Mauá, Parque São Vicente, Jardim Oratório, Parque das Américas, Vila Vitória e todos os demais. Se é em Mauá, nós entregamos." 
              />
              <FAQItem 
                question="Quanto tempo demora a entrega em Mauá?" 
                answer="Nossa meta é entregar entre 30 e 50 minutos após a confirmação do pedido, dependendo da sua localidade em Mauá. Conhecemos a cidade bem o suficiente para escolher a rota mais rápida." 
              />
              <FAQItem 
                question="Como faço meu pedido de gás?" 
                answer="Basta enviar uma mensagem pelo WhatsApp exclusivo de Mauá, informando seu endereço, a quantidade de botijões e se deseja água mineral. Em instantes confirmamos e saímos para a entrega." 
              />
              <FAQItem 
                question="Posso pedir pelo WhatsApp?" 
                answer="Claro! Nosso WhatsApp exclusivo para Mauá é (11) 93378-0522. Você fala direto com nossa equipe, sem robôs, sem fila de espera. É o jeito mais rápido de fazer seu pedido." 
              />
              <FAQItem 
                question="Vocês entregam em meu bairro?" 
                answer="Sim, atendemos todos os bairros de Mauá. Seja no Centro, na Vila Assis Brasil, Vila Bocaina, Jardim Zaíra, Jardim Itapeva ou qualquer outro bairro, nossa equipe leva o gás até a sua porta." 
              />
              <FAQItem 
                question="A empresa é revenda autorizada Nacional Gás?" 
                answer="Sim. Somos revenda oficial e autorizada da Nacional Gás. Isso garante que todos os botijões entregues são originais, com lacre intacto e que seguem os rigorosos padrões de qualidade da fabricante." 
              />
              <FAQItem 
                question="Quais formas de pagamento são aceitas?" 
                answer="Aceitamos Pix, cartão de crédito, cartão de débito e dinheiro. O pagamento é feito no momento da entrega, direto com o motoboy. Você escolhe a forma que for mais conveniente." 
              />
              <FAQItem 
                question="Vocês entregam água mineral em Mauá?" 
                answer="Sim. Entregamos água mineral de 20 litros junto com o gás de cozinha, tudo no mesmo caminhão e com a mesma rapidez. Basta solicitar no momento do pedido pelo WhatsApp." 
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="bg-nacional-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">
              GÁS ACABOU EM MAUÁ?<br/>
              <span className="text-white text-2xl md:text-4xl block mt-4">A NACIONAL GÁS RESOLVE AGORA.</span>
            </h2>
            <p className="text-xl font-bold mb-10 opacity-90 leading-tight max-w-2xl mx-auto">
              Não perca tempo. Peça pelo WhatsApp exclusivo de Mauá e receba em minutos. Entrega rápida, peso garantido e atendimento de verdade.
            </p>
            <a 
              href={WHATSAPP_MAUA}
              className="inline-flex items-center gap-4 bg-white text-nacional-blue px-12 py-6 rounded-2xl text-xl font-black hover:bg-slate-100 transition-all shadow-2xl uppercase tracking-tighter"
            >
              <MessageCircle className="w-7 h-7" />
              PEDIR GÁS PELO WHATSAPP
            </a>
            <p className="mt-6 text-white/60 text-sm font-medium">
              WhatsApp exclusivo Mauá: (11) 93378-0522
            </p>
          </motion.div>
        </div>
      </Section>

      {/* LINKS INTERNOS */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-black text-nacional-blue uppercase tracking-tighter"
          >
            CONFIRA TAMBÉM
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { label: "Gás de Cozinha Ribeirão Pires", desc: "Entrega rápida de gás com loja própria em Ribeirão Pires.", href: "/gas-de-cozinha-ribeirao-pires", icon: <Truck className="w-6 h-6" /> },
            { label: "Água Mineral", desc: "Água mineral de 20L das melhores marcas, entrega no mesmo caminhão.", href: "/agua-mineral-ribeirao-pires", icon: <CheckCircle2 className="w-6 h-6" /> },
            { label: "Gás do Povo", desc: "Beneficiário do governo? Sua recarga é garantida aqui.", href: "/gas-do-povo-ribeirao-pires", icon: <ShieldCheck className="w-6 h-6" /> },
            { label: "Sobre Nós", desc: "Mais de 10 anos de tradição e confiança na região.", href: "/sobre-nos", icon: <Star className="w-6 h-6" /> },
            { label: "Blog", desc: "Dicas de segurança, receitas e tudo sobre gás de cozinha.", href: "/blog", icon: <Headset className="w-6 h-6" /> }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={item.href}
                className="group flex items-start gap-4 bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-100 hover:border-nacional-blue/20 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-nacional-blue/10 text-nacional-blue rounded-xl flex items-center justify-center shrink-0 group-hover:bg-nacional-blue group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 group-hover:text-nacional-blue transition-colors mb-1">{item.label}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-nacional-blue group-hover:translate-x-1 transition-all shrink-0 mt-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
