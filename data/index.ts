export const site = {
  name: "John Chloe",
  title: "WordPress · Shopify · Webflow Developer",
  profileImage: "/images/KlowiProfile.jpg",
  email: "johnchloe.h.gomandoy@gmail.com",
  phone: "+63 9108755326",
  whatsapp: "https://wa.me/639108755326",
  location: "Misamis Occidental, Philippines",
  github: "https://github.com/JustMe1234567",
  linkedin: "https://www.linkedin.com/in/johnchloe",
};

export const hero = {
  eyebrow: "WordPress · Shopify · Webflow",
  headlineLine1: "Websites that Convert,",
  headlineLine2: "not just Exist.",
  subheadline:
    "Custom themes, storefronts, and Webflow sites—from design handoff to launch, with CMS setup your team can manage.",
};

export const navItems = [
  { name: "Process", link: "#process" },
  { name: "Projects", link: "#projects" },
  { name: "About", link: "#aboutme" },
];

export const footerPhrase = {
  before: "Let's turn your",
  from: "uhm",
  to: "wow",
};

export const platforms = [
  {
    name: "WordPress",
    tagline: "Custom themes, ACF, WooCommerce, performance",
    features: [
      "Elementor & other page builders",
      "WooCommerce & ACF setups",
      "Speed & Core Web Vitals",
    ],
    color: "from-[#21759b]/25 to-[#21759b]/5",
    border: "border-[#21759b]/40",
    accent: "#21759b",
    icon: "wordpress" as const,
  },
  {
    name: "Shopify",
    tagline: "Theme customization, Liquid, storefront UX",
    features: [
      "Theme sections & Liquid",
      "Checkout & product UX",
      "Apps & conversion tweaks",
    ],
    color: "from-[#95bf47]/25 to-[#95bf47]/5",
    border: "border-[#95bf47]/40",
    accent: "#95bf47",
    icon: "shopify" as const,
  },
  {
    name: "Webflow",
    tagline: "Pixel-perfect builds, CMS, interactions & handoff",
    features: [
      "Figma-to-Webflow builds",
      "CMS & collections",
      "Client handoff & training",
    ],
    color: "from-[#4353ff]/25 to-[#4353ff]/5",
    border: "border-[#4353ff]/40",
    accent: "#4353ff",
    icon: "webflow" as const,
  },
] as const;

export const about = {
  intro:
    "I help businesses turn outdated or difficult-to-manage websites into modern digital experiences. From Figma-to-production builds and custom WordPress solutions to Shopify storefront improvements and Webflow CMS setups, I create websites that look professional, perform well, and help teams manage their online presence with ease.",
  image: site.profileImage,
  stats: [
    { number: 3, title: "Years Experience", suffix: "+" },
    { number: 10, title: "Projects Completed", suffix: "+" },
    { number: 3, title: "Core Platforms", suffix: "" },
    { number: 100, title: "Reliable Delivery", suffix: "%" },
  ],
};

export const processSteps = [
  {
    id: 1,
    step: "01",
    title: "Discovery & scope",
    description:
      "Align on goals, platform, timeline, and success metrics—no surprises mid-build.",
    deliverables: ["STRATEGY DOC", "SITEMAP", "SCOPE BRIEF"],
    gridClass: "md:col-span-7",
  },
  {
    id: 2,
    step: "02",
    title: "Design handoff",
    description:
      "Figma or wireframes become a build plan: components, CMS structure, and breakpoints.",
    deliverables: ["WIREFRAMES", "STYLE GUIDE", "CMS MAP"],
    gridClass: "md:col-span-5",
  },
  {
    id: 3,
    step: "03",
    title: "Build & integrate",
    description:
      "Custom themes, ACF/Webflow CMS, Shopify Liquid, forms, and analytics—clean, documented code.",
    deliverables: ["THEME BUILD", "CMS SETUP", "INTEGRATIONS"],
    gridClass: "md:col-span-4",
  },
  {
    id: 4,
    step: "04",
    title: "QA & performance",
    description:
      "Cross-device testing, Core Web Vitals, accessibility, and content review before go-live.",
    deliverables: ["QA REPORT", "SPEED AUDIT", "LAUNCH CHECKLIST"],
    gridClass: "md:col-span-8",
  },
  {
    id: 5,
    step: "05",
    title: "Launch & support",
    description:
      "Deployment, team training, and post-launch fixes. Retainers available for ongoing updates.",
    deliverables: ["GO-LIVE", "HANDOFF DOC", "SUPPORT PLAN"],
    gridClass: "md:col-span-12",
    cta: true,
  },
];

