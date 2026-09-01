import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, Handshake, Headset, ShieldCheck, MessageCircle, 
  CalendarCheck, Award, CheckCircle2, Droplets, Star, ArrowRight, Motorbike
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const WHATSAPP_RP = "https://wa.me/5511950760161?text=Olá! Gostaria de pedir um gás de cozinha.";
const WHATSAPP_MAUA = "https://wa.me/5511933780522?text=Olá! Gostaria de pedir um gás de cozinha.";

const Section = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <section className={`py-12 px-4 md:py-20 ${className}`}>
    <div className="max-w-5xl mx-auto">
      {children}
    </div>
  </section>
);

export default function SobreNos() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <SEO 
        title="Sobre Nós - Nacional Gás Ribeirão Pires" 
        description="Conheça a história da Nacional Gás em Ribeirão Pires. Mais de 10 anos entregando gás de cozinha com segurança, confiança e agilidade."
        canonical="/sobre-nos"
      />

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
                alt="Nacional Gás - mais de 10 anos entregando confiança em Ribeirão Pires" 
                className="rounded-[2.5rem] shadow-2xl border-4 border-white/20 rotate-2 w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-nacional-red p-6 rounded-2xl shadow-xl font-black rotate-[-3deg]">
                <p className="text-sm uppercase tracking-widest">+10 anos de história</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-left"
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white font-black uppercase tracking-[0.3em] text-sm mb-4 block"
              >
                Sobre nós
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">
                Mais de 10 anos<br/>
                <span className="text-white text-2xl md:text-4xl block mt-4">entregando confiança em Ribeirão Pires</span>
              </h1>
              <p className="text-xl font-bold mb-10 opacity-90 leading-tight">
                Nascemos como uma empresa familiar e crescemos com um único propósito: garantir que o gás nunca falte na mesa das famílias da nossa região.
              </p>
              <a 
                href={WHATSAPP_RP}
                className="inline-flex items-center gap-4 bg-white text-nacional-red px-10 py-5 rounded-2xl text-xl font-black hover:bg-slate-100 transition-all shadow-2xl uppercase tracking-tighter"
              >
                <MessageCircle className="w-6 h-6" />
                PEDIR PELO WHATSAPP
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NOSSA HISTÓRIA */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-nacional-blue/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <img 
                src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773769617/gas_de_cozinha_ribeirao_pires5_opncma.svg" 
                alt="Nossa história como empresa familiar em Ribeirão Pires" 
                className="rounded-[3rem] shadow-2xl border-8 border-white w-full h-auto"
                referrerPolicy="no-referrer"
              />
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
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-nacional-red font-black uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Nossa história
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter leading-none mb-8"
            >
              UMA EMPRESA <span className="text-nacional-red">FAMILIAR</span> QUE CRESCEU COM A REGIÃO
            </motion.h2>
            <div className="space-y-4 text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                A nossa história começou como uma empresa familiar, construída com trabalho, proximidade com os clientes e o compromisso de oferecer um serviço em que as famílias da nossa região pudessem confiar. Ao longo de mais de 10 anos, construímos nossa presença em Ribeirão Pires e seguimos trabalhando todos os dias para oferecer atendimento próximo, responsável e eficiente.
              </p>
              <p>
                Para nós, gás de cozinha não é apenas um produto de consumo. É um produto que entra diariamente na casa das pessoas e está diretamente relacionado à preparação das refeições e à rotina das famílias. Por isso, sua comercialização e entrega exigem responsabilidade, cuidado e compromisso com a qualidade.
              </p>
              <p>
                Quando alguém procura gás de cozinha em Ribeirão Pires, entrega de gás ou precisa pedir seu gás pelo WhatsApp, não está simplesmente procurando um produto. Está procurando uma empresa em que possa confiar para receber esse produto em sua casa.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* MARCA DE TRADIÇÃO */}
      <Section className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-nacional-red font-black uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Uma marca de tradição
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
                A Nacional Gás possui uma trajetória consolidada no mercado de distribuição de gás de cozinha. Para nós, representar uma marca com esse reconhecimento significa assumir também a responsabilidade de manter um padrão de atendimento compatível com a confiança que o consumidor deposita na empresa.
              </p>
              <p>
                Nossa atuação une essa tradição com o conhecimento da realidade local. Conhecemos a região, atendemos nossos clientes de perto e entendemos que cada pedido tem uma necessidade por trás: uma família que precisa preparar uma refeição, uma empresa que precisa manter sua rotina ou alguém que simplesmente não pode ficar sem gás em casa.
              </p>
              <p>
                Por isso, buscamos tornar o processo de compra mais simples, com atendimento direto pelo WhatsApp e entrega de gás de cozinha na região.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              {[
                { icon: <ShieldCheck className="w-5 h-5 text-nacional-blue" />, text: "Marca de referência" },
                { icon: <Handshake className="w-5 h-5 text-nacional-red" />, text: "Padrão de qualidade" },
                { icon: <MapPin className="w-5 h-5 text-nacional-blue" />, text: "Conhecimento local" },
                { icon: <Headset className="w-5 h-5 text-nacional-red" />, text: "Atendimento próximo" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100">
                  {item.icon}
                  <span className="text-sm font-bold text-slate-700">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773769620/gas_de_cozinha_ribeirao_pires7_sw3zao.svg" 
              alt="Entregador Nacional Gás realizando entrega residencial" 
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
              <span className="text-[8px] md:text-xs font-black uppercase tracking-tighter text-center leading-tight">Marca<br/>Oficial</span>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* RESPONSABILIDADE */}
      <Section className="bg-nacional-blue text-white">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773769617/gas_de_cozinha_ribeirao_pires6_silmlj.svg" 
              alt="Botijão de gás original com lacre e peso garantido" 
              className="rounded-[2.5rem] shadow-2xl border-8 border-white/20 w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white font-black uppercase tracking-[0.3em] text-sm mb-4 block opacity-90"
            >
              Compromisso com a segurança
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8"
            >
              GÁS DE COZINHA EXIGE <span className="text-nacional-red">RESPONSABILIDADE</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 text-lg font-medium leading-relaxed text-white/90"
            >
              <p>
                O gás de cozinha é um produto que precisa ser tratado com seriedade desde a revenda até o momento em que chega ao consumidor.
              </p>
              <p>
                Por estar presente dentro das residências e estabelecimentos comerciais, a procedência do produto, a qualidade e o cuidado no atendimento são aspectos que não podem ser tratados como detalhes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 space-y-4"
            >
              {[
                { icon: <ShieldCheck className="w-5 h-5" />, text: "Revenda autorizada Nacional Gás" },
                { icon: <CheckCircle2 className="w-5 h-5" />, text: "Produto original e dentro dos padrões da marca" },
                { icon: <Handshake className="w-5 h-5" />, text: "Relação de confiança com quem compra de nós" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10">
                  <div className="w-10 h-10 bg-white text-nacional-blue rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-bold">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <p className="mt-8 text-lg font-bold text-white">
              Mais do que entregar gás, nosso trabalho é construir uma relação de confiança com quem compra de nós.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* ATENDIMENTO LOCAL */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-nacional-red font-black uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Atendimento local
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter leading-none"
          >
            PARA <span className="text-nacional-red">RIBEIRÃO PIRES</span> E <span className="text-nacional-red">MAUÁ</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <div className="space-y-4 text-lg text-slate-600 font-medium leading-relaxed mb-8">
              <p>
                Nossa atuação está voltada principalmente para Ribeirão Pires e Mauá, aproximando o serviço de quem precisa de gás de cozinha e água nessas duas cidades.
              </p>
              <p>
                Em Ribeirão Pires, estamos localizados no bairro Santa Luzia e atendemos clientes que procuram por gás de cozinha, revenda de gás, entrega de gás e pedido pelo WhatsApp.
              </p>
              <p>
                Também realizamos atendimento em Mauá, ampliando nossa área de atuação. O atendimento é feito diretamente pelo WhatsApp, tornando o pedido mais simples e acessível.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-nacional-red/10 text-nacional-red rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-black text-nacional-blue uppercase mb-2">Ribeirão Pires</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-4">
                  R. Prof. Antônio Nunes, 484 – Santa Luzia
                </p>
                <a 
                  href={WHATSAPP_RP}
                  className="inline-flex items-center gap-2 text-green-600 font-bold text-sm hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp: (11) 95076-0161
                </a>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 bg-nacional-blue/10 text-nacional-blue rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-black text-nacional-blue uppercase mb-2">Mauá</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-4">
                  Atendimento em toda a cidade com o mesmo padrão de qualidade.
                </p>
                <a 
                  href={WHATSAPP_MAUA}
                  className="inline-flex items-center gap-2 text-green-600 font-bold text-sm hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp: (11) 93378-0522
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative"
          >
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1786476005/disk_gas_de_cozinha_em_maua_18_la6c67.jpg" 
              alt="Entrega de gás de cozinha em Ribeirão Pires e Mauá" 
              className="rounded-[2.5rem] shadow-2xl border-8 border-white w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-nacional-blue p-6 rounded-2xl shadow-xl font-black rotate-[-3deg]">
              <MapPin className="w-6 h-6 text-nacional-red mb-2" />
              <p className="text-sm uppercase tracking-widest">RP e Mauá</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* GÁS E ÁGUA */}
      <Section className="bg-slate-50">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773837259/combo_vndmn1.svg" 
              alt="Combo gás de cozinha e água mineral para sua rotina" 
              className="rounded-[3rem] shadow-2xl border-8 border-white w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-nacional-red font-black uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Muito além do gás
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter leading-none mb-8"
            >
              GÁS DE COZINHA E <span className="text-nacional-red">ÁGUA PARA SUA ROTINA</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 text-lg text-slate-600 font-medium leading-relaxed"
            >
              <p>
                Além do gás de cozinha, trabalhamos também com água, atendendo residências e empresas que precisam de praticidade no abastecimento.
              </p>
              <p>
                Dessa forma, a Nacional Gás reúne dois produtos importantes para a rotina de nossos clientes: gás de cozinha e água, com atendimento local e entrega em Ribeirão Pires e Mauá.
              </p>
              <p>
                Nosso objetivo é continuar crescendo sem perder aquilo que fez parte da nossa história desde o início: proximidade com o cliente, responsabilidade no serviço e compromisso com a região onde atuamos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Link
                to="/agua-mineral-ribeirao-pires"
                className="group inline-flex items-center gap-3 bg-nacional-blue hover:bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg uppercase tracking-wide text-sm"
              >
                <Droplets className="w-5 h-5" />
                CONHECER ÁGUA MINERAL
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* POR QUE ESCOLHER */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-nacional-red font-black uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Por que escolher nossa revenda
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-nacional-blue uppercase tracking-tighter leading-none"
          >
            MOTIVOS PARA CONFIAR NA <span className="text-nacional-red">NACIONAL GÁS</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: <Award className="text-nacional-red" />, title: "Mais de 10 anos de experiência", desc: "Uma história construída como empresa familiar, com presença local e relacionamento próximo com nossos clientes." },
            { icon: <ShieldCheck className="text-nacional-blue" />, title: "Revenda autorizada Nacional Gás", desc: "Trabalhamos com uma das marcas de referência do mercado de gás de cozinha, seguindo os padrões estabelecidos pela Nacional Gás." },
            { icon: <MapPin className="text-nacional-red" />, title: "Atendimento local", desc: "Conhecemos Ribeirão Pires e Mauá e trabalhamos para aproximar o serviço de quem precisa de gás e água." },
            { icon: <MessageCircle className="text-green-500" />, title: "Pedido pelo WhatsApp", desc: "Facilitamos o contato para quem precisa fazer seu pedido de gás de cozinha ou água sem complicação." },
            { icon: <CalendarCheck className="text-nacional-blue" />, title: "Atendimento 7 dias por semana", desc: "Nossa operação atende os clientes durante todos os dias da semana, inclusive finais de semana." }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
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

      {/* CTA FINAL */}
      <Section className="bg-nacional-red text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter leading-none">
              NÃO FIQUE SEM GÁS<br/>
              <span className="text-white text-2xl md:text-4xl block mt-4">CONFIE EM QUEM CONHECE A REGIÃO.</span>
            </h2>
            <p className="text-xl font-bold mb-10 opacity-90 leading-tight max-w-2xl mx-auto">
              Peça seu gás de cozinha ou água pelo WhatsApp e receba com agilidade em Ribeirão Pires e Mauá. Atendimento humano, 7 dias por semana.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={WHATSAPP_RP}
                className="inline-flex items-center gap-4 bg-white text-nacional-red px-12 py-6 rounded-2xl text-xl font-black hover:bg-slate-100 transition-all shadow-2xl uppercase tracking-tighter"
              >
                <MessageCircle className="w-7 h-7" />
                PEDIR PELO WHATSAPP
              </a>
            </div>
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
            { label: "Gás de Cozinha Ribeirão Pires", desc: "Entrega rápida de gás com a Nacional Gás.", href: "/gas-de-cozinha-ribeirao-pires", icon: <Motorbike className="w-6 h-6" /> },
            { label: "Gás de Cozinha Mauá", desc: "Entrega rápida de gás em Mauá com WhatsApp exclusivo.", href: "/gas-de-cozinha-maua", icon: <Motorbike className="w-6 h-6" /> },
            { label: "Água Mineral", desc: "Água mineral de 20L para você pedir junto com o seu gás.", href: "/agua-mineral-ribeirao-pires", icon: <Droplets className="w-6 h-6" /> },
            { label: "Gás do Povo", desc: "Beneficiário do governo? Sua recarga é garantida aqui.", href: "/gas-do-povo-ribeirao-pires", icon: <Handshake className="w-6 h-6" /> },
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
