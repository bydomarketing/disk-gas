import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
  image?: string;
}

export default function SEO({ title, description, canonical, type = 'website', image }: SEOProps) {
  const url = canonical
    ? `https://diskgasdecozinha.com.br${canonical.endsWith('/') ? canonical : `${canonical}/`}`
    : 'https://diskgasdecozinha.com.br/';
  const ogImage = image || 'https://res.cloudinary.com/dplhygs4v/image/upload/v1773838165/nacional-gas_chuksa.svg';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Nacional Gás Ribeirão Pires" />
    </Helmet>
  );
}