export const projectFilters = ["All", "WordPress", "Frontend"] as const;

export const projects = [
  {
    id: 11,
    title: "Alora Designs",
    des: "Next.js frontend for a jewelry brand—Tailwind for a refined, product-led showcase with smooth navigation and a responsive storefront.",
    short: "Jewelry storefront",
    iconLists: [
      "/icons/next.svg",
      "/icons/tail.svg",
      "/icons/jsLogo.svg",
      "/icons/htmlLogo.svg",
      "/icons/cssLogo.svg",
    ],
    img: "/images/AloraDesign.png",
    link: "https://aloura.vercel.app/",
    category: ["Frontend"],
    target: "_blank",
    live: true,
  },
  {
    id: 7,
    title: "Plantittoo",
    des: "WooCommerce-ready WordPress shop with ACF, custom post types, Ajax filters, and mobile-first product browsing.",
    short: "Plant shop WooCommerce",
    iconLists: [
      "/icons/wordpress.svg",
      "/icons/htmlLogo.svg",
      "/icons/cssLogo.svg",
      "/icons/elementor-icon.svg",
      "/icons/woocommerce-icon.svg",
    ],
    img: "/images/plantittoo_desktop.png",
    link: "https://plantittoo.com/",
    category: ["WordPress"],
    target: "_blank",
    live: true,
  },
  {
    id: 10,
    title: "Ursula Jewelry",
    des: "Custom WordPress site for a jewelry brand—Next.js and Tailwind for a polished product showcase with HTML, CSS, and WordPress under the hood.",
    short: "Jewelry brand website",
    iconLists: [
      "/icons/next.svg",
      "/icons/htmlLogo.svg",
      "/icons/cssLogo.svg",
      "/icons/wordpress.svg",
      "/icons/tail.svg",
    ],
    img: "/images/ursulajewelry.png",
    link: "https://ursulajewelry.vercel.app/",
    category: ["WordPress"],
    target: "_blank",
    live: true,
  },
  {
    id: 9,
    title: "MindBody Wellness",
    des: "Custom WordPress theme with Tailwind v4, GSAP motion, and a drag-to-scroll testimonials slider for a mental health practice.",
    short: "Mental health practice website",
    iconLists: ["/icons/wordpress.svg", "/icons/tail.svg", "/icons/jsLogo.svg", "/icons/htmlLogo.svg"],
    img: "/images/wellnesspathways.png",
    link: "http://wellnesspathways.free.nf",
    category: ["WordPress"],
    target: "_blank",
    live: true,
  },
  {
    id: 8,
    title: "Smart Agency",
    short: "Agency services website",
    des: "Agency WordPress theme with Tailwind—services, portfolio, and performance-tuned responsive layout.",
    iconLists: [
      "/icons/wordpress.svg",
      "/icons/tail.svg",
      "/icons/htmlLogo.svg",
      "/icons/cssLogo.svg",
      "/icons/jsLogo.svg",
    ],
    img: "/images/smartagency.jpg",
    link: "https://smartagency.infinityfree.me/",
    category: ["WordPress"],
    target: "_blank",
    live: true,
  },
  {
    id: 1,
    title: "MediCare",
    short: "Healthcare services website",
    des: "Figma-to-WordPress healthcare build with Elementor—pixel-perfect layout and fast static delivery.",
    img: "/images/medicareImg.jpg",
    iconLists: [
      "/icons/wordpress.svg",
      "/icons/tail.svg",
      "/icons/htmlLogo.svg",
      "/icons/cssLogo.svg",
      "/icons/jsLogo.svg",
    ],
    link: "https://medicare101.netlify.app/",
    category: ["WordPress"],
    target: "_blank",
    live: true,
  },
  {
    id: 2,
    title: "Marci Realtor",
    short: "Real estate listings website",
    des: "Real estate frontend with Tailwind and vanilla JS—refined UX, fully responsive, statically hosted.",
    img: "/images/marciImg.png",
    iconLists: [
      "/icons/tail.svg",
      "/icons/htmlLogo.svg",
      "/icons/cssLogo.svg",
      "/icons/netlifyLogo.svg",
      "/icons/jsLogo.svg",
    ],
    link: "https://marcirealtor.netlify.app/",
    category: ["Frontend"],
    target: "_blank",
    live: true,
  },
  {
    id: 3,
    title: "Lotus Assessment",
    short: "Cannabis automation brand",
    des: "Figma-to-HTML WordPress frontend for a cannabis automation brand—precise desktop layout per spec.",
    img: "/images/cannabisAssessment.png",
    iconLists: [
      "/icons/wordpress.svg",
      "/icons/tail.svg",
      "/icons/htmlLogo.svg",
      "/icons/netlifyLogo.svg",
      "/icons/cssLogo.svg",
    ],
    link: "https://lotus-assessment.netlify.app/",
    category: ["WordPress", "Frontend"],
    target: "_blank",
    live: true,
  },
];

