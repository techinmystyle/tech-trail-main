import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A reusable, highly performant React component for managing dynamic page SEO.
 * Updates document.title and HTML head meta tags on navigation/prop changes.
 */
const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  noIndex = false
}) => {
  const location = useLocation();
  const siteUrl = 'https://techinmystyle.com';
  
  const defaultTitle = 'Tech In My Style — Learn Programming & Web Development';
  const defaultDescription = 'Tech In My Style offers free programming courses in HTML, CSS, JavaScript, Python, Java, C, AI, Machine Learning, Deep Learning, NLP, Data Science, DSA, System Design, and Full Stack Development. Learn to code the smart way.';
  const defaultKeywords = 'programming courses, learn to code, HTML tutorial, CSS tutorial, JavaScript course, Python programming, Java course, machine learning, deep learning, NLP, data science, DSA, system design, full stack development, tech education India';
  const defaultOgImage = 'https://techinmystyle.com/favicon.png';

  const finalTitle = title ? `${title} — Tech In My Style` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalCanonical = canonical || `${siteUrl}${location.pathname}`;
  const finalOgTitle = ogTitle || title || 'Tech In My Style';
  const finalOgDescription = ogDescription || finalDescription;
  const finalOgImage = ogImage || defaultOgImage;

  useEffect(() => {
    // 1. Update document title
    document.title = finalTitle;

    // Helper to find or create meta tag
    const setMetaTag = (attributeName, attributeValue, contentValue) => {
      let meta = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (meta) {
        meta.setAttribute('content', contentValue);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute(attributeName, attributeValue);
        meta.setAttribute('content', contentValue);
        document.head.appendChild(meta);
      }
    };

    // 2. Set description
    setMetaTag('name', 'description', finalDescription);

    // 3. Set keywords
    setMetaTag('name', 'keywords', finalKeywords);

    // 4. Set robots
    setMetaTag('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // 5. Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', finalCanonical);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', finalCanonical);
      document.head.appendChild(canonicalLink);
    }

    // 6. Set Open Graph (Facebook, LinkedIn, etc.)
    setMetaTag('property', 'og:title', finalOgTitle);
    setMetaTag('property', 'og:description', finalOgDescription);
    setMetaTag('property', 'og:url', finalCanonical);
    setMetaTag('property', 'og:image', finalOgImage);
    setMetaTag('property', 'og:type', ogType);

    // 7. Set Twitter Cards
    setMetaTag('name', 'twitter:title', finalOgTitle);
    setMetaTag('name', 'twitter:description', finalOgDescription);
    setMetaTag('name', 'twitter:image', finalOgImage);

  }, [finalTitle, finalDescription, finalKeywords, finalCanonical, finalOgTitle, finalOgDescription, finalOgImage, ogType, noIndex]);

  return null;
};

export default SEO;
