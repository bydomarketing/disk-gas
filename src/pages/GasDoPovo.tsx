import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, ShieldCheck, CheckCircle2, ChevronDown, 
  Clock, Headset, Zap, ArrowRight, FileCheck, HelpCircle, Store, CreditCard
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Helmet } from 'react-helmet-async';

const WHATSAPP_LINK = "https://wa.me/5511950760161?text=Olá! Gostaria de saber mais sobre o Gás do Povo.";

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
        <h3 className="font-semibold text-lg">{question}</h3>
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

export default function GasDoPovo() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <SEO 
        title="Gás do Povo em Ribeirão Pires - Nacional Gás" 
        description="Beneficiário do Gás do Povo? Utilize seu benefício na Nacional Gás em Ribeirão Pires. Revenda participante do programa, atendimento rápido e sem burocracia."
        canonical="/gas-do-povo-ribeirao-pires"
      />
      <Helmet>
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"O que é o Programa Gás do Povo?","acceptedAnswer":{"@type":"Answer","text":"O Programa Gás do Povo é uma política pública do Governo Federal que concede a gratuidade da recarga do botijão de GLP de 13 kg para famílias de baixa renda elegíveis, contribuindo para a segurança alimentar e qualidade de vida."}},{"@type":"Question","name":"Quem pode receber o benefício?","acceptedAnswer":{"@type":"Answer","text":"Famílias inscritas no Cadastro Único (CadÚnico) e selecionadas pelos órgãos responsáveis, conforme as regras vigentes do programa."}},{"@type":"Question","name":"Como saber se tenho direito ao benefício?","acceptedAnswer":{"@type":"Answer","text":"O direito ao benefício depende da inscrição no CadÚnico e da seleção realizada pelo Governo Federal. Você pode verificar sua situação pelo aplicativo CadÚnico ou entrando em contato com nossa equipe pelo WhatsApp."}},{"@type":"Question","name":"Como utilizar o benefício na Nacional Gás?","acceptedAnswer":{"@type":"Answer","text":"Basta entrar em contato pelo WhatsApp, confirmar sua elegibilidade e comparecer à nossa revenda com a documentação ou validação exigida pelo programa para retirar sua recarga gratuita."}},{"@type":"Question","name":"Preciso agendar o atendimento?","acceptedAnswer":{"@type":"Answer","text":"Não é necessário agendamento. Após confirmar sua elegibilidade, compareça à nossa revenda no horário de funcionamento. Recomendamos entrar em contato pelo WhatsApp antes para validar os documentos necessários."}},{"@type":"Question","name":"Posso tirar dúvidas pelo WhatsApp?","acceptedAnswer":{"@type":"Answer","text":"Sim. Nossa equipe está disponível pelo WhatsApp para esclarecer dúvidas sobre o programa, confirmar elegibilidade e orientar sobre os documentos necessários para utilizar o benefício."}}]}`}</script>
      </Helmet>
      
      {/* HERO */}
      <section className="bg-white py-20 relative z-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-slate-50 overflow-hidden relative border-0 shadow-xl rounded-[3rem] p-10 md:p-16">
            <div className="md:flex items-center gap-12 relative z-10">
              <div className="flex-1">
                <div className="inline-block bg-nacional-blue text-white px-4 py-1 rounded-full text-xs font-black uppercase mb-6">PARCEIRO OFICIAL</div>
                <h1 className="text-4xl md:text-6xl font-black text-nacional-blue mb-6 leading-none uppercase tracking-tighter">
                  Gás do Povo em<br/><span className="text-nacional-red">Ribeirão Pires</span>
                </h1>
                <p className="text-slate-700 text-xl font-bold leading-tight mb-6 md:mb-10">
                  Se você é beneficiário do Programa Gás do Povo, pode utilizar seu benefício na Nacional Gás, em Ribeirão Pires. Nossa equipe está preparada para orientar o processo e realizar o atendimento de forma rápida, segura e conforme as regras do programa.
                </p>

                {/* Mobile Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
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
                    <div className="w-12 h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <p className="font-black text-nacional-blue text-lg leading-none uppercase">Peça seu<br/>Gás do Povo</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-3xl border-2 border-slate-100 flex items-center gap-4">
                    <div className="w-12 h-12 bg-nacional-red text-white rounded-2xl flex items-center justify-center shrink-0">
                      <Zap className="w-6 h-6" />
                    </div>
                    <p className="font-black text-nacional-red text-lg leading-none uppercase">Atendimento<br/>rápido</p>
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
              animate={{ opacity: 1, x: 0 }}
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
          </div>
        </div>
      </section>

      {/* O QUE É O PROGRAMA GÁS DO POVO */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1784662268/o_mwhgnr.jpg" 
              alt="Programa Gás do Povo - Recarga gratuita de botijão" 
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
              Entenda o programa
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter leading-none mb-10"
            >
              COMO FUNCIONA O <span className="text-nacional-red">GÁS DO POVO</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 text-lg text-slate-600 font-medium leading-relaxed"
            >
              <p>
                O Programa Gás do Povo é uma política pública do Governo Federal criada para ampliar o acesso ao gás de cozinha às famílias de baixa renda. O benefício concede a gratuidade da recarga do botijão de GLP de 13 kg para famílias elegíveis.
              </p>
              <p>
                O objetivo do programa é contribuir para mais segurança alimentar, saúde e qualidade de vida, garantindo que famílias em situação de vulnerabilidade tenham acesso ao gás de cozinha sem custo.
              </p>
              <p>
                A Nacional Gás é revenda participante do programa e está pronta para atender os beneficiários de forma simples e segura.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* QUEM PODE UTILIZAR O BENEFÍCIO */}
      <Section className="bg-slate-50">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-nacional-red font-black uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Beneficiários
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter leading-none"
          >
            QUEM PODE UTILIZAR <span className="text-nacional-red">O BENEFÍCIO</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <FileCheck className="text-nacional-blue" />, title: "Famílias inscritas no CadÚnico", desc: "Destinado às famílias que atendem aos critérios do programa e possuem inscrição ativa no Cadastro Único." },
            { icon: <ShieldCheck className="text-green-500" />, title: "Beneficiários elegíveis", desc: "O acesso depende da seleção realizada pelos órgãos responsáveis, conforme as regras vigentes do programa." },
            { icon: <Store className="text-nacional-red" />, title: "Utilização em revendas credenciadas", desc: "O benefício é utilizado diretamente em revendas participantes do programa, mediante validação eletrônica." }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                {React.cloneElement(card.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">{card.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* COMO UTILIZAR SEU BENEFÍCIO */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-nacional-red font-black uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Passo a passo
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter leading-none"
          >
            COMO UTILIZAR <span className="text-nacional-red">SEU BENEFÍCIO</span>
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {[
            { step: "01", title: "Verifique se sua família possui direito ao benefício", desc: "Confirme sua elegibilidade pelo aplicativo CadÚnico ou entre em contato com nossa equipe para orientação." },
            { step: "02", title: "Entre em contato com nossa equipe pelo WhatsApp", desc: "Tire suas dúvidas, confirme a documentação necessária e saiba como funciona o processo na nossa revenda." },
            { step: "03", title: "Compareça à revenda com a documentação exigida", desc: "Traga os documentos ou a forma de validação exigida pelo programa para confirmar seu benefício." },
            { step: "04", title: "Retire sua recarga gratuita", desc: "Após a validação, retire seu botijão de 13 kg conforme as regras do Programa Gás do Povo." }
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
                <h3 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* POR QUE UTILIZAR SEU BENEFÍCIO CONOSCO */}
      <Section className="bg-slate-50">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-nacional-red font-black uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Vantagens
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter leading-none"
          >
            POR QUE UTILIZAR <span className="text-nacional-red">CONOSCO</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Headset className="text-nacional-blue" />, title: "Atendimento humanizado", desc: "Nossa equipe trata cada beneficiário com respeito e dedicação, explicando cada etapa do processo." },
            { icon: <Zap className="text-nacional-red" />, title: "Processo simples e rápido", desc: "Trabalhamos para que utilizede seu benefício de forma ágil, sem complicação ou filas desnecessárias." },
            { icon: <HelpCircle className="text-green-500" />, title: "Equipe preparada para orientar", desc: "Profissionais treinados para esclarecer dúvidas sobre o programa e auxiliar na documentação necessária." },
            { icon: <Store className="text-nacional-blue" />, title: "Revenda participante do programa", desc: "A Nacional Gás é revenda credenciada, garantindo que seu benefício seja utilizado corretamente." }
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

      {/* FAQ */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-nacional-blue mb-4 uppercase tracking-tighter">
                Perguntas frequentes <span className="text-nacional-red">sobre o Gás do Povo</span>
              </h2>
              <div className="w-24 h-2 bg-nacional-red mx-auto rounded-full mb-6"></div>
              <p className="text-xl text-slate-500 font-medium">Tudo o que você precisa saber sobre o Programa Gás do Povo.</p>
            </motion.div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-4 md:p-8 shadow-sm border border-slate-100">
            <div className="space-y-2">
              <FAQItem 
                question="O que é o Programa Gás do Povo?" 
                answer="O Programa Gás do Povo é uma política pública do Governo Federal que concede a gratuidade da recarga do botijão de GLP de 13 kg para famílias de baixa renda elegíveis. O objetivo é ampliar o acesso ao gás de cozinha, contribuindo para a segurança alimentar, saúde e qualidade de vida das famílias beneficiárias." 
              />
              <FAQItem 
                question="Quem pode receber o benefício?" 
                answer="Famílias inscritas no Cadastro Único (CadÚnico) que forem selecionadas pelos órgãos responsáveis, conforme as regras vigentes do programa. A elegibilidade depende do atendimento aos critérios estabelecidos pelo Governo Federal." 
              />
              <FAQItem 
                question="Como saber se tenho direito ao benefício?" 
                answer="O direito ao benefício depende da inscrição no CadÚnico e da seleção realizada pelo Governo Federal. Você pode verificar sua situação pelo aplicativo CadÚnico ou entrando em contato com nossa equipe pelo WhatsApp, que poderá orientá-lo sobre sua situação." 
              />
              <FAQItem 
                question="Como utilizar o benefício na Nacional Gás?" 
                answer="Após confirmar sua elegibilidade, entre em contato pelo WhatsApp para tirar dúvidas e saber quais documentos ou validações são necessários. Em seguida, compareça à nossa revenda em Ribeirão Pires para retirar sua recarga gratuita de forma simples e segura." 
              />
              <FAQItem 
                question="Preciso agendar o atendimento?" 
                answer="Não é necessário agendamento. Após confirmar sua elegibilidade, compareça à nossa revenda no horário de funcionamento. Recomendamos entrar em contato pelo WhatsApp antes para validar os documentos necessários e facilitar o atendimento." 
              />
              <FAQItem 
                question="Posso tirar dúvidas pelo WhatsApp?" 
                answer="Sim. Nossa equipe está disponível pelo WhatsApp para esclarecer dúvidas sobre o programa, confirmar elegibilidade e orientar sobre os documentos necessários para utilizar o benefício na nossa revenda." 
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
              TEM DÚVIDAS SOBRE O<br/>
              <span className="text-white text-2xl md:text-4xl block mt-4">GÁS DO POVO?</span>
            </h2>
            <p className="text-xl font-bold mb-10 opacity-90 leading-tight max-w-2xl mx-auto">
              Se você deseja saber como utilizar seu benefício ou confirmar se pode realizar a recarga em nossa revenda, entre em contato pelo WhatsApp. Nossa equipe está pronta para orientar você.
            </p>
            <a 
              href={WHATSAPP_LINK}
              className="inline-flex items-center gap-4 bg-white text-nacional-red px-12 py-6 rounded-2xl text-xl font-black hover:bg-slate-100 transition-all shadow-2xl uppercase tracking-tighter"
            >
              <MessageCircle className="w-7 h-7" />
              FALAR PELO WHATSAPP
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
            { label: "Gás de Cozinha Ribeirão Pires", desc: "Entrega rápida de gás em Ribeirão Pires com a Nacional Gás.", href: "/gas-de-cozinha-ribeirao-pires", icon: <Zap className="w-6 h-6" /> },
            { label: "Gás de Cozinha Mauá", desc: "Entrega rápida de gás em Mauá com a Nacional Gás.", href: "/gas-de-cozinha-maua", icon: <Zap className="w-6 h-6" /> },
            { label: "Água Mineral", desc: "Água mineral de 20L das melhores marcas, entrega no mesmo caminhão.", href: "/agua-mineral-ribeirao-pires", icon: <CheckCircle2 className="w-6 h-6" /> },
            { label: "Sobre Nós", desc: "Mais de 10 anos de tradição e confiança em Ribeirão Pires.", href: "/sobre-nos", icon: <ShieldCheck className="w-6 h-6" /> },
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
