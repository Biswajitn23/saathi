// SEO and Structured Data Utilities

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Saathi Group",
    url: "https://saathigroup.com",
    logo: "https://saathigroup.com/logo.png",
    description: "Premium construction services - residential, commercial, industrial",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+91-123-456-7890",
      email: "info@saathigroup.com",
    },
    sameAs: [
      "https://facebook.com/saathigroup",
      "https://twitter.com/saathigroup",
      "https://linkedin.com/company/saathigroup",
      "https://instagram.com/saathigroup",
    ],
  },

  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Saathi Group",
    image: "https://saathigroup.com/logo.png",
    description: "Premium construction company specializing in residential, commercial, and industrial projects",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "India",
    },
    telephone: "+91-123-456-7890",
    priceRange: "$$",
  },

  service: (name: string, description: string) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "Organization",
      name: "Saathi Group",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  }),
};

// Helper to inject structured data into page head
export const injectStructuredData = (data: object) => {
  const script = document.createElement("script");
  script.setAttribute("type", "application/ld+json");
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

// Mobile optimization helpers
export const viewportMeta = {
  standard: "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes",
  noZoom: "width=device-width, initial-scale=1.0, user-scalable=no",
};

export default structuredData;
