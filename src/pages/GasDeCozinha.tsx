import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, Truck, ShieldCheck, CheckCircle2, ChevronDown, 
  MapPin, Clock, Headset, Zap, Phone, ArrowRight, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';

const WHATSAPP_LINK = "https://wa.me/5511950760161?text=Olá! Gostaria de pedir um gás de cozinha.";

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

export default function GasDeCozinha() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <SEO 
        title="Gás de Cozinha Ribeirão Pires | Nacional Gás" 
        description="Peça gás de cozinha em Ribeirão Pires com entrega rápida. Revenda autorizada Nacional Gás. Atendimento humano pelo WhatsApp, peso garantido e botijões certificados."
        canonical="/gas-de-cozinha-ribeirao-pires"
      />
      <Helmet>
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Quanto tempo demora a entrega de gás em Ribeirão Pires?","acceptedAnswer":{"@type":"Answer","text":"A entrega é realizada entre 20 e 40 minutos após a confirmação do pedido, dependendo da localidade em Ribeirão Pires."}},{"@type":"Question","name":"A Nacional Gás é revenda autorizada?","acceptedAnswer":{"@type":"Answer","text":"Sim. Somos revenda autorizada Nacional Gás em Ribeirão Pires, garantindo produto original, peso correto e botijões certificados."}},{"@type":"Question","name":"Quais formas de pagamento são aceitas?","acceptedAnswer":{"@type":"Answer","text":"Aceitamos Pix, cartão de crédito e débito, e dinheiro. A pagamento é feito no momento da entrega."}},{"@type":"Question","name":"Vocês entregam água mineral junto com o gás?","acceptedAnswer":{"@type":"Answer","text":"Sim. Entregamos água mineral de 20 litros junto com o gás de cozinha, tudo no mesmo caminhão e com a mesma agilidade."}},{"@type":"Question","name":"Como pedir gás pelo WhatsApp?","acceptedAnswer":{"@type":"Answer","text":"Basta clicar no botão de WhatsApp, enviar seu endereço e a quantidade desejada. Em minutos confirmamos e saímos para a entrega."}}]}`}</script>
      </Helmet>

      {/* HERO */}
      <section className="bg-nacional-red py-20 md:py-32 text-white overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <img 
                src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773762910/NACIONAL_GAS_FOTO_T_OPO_DE_SITE_1920X1080_ytuuoe.svg" 
                alt="Entrega de gás de cozinha Nacional Gás em Ribeirão Pires" 
                className="rounded-[2.5rem] shadow-2xl border-4 border-white/20 rotate-2 w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-nacional-red p-6 rounded-2xl shadow-xl font-black rotate-[-3deg]">
                <p className="text-sm uppercase tracking-widest">Rápido e Seguro</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-left"
            >
              <h1 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">
                Gás de Cozinha em Ribeirão Pires<br/>
                <span className="text-white text-2xl md:text-4xl block mt-4">com Entrega Rápida</span>
              </h1>
              <p className="text-xl font-bold mb-10 opacity-90 leading-tight">
                Somos revenda autorizada Nacional Gás em Ribeirão Pires. Entrega rápida, atendimento humanizado e botijões com peso e segurança garantidos. Peça agora pelo WhatsApp e receba em minutos.
              </p>
              <a 
                href={WHATSAPP_LINK}
                className="inline-flex items-center gap-4 bg-white text-nacional-red px-10 py-5 rounded-2xl text-xl font-black hover:bg-slate-100 transition-all shadow-2xl uppercase tracking-tighter"
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
            Por que escolher a gente
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter leading-none"
          >
            VANTAGENS DE PEDIR <span className="text-nacional-red">PELA NACIONAL GÁS</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Zap className="text-nacional-red" />, title: "Entrega rápida", desc: "Seu gás chega entre 20 e 40 minutos. Conhecemos cada rua de Ribeirão Pires para entregar no menor tempo possível." },
            { icon: <ShieldCheck className="text-nacional-blue" />, title: "Revenda autorizada", desc: "Somos revenda oficial Nacional Gás. Produto original, procedência garantida e botijões que seguem rigorosos padrões de qualidade." },
            { icon: <CheckCircle2 className="text-green-500" />, title: "Peso e segurança garantidos", desc: "Cada botijão passa por conferência de peso e revisão antes de chegar até você. Zero surpresas." },
            { icon: <Headset className="text-nacional-red" />, title: "Atendimento pelo WhatsApp", desc: "Fale diretamente com nossa equipe. Sem robôs, sem filas. Atendimento humano, rápido e eficiente." }
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

      {/* COMO FUNCIONA */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773769620/gas_de_cozinha_ribeirao_pires7_sw3zao.svg" 
              alt="Entregador Nacional Gás realizando entrega residencial em Ribeirão Pires" 
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
              Como funciona
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter leading-none mb-10"
            >
              SIMPLES, <span className="text-nacional-red">RÁPIDO E SEGURO</span>
            </motion.h2>

            <div className="space-y-6">
              {[
                { step: "01", title: "Faça seu pedido", desc: "Entre em contato pelo WhatsApp, informe seu endereço e a quantidade de botijões que você precisa." },
                { step: "02", title: "Separamos seu pedido", desc: "Nossa equipe separa e conferir o peso de cada botijão para garantir que tudo esteja correto." },
                { step: "03", title: "Entregamos com rapidez", desc: "Nosso entregador sai imediatamente para o seu endereço. A maioria das entregas é concluída em até 40 minutos." },
                { step: "04", title: "Você recebe com segurança", desc: "Botijão certificado, com lacre intacto e peso exato. Pronto para uso com total tranquilidade." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-5 items-start"
                >
                  <div className="w-14 h-14 bg-nacional-red text-white rounded-2xl flex items-center justify-center shrink-0 font-black text-lg">
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

      {/* ATENDIMENTO EM RIBEIRÃO PIRES */}
      <Section className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-nacional-red font-black uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Cobertura local
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter leading-none mb-8"
            >
              ATENDIMENTO <span className="text-nacional-red">EM RIBEIRÃO PIRES</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 text-lg text-slate-600 font-medium leading-relaxed"
            >
              <p>
                A Nacional Gás atende todos os bairros de Ribeirão Pires com entrega direta e sem intermediários. Seja na Santa Luzia, Jardim São Paulo, Vila Elizabeth, Parque das Nações ou qualquer outro bairro, nosso compromisso é levar o gás até a sua casa com agilidade.
              </p>
              <p>
                Conhecemos as ruas, os atalhos e os horários de maior movimento da cidade. Isso nos permite planejar a rota mais eficiente e garantir que seu pedido chegue rápido — sem atrasos, sem complicação.
              </p>
              <p>
                Se você precisa de gás de cozinha em Ribeirão Pires com entrega no mesmo dia, basta nos chamar no WhatsApp. Atendemos de segunda a sábado das 8h às 20h, e domingos e feriados das 8h às 14h.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a 
                href={WHATSAPP_LINK}
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
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773769617/gas_de_cozinha_ribeirao_pires6_silmlj.svg" 
              alt="Entrega de gás de cozinha nos bairros de Ribeirão Pires" 
              className="rounded-[2.5rem] shadow-2xl border-8 border-white w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-nacional-blue p-6 rounded-2xl shadow-xl font-black rotate-[-3deg]">
              <MapPin className="w-6 h-6 text-nacional-red mb-2" />
              <p className="text-sm uppercase tracking-widest">Todos os bairros</p>
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
              alt="Nacional Gás revenda autorizada em Ribeirão Pires" 
              className="rounded-[2.5rem] shadow-2xl border-8 border-white w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 12 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
              className="absolute -bottom-5 -right-5 md:-bottom-8 md:-right-8 bg-nacional-blue text-white w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white z-20"
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
              Autoridade no assunto
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
                Ao comprar numa revenda autorizada, você garante que o produto que chega até você é original, tem procedência comprovada e passou por todos os controles de qualidade da Nacional Gás. Nada de botijões recondicionados ou com peso adulterado.
              </p>
              <p>
                Cada botijão que entregamos possui lacre intacto, é pesado antes da saída e segue toda a cadeia de segurança exigida pela fabricante. É assim que trabalhamos há mais de 10 anos em Ribeirão Pires — com seriedade, transparência e compromisso com a segurança da sua família.
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
                { icon: <Headset className="w-5 h-5 text-nacional-blue" />, text: "Suporte humano" }
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
              <p className="text-xl text-slate-500 font-medium">Tudo o que você precisa saber antes de fazer seu pedido.</p>
            </motion.div>
          </div>

          <div className="bg-white rounded-3xl p-4 md:p-8 shadow-sm border border-slate-100">
            <div className="space-y-2">
              <FAQItem 
                question="Quanto tempo demora a entrega de gás em Ribeirão Pires?" 
                answer="Nossa meta é entregar entre 20 e 40 minutos após a confirmação do pedido, dependendo da sua localidade. Conhecemos cada rua e atalho de Ribeirão Pires para chegar até você no menor tempo possível." 
              />
              <FAQItem 
                question="A Nacional Gás é revenda autorizada?" 
                answer="Sim. Somos revenda oficial e autorizada da Nacional Gás em Ribeirão Pires. Isso significa que todos os nossos botijões são originais, possuem lacre intacto e seguem os rigorosos padrões de qualidade da fabricante." 
              />
              <FAQItem 
                question="Quais formas de pagamento são aceitas?" 
                answer="Aceitamos Pix, cartão de crédito, cartão de débito e dinheiro. O pagamento é realizado no momento da entrega, direto com o motoboy. A escolha é sua." 
              />
              <FAQItem 
                question="Vocês entregam água mineral junto com o gás?" 
                answer="Sim! Entregamos água mineral de 20 litros junto com o gás de cozinha. Tudo no mesmo caminhão, com a mesma agilidade e sem custo adicional de frete. Basta solicitar no momento do pedido." 
              />
              <FAQItem 
                question="Como pedir gás pelo WhatsApp?" 
                answer="É muito simples: clique no botão de WhatsApp nesta página, envie sua mensagem informando o endereço, a quantidade de botijões e se deseja água mineral. Em instantes confirmamos seu pedido e saímos para a entrega." 
              />
              <FAQItem 
                question="Atendem em quais bairros de Ribeirão Pires?" 
                answer="Atendemos todos os bairros de Ribeirão Pires: Santa Luzia, Jardim São Paulo, Vila Elizabeth, Parque das Nações, Centro, Vila Industrial, Jardim Presidente Dutra, entre outros. Se é em Ribeirão Pires, nós entregamos." 
              />
              <FAQItem 
                question="O gás que vocês entregam é seguro?" 
                answer="Totalmente seguro. Todo botijão passa por conferência de peso, revisão e mantém o lacre original intacto. Somos revenda autorizada, o que garante procedência e qualidade em cada entrega." 
              />
              <FAQItem 
                question="Vocês funcionam aos domingos e feriados?" 
                answer="Sim. Atendemos de segunda a sábado das 8h às 20h, e domingos e feriados das 8h às 14h. Mesmo nos feriados, nossa equipe está pronta para atender você com a mesma agilidade." 
              />
            </div>
          </div>
        </div>
      </Section>

      {/* CTA FINAL */}
      <Section className="bg-nacional-red text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">
              GÁS ACABOU?<br/>
              <span className="text-white text-2xl md:text-4xl block mt-4">A NACIONAL GÁS RESOLVE AGORA.</span>
            </h2>
            <p className="text-xl font-bold mb-10 opacity-90 leading-tight max-w-2xl mx-auto">
              Não deixe para depois. Peça seu gás de cozinha pelo WhatsApp e receba em minutos. Entrega rápida, peso garantido e atendimento de verdade.
            </p>
            <a 
              href={WHATSAPP_LINK}
              className="inline-flex items-center gap-4 bg-white text-nacional-red px-12 py-6 rounded-2xl text-xl font-black hover:bg-slate-100 transition-all shadow-2xl uppercase tracking-tighter"
            >
              <MessageCircle className="w-7 h-7" />
              PEDIR GÁS PELO WHATSAPP
            </a>
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
            { label: "Gás de Cozinha Mauá", desc: "Entrega rápida de gás em Mauá com a Nacional Gás.", href: "/gas-de-cozinha-maua", icon: <Truck className="w-6 h-6" /> },
            { label: "Água Mineral", desc: "Água mineral de 20L das melhores marcas, entrega no mesmo caminhão.", href: "/agua-mineral-ribeirao-pires", icon: <CheckCircle2 className="w-6 h-6" /> },
            { label: "Gás do Povo", desc: "Beneficiário do governo? Sua recarga é garantida aqui.", href: "/gas-do-povo-ribeirao-pires", icon: <ShieldCheck className="w-6 h-6" /> },
            { label: "Sobre Nós", desc: "Mais de 10 anos de tradição e confiança em Ribeirão Pires.", href: "/sobre-nos", icon: <Star className="w-6 h-6" /> },
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
