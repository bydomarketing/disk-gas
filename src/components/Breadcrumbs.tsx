import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 overflow-x-auto whitespace-nowrap pb-2 md:pb-0">
      <Link to="/" className="flex items-center gap-1 hover:text-nacional-blue transition-colors">
        <Home className="w-3 h-3" />
        Home
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-3 h-3 shrink-0" />
          {item.href ? (
            <Link to={item.href} className="hover:text-nacional-blue transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-600 truncate max-w-[200px] md:max-w-none">
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
