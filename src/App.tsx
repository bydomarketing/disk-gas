import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ArticleDetail from './pages/ArticleDetail';
import SobreNos from './pages/SobreNos';
import GasDeCozinha from './pages/GasDeCozinha';
import GasDoPovo from './pages/GasDoPovo';
import AguaMineral from './pages/AguaMineral';
import GasDeCozinhaMaua from './pages/GasDeCozinhaMaua';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <WhatsAppFloat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/gas-de-cozinha-ribeirao-pires" element={<GasDeCozinha />} />
        <Route path="/gas-de-cozinha-maua" element={<GasDeCozinhaMaua />} />
        <Route path="/gas-do-povo-ribeirao-pires" element={<GasDoPovo />} />
        <Route path="/agua-mineral-ribeirao-pires" element={<AguaMineral />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
