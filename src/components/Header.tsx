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
    { label: 'HOME', href: '/' },
    { label: 'Sobre Nós', href: '/sobre-nos' },
    { label: 'Gás de Cozinha Ribeirão Pires', href: '/gas-de-cozinha-ribeirao-pires' },
    { label: 'Gás de Cozinha Mauá', href: '/gas-de-cozinha-maua' },
    { label: 'Água Mineral', href: '/agua-mineral-ribeirao-pires' },
    { label: 'Gás do Povo', href: '/gas-do-povo-ribeirao-pires' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-1.5' 
            : 'bg-transparent py-3'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 z-50">
            <img 
              src="https://res.cloudinary.com/dplhygs4v/image/upload/v1773838165/nacional-gas_chuksa.svg" 
              alt="Nacional Gás Logo" 
              className={`transition-all duration-300 w-auto ${isScrolled ? 'h-6 md:h-8' : 'h-8 md:h-10'}`}
              referrerPolicy="no-referrer"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <ul className="flex items-center gap-3 lg:gap-6">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xs font-semibold transition-colors hover:text-nacional-red uppercase tracking-wide whitespace-nowrap ${
                      location.pathname === link.href
                        ? 'text-nacional-red'
                        : isScrolled || location.pathname !== '/' 
                          ? 'text-slate-700' 
                          : 'text-white drop-shadow-md hover:text-white/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4 z-50">
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
                  <Link 
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-bold text-slate-800 uppercase tracking-wide block w-full ${
                      location.pathname === link.href ? 'text-nacional-red' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
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
