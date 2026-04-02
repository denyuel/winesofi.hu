import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

export const Seo = ({ title, description, pathname, image, children }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image: defaultImage,
    siteUrl,
  } = useSiteMetadata();

  const seoImage = image || defaultImage;
  const absoluteImage = seoImage.startsWith('http') ? seoImage : `${siteUrl}${seoImage}`;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: absoluteImage,
    url: `${siteUrl}${pathname || ""}`,
  };

  const gaScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date());
    gtag('config', 'G-SN67F4C0BN');
  `;

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <link rel="icon" href="/logo.png" />

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SN67F4C0BN"></script>
      <script
        type="text/plain"
        data-category="analytics"
        data-service="Google Analytics"
      >
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-T94S4WTZ');`}

        {gaScript}
      </script>

      {children}
    </>
  );
};
