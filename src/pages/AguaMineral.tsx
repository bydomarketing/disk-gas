import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Droplets, CheckCircle2, MessageCircle, ChevronDown, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const WHATSAPP_LINK = "https://wa.me/5511950760161?text=Olá! Gostaria de pedir água mineral.";
const WHATSAPP_MAUA = "https://wa.me/5511933780522?text=Olá! Gostaria de pedir água mineral.";

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

export default function AguaMineral() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <SEO 
        title="Água Mineral em Ribeirão Pires | Nacional Gás" 
        description="Compre água mineral de 20 litros das melhores marcas em Ribeirão Pires. Higiene garantida e entrega rápida. Peça agora!"
        canonical="/agua-mineral-ribeirao-pires"
      />
      
      <section className="bg-gradient-to-br from-blue-50 to-white overflow-hidden relative py-20 md:py-32">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-black mb-6 uppercase tracking-widest">
                <Droplets className="w-4 h-4" />
                Água Mineral 20L
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-nacional-blue mb-6 leading-tight uppercase italic tracking-tighter">
                Sede? Peça sua <span className="text-nacional-red">Água Mineral</span> com a gente!
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed font-medium">
                Trabalhamos com as melhores marcas de água mineral de 20 Litros. Qualidade, procedência e higiene garantida na entrega.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Galões higienizados e lacrados",
                  "Marcas com baixo teor de sódio",
                  "Armazenamento adequado",
                  "Entrega expressa"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700 font-bold">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a 
                  href={WHATSAPP_LINK}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-nacional-blue hover:bg-blue-800 text-white px-8 py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/20 group uppercase tracking-tighter"
                >
                  <Droplets className="w-6 h-6 group-hover:animate-bounce" />
                  PEDIR ÁGUA AGORA
                </motion.a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl scale-75"></div>
              <img 
                src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773837259/combo_vndmn1.svg" 
                alt="Combo Praticidade - Gás e Água" 
                className="relative z-10 rounded-3xl shadow-2xl border-8 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-700 w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 bg-nacional-red text-white p-3 md:p-6 rounded-xl md:rounded-2xl shadow-xl font-black text-center z-20 rotate-3">
                <p className="text-[8px] md:text-xs uppercase tracking-widest mb-0.5 md:mb-1">Qualidade</p>
                <p className="text-lg md:text-3xl">Garantida</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARCAS DE ÁGUA MINERAL */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter leading-tight mb-6">
              As melhores marcas de água mineral<br/>
              <span className="text-nacional-red">para Ribeirão Pires e Mauá</span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                Sabemos que a qualidade da água faz diferença na saúde e no bem-estar. Por isso, trabalhamos com marcas reconhecidas pela qualidade, procedência e rigor no processo de envase.
              </p>
              <p>
                Na Nacional Gás você encontra galões de 20 litros das marcas <strong>K2O Fontágua</strong> e <strong>Olímpica Crystal</strong>, entregues com rapidez para residências, empresas, escritórios, comércios e consultórios em Ribeirão Pires e Mauá.
              </p>
              <p>
                Todos os galões são entregues lacrados, armazenados corretamente e transportados com os cuidados necessários para preservar a qualidade da água até chegar ao consumidor.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                brand: "K2O Fontágua",
                desc: "Água mineral natural de excelente procedência, produzida com rigorosos padrões de qualidade e ideal para o consumo diário.",
                logo: "https://res.cloudinary.com/dplhygs4v/image/upload/v1784659678/K2O-familia-fontagua.png_v2eo2l.webp"
              },
              {
                brand: "Olímpica Crystal",
                desc: "Água mineral reconhecida pela qualidade e confiabilidade, oferecendo uma excelente opção para residências e empresas.",
                logo: "https://res.cloudinary.com/dplhygs4v/image/upload/v1784659799/Captura_de_tela_de_2026-07-21_15-49-53_bct9fd.png"
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-full flex items-center justify-center mb-6">
                  <img
                    src={card.logo}
                    alt={`Logo ${card.brand}`}
                    className="w-full max-w-[260px] h-40 md:h-48 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-black text-xl text-slate-900 uppercase tracking-tight mb-3">{card.brand}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO 1 — PEDIDO PELO WHATSAPP */}
      <section className="py-16 md:py-24 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://res.cloudinary.com/dplhygs4v/image/upload/v1784659678/K2O-familia-fontagua.png_v2eo2l.webp" 
                alt="Logo K2O Fontágua" 
                className="rounded-[2.5rem] shadow-2xl border-8 border-white w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-nacional-blue uppercase tracking-tighter leading-tight mb-6">
                Esqueceu de comprar água?<br/>
                <span className="text-nacional-red">Nós entregamos em Ribeirão Pires e Mauá</span>
              </h2>

              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-6">
                Além do gás de cozinha, também realizamos a entrega de água mineral de 20 litros para residências, empresas, escritórios, comércios, clínicas e consultórios.
              </p>
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-8">
                O pedido é simples. Escolha a cidade, fale com a equipe pelo WhatsApp, informe a quantidade de galões e o endereço da entrega. Nossa equipe confirma o pedido e encaminha a água até você com rapidez e segurança.
              </p>

              <div className="inline-block bg-nacional-blue/10 text-nacional-blue px-4 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-8">
                Água Mineral 20L com entrega rápida
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center gap-3 bg-nacional-blue hover:bg-blue-800 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg uppercase tracking-wide text-sm justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Pedir em Ribeirão Pires
                </a>
                <a 
                  href={WHATSAPP_MAUA}
                  className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg uppercase tracking-wide text-sm justify-center"
                >
                  <MessageCircle className="w-5 h-5" />
                  Pedir em Mauá
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO 2 — COMO PEDIR ÁGUA MINERAL */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter leading-none"
            >
              COMO PEDIR <span className="text-nacional-red">SUA ÁGUA MINERAL</span>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Escolha sua cidade", desc: "Selecione o atendimento de Ribeirão Pires ou Mauá." },
              { step: "02", title: "Fale pelo WhatsApp", desc: "Informe a quantidade de galões de 20 litros que deseja pedir." },
              { step: "03", title: "Envie seu endereço", desc: "Passe o endereço completo e confirme os dados da entrega." },
              { step: "04", title: "Receba seu pedido", desc: "A equipe realiza a entrega da água mineral no local informado." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100"
              >
                <div className="w-14 h-14 bg-nacional-blue text-white rounded-2xl flex items-center justify-center mx-auto mb-5 font-black text-lg">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO 3 — PERGUNTAS FREQUENTES */}
      <section className="py-16 md:py-24 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter leading-none mb-4"
            >
              Perguntas frequentes<br/>
              <span className="text-nacional-red">sobre entrega de água mineral</span>
            </motion.h2>
            <div className="w-24 h-2 bg-nacional-red mx-auto rounded-full"></div>
          </div>

          <div className="bg-white rounded-3xl p-4 md:p-8 shadow-sm border border-slate-100">
            <div className="space-y-2">
              <FAQItem 
                question="Vocês entregam água mineral em Ribeirão Pires e Mauá?" 
                answer="Sim. Realizamos entregas de água mineral de 20 litros em Ribeirão Pires e Mauá. O cliente deve selecionar o WhatsApp correspondente à sua cidade." 
              />
              <FAQItem 
                question="Quais marcas de água mineral vocês vendem?" 
                answer="Trabalhamos com galões de 20 litros das marcas K2O Fontágua e Olímpica Crystal." 
              />
              <FAQItem 
                question="Como faço para pedir água mineral?" 
                answer="Basta clicar no botão de WhatsApp da sua cidade, informar a quantidade desejada e enviar o endereço da entrega." 
              />
              <FAQItem 
                question="Vocês entregam para empresas e comércios?" 
                answer="Sim. Atendemos residências, empresas, escritórios, comércios, clínicas e consultórios em Ribeirão Pires e Mauá." 
              />
              <FAQItem 
                question="Os galões são entregues lacrados?" 
                answer="Sim. Os galões são armazenados corretamente e entregues lacrados, preservando a qualidade e a procedência do produto." 
              />
              <FAQItem 
                question="É possível pedir mais de um galão?" 
                answer="Sim. O cliente pode informar pelo WhatsApp a quantidade necessária para sua residência ou empresa." 
              />
            </div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO 4 — CTA FINAL */}
      <section className="py-16 md:py-24 px-4 bg-nacional-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
              PEÇA AGORA SUA ÁGUA MINERAL<br/>
              <span className="text-white text-xl md:text-3xl block mt-4">EM RIBEIRÃO PIRES OU MAUÁ</span>
            </h2>
            <p className="text-xl font-bold mb-10 opacity-90 leading-tight max-w-2xl mx-auto">
              Escolha sua cidade e faça o pedido diretamente pelo WhatsApp. Atendimento rápido para sua casa ou empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={WHATSAPP_LINK}
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-5 rounded-2xl font-black transition-all shadow-xl uppercase tracking-tighter justify-center"
              >
                <MessageCircle className="w-6 h-6" />
                Pedir em Ribeirão Pires
              </a>
              <a 
                href={WHATSAPP_MAUA}
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-5 rounded-2xl font-black transition-all shadow-xl uppercase tracking-tighter justify-center"
              >
                <MessageCircle className="w-6 h-6" />
                Pedir em Mauá
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
