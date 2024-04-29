import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const Seo = ({ title, description, pathname, image, children }) => {
    const { title: defaultTitle, description: defaultDescription, image: defaultImage, siteUrl } = useSiteMetadata()

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image || defaultImage,
        url: `${siteUrl}${pathname || ''}`
    }

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="url" content={seo.url} />
            <meta name="og:title" content={seo.title} />
            <meta name="og:url" content={seo.url} />
            <meta name="og:description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <link rel="icon" href="/logo.png" />
            {children}
        </>
    )
}
