// Content Management Configuration
// This file allows easy management of website content without code changes

export const siteContent = {
  company: {
    name: "Saathi Group",
    tagline: "Excellence in Detail",
    description: "Building trust through quality construction since 2012",
    phone: "+91 123 456 7890",
    email: "info@saathigroup.com",
  },

  hero: {
    title: "Premium Construction Solutions",
    subtitle: "Transforming visions into reality with precision and excellence",
    ctaText: "Get a Quote",
  },

  services: [
    {
      id: "civil",
      name: "Civil Construction",
      description: "Professional civil construction for all project scales",
      icon: "Building2",
    },
    {
      id: "residential",
      name: "Residential Projects",
      description: "Quality homes built with attention to detail",
      icon: "Home",
    },
    {
      id: "commercial",
      name: "Commercial Buildings",
      description: "Modern commercial spaces built for success",
      icon: "Store",
    },
    {
      id: "industrial",
      name: "Industrial Construction",
      description: "Robust industrial facilities engineered for durability",
      icon: "Factory",
    },
    {
      id: "renovation",
      name: "Renovation Services",
      description: "Transform existing spaces with expert renovations",
      icon: "Hammer",
    },
    {
      id: "design",
      name: "Architectural Design",
      description: "Creative architectural solutions for your projects",
      icon: "Pencil",
    },
  ],

  stats: [
    { label: "Projects Completed", value: "500+" },
    { label: "Years Experience", value: "12+" },
    { label: "Team Members", value: "100+" },
    { label: "Happy Clients", value: "1000+" },
  ],

  seo: {
    keywords: ["construction", "building", "civil construction", "residential", "commercial", "industrial"],
    author: "Saathi Group",
    locale: "en_IN",
  },
};

export default siteContent;
