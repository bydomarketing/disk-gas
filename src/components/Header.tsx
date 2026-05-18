import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const WHATSAPP_LINK = "https://wa.me/5511950760161?text=Olá! Gostaria de pedir um gás.";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '/#inicio' },
    { label: 'Sobre Nós', href: '/#sobre' },
    { label: 'Diferenciais', href: '/#diferenciais' },
    { label: 'Nossos Produtos', href: '/#produtos' },
    { label: 'Contato', href: '/#contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    
    // If we are already on the home page and it's a hash link, handle smooth scroll manually
    if (location.pathname === '/' && href.startsWith('/#')) {
      e.preventDefault();
      const id = href.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between">
          <Link to="/#inicio" className="flex items-center gap-3 z-50" onClick={(e) => handleLinkClick(e, '/#inicio')}>
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773838165/nacional-gas_chuksa.svg" 
              alt="Nacional Gás Logo" 
              className={`transition-all duration-300 w-auto ${isScrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'}`}
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <ul className="flex items-center gap-4 lg:gap-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-xs font-bold transition-colors hover:text-nacional-red uppercase tracking-wide whitespace-nowrap ${
                      isScrolled || location.pathname !== '/' ? 'text-slate-700' : 'text-white drop-shadow-md hover:text-white/80'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xs font-black transition-colors uppercase tracking-wide whitespace-nowrap ${
                    location.pathname.startsWith('/blog') 
                      ? 'text-nacional-red' 
                      : isScrolled || location.pathname !== '/' 
                        ? 'text-slate-700 hover:text-nacional-red' 
                        : 'text-white drop-shadow-md hover:text-white/80'
                  }`}
                >
                  Blog
                </Link>
              </li>
            </ul>

            <a 
              href={WHATSAPP_LINK}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-3 rounded-2xl flex flex-col items-center justify-center transition-all shadow-xl active:translate-y-1 group min-w-[80px]"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-tighter mt-1 whitespace-nowrap">PEDIR AGORA</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <a 
              href={WHATSAPP_LINK}
              className="bg-nacional-red text-white p-2 rounded-full shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled || isMobileMenuOpen || location.pathname !== '/' ? 'text-slate-800' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 pb-6 px-6 flex flex-col md:hidden overflow-y-auto"
          >
            <ul className="flex flex-col gap-6 items-center mt-8">
              {navLinks.map((link, index) => (
                <li key={index} className="w-full border-b border-slate-100 pb-4 text-center">
                  <a 
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-lg font-bold text-slate-800 uppercase tracking-wide block w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="w-full border-b border-slate-100 pb-4 text-center">
                <Link
                  to="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-black uppercase tracking-wide block w-full ${
                    location.pathname.startsWith('/blog') ? 'text-nacional-red' : 'text-slate-800'
                  }`}
                >
                  Blog
                </Link>
              </li>
            </ul>
            
            <div className="mt-auto pt-8 flex justify-center">
              <a 
                href={WHATSAPP_LINK}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-black flex items-center justify-center gap-3 transition-all shadow-xl shadow-green-900/20 w-full"
              >
                <MessageCircle className="w-6 h-6" />
                PEDIR PELO WHATSAPP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
