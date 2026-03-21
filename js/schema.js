// Schema.org Person structured data
(function() {
  'use strict';

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Brent Crystal",
    "jobTitle": "Business Systems Developer | Epicor Integration Specialist",
    "image": "https://www.brentscripts.dev/images/brent-headshot.webp",
    "email": "brentrcrystal@gmail.com",
    "location": {
      "@type": "Place",
      "name": "Dover, NH"
    },
    "sameAs": [
      "https://www.linkedin.com/in/brent-crystal",
      "https://www.github.com/brentscripts"
    ],
    "url": "https://www.brentscripts.dev",
    "worksFor": {
      "@type": "Organization",
      "name": "Turbocam International"
    }
  };

  function injectSchema() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSchema);
  } else {
    injectSchema();
  }
})();
