import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Article } from '../data/articles';

export default function BlogCard({ article }: { article: Article }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full group"
    >
      <Link to={`/blog/${article.slug}`} className="block overflow-hidden h-48 md:h-56 bg-slate-50 flex items-center justify-center p-2">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-nacional-red bg-red-50 px-3 py-1 rounded-full">
            {article.category}
          </span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-black text-nacional-blue leading-tight mb-4 group-hover:text-nacional-red transition-colors">
          <Link to={`/blog/${article.slug}`}>
            {article.title}
          </Link>
        </h3>
        
        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 line-clamp-2">
          {article.excerpt}
        </p>
        
        <div className="mt-auto">
          <Link
            to={`/blog/${article.slug}`}
            className="inline-flex items-center gap-2 text-nacional-blue font-black text-sm uppercase tracking-widest hover:text-nacional-red transition-colors group/btn"
          >
            Continuar Lendo
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