export const workExperience = [
  {
    id: 2,
    title: "Web Developer",
    desc: "Custom WordPress themes from client designs. Figma-to-responsive pages with Tailwind or CSS. Google Analytics, Tag Manager, custom post types, and ACF for scalable content structures.",
    className: "md:col-span-2",
    thumbnail: "/icons/exp2.svg",
    year: "Sept 2025 – Nov 2025",
    tech: [
      "WordPress",
      "Tailwind",
      "ACF",
      "PHP",
      "JavaScript",
      "Google Analytics",
    ],
  },
  {
    id: 1,
    title: "Computer Programmer",
    desc: "Maintained office systems, UI fixes, and new features. WordPress event pages, content uploads, and technical support for staff—plus design assets for marketing materials.",
    className: "md:col-span-2 text-justify",
    thumbnail: "/icons/exp1.svg",
    year: "Jan 2025 – July 2025",
    tech: ["WordPress", "PHP", "jQuery", "SQL Server", "VB.NET"],
  },
  {
    id: 3,
    title: "Freelance — WordPress & Web Builds",
    desc: "End-to-end client sites on WordPress: custom themes, WooCommerce-ready structures, performance tuning, and ongoing maintenance for small businesses and agencies.",
    tech: ["WordPress", "PHP", "JavaScript", "Tailwind", "Elementor", "ACF"],
    year: "2024 – Present",
    className: "md:col-span-2",
    thumbnail: "/icons/exp3.svg",
  },
  {
    id: 4,
    title: "Automation & Integrations",
    desc: "n8n workflows for lead scraping, cold outreach, and social publishing when Google Drive receives new assets—freeing teams from repetitive manual work.",
    className: "md:col-span-2",
    thumbnail: "/icons/exp4.svg",
    year: "July 2025 – Sept 2025",
    tech: ["n8n", "JavaScript", "Google Drive", "Gmail", "LinkedIn"],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/icons/git.svg",
    link: site.github,
  },
  {
    id: 3,
    img: "/icons/link.svg",
    link: site.linkedin,
  },
];

export const contactPage = {
  headline: "Let's build your next site",
  subheadline:
    "Tell me about your project—platform, timeline, and budget range. I typically reply within 24 hours.",
  bullets: [
    "WordPress custom themes, WooCommerce, or Elementor builds",
    "Shopify theme edits, sections, and storefront improvements",
    "Webflow development, CMS setup, and client handoff",
    "Figma-to-live implementation with performance in mind",
  ],
};
