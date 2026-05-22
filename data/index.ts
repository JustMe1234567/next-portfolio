export const site = {
  name: "John Chloe",
  title: "WordPress · Shopify · Webflow Developer",
  profileImage: "/KlowiProfile.jpg",
  email: "johnchloe.h.gomandoy@gmail.com",
  phone: "+63 9108755326",
  whatsapp: "https://wa.me/639108755326",
  location: "Misamis Occidental, Philippines",
  github: "https://github.com/JustMe1234567",
  linkedin: "https://www.linkedin.com/in/johnchloe",
};

export const hero = {
  eyebrow: "WordPress · Shopify · Webflow",
  headline: "Websites built on the platform you already use",
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
    color: "from-[#21759b]/20 to-[#21759b]/5",
    border: "border-[#21759b]/40",
  },
  {
    name: "Shopify",
    tagline: "Theme customization, Liquid, storefront UX",
    color: "from-[#95bf47]/20 to-[#95bf47]/5",
    border: "border-[#95bf47]/40",
  },
  {
    name: "Webflow",
    tagline: "Pixel-perfect builds, CMS, interactions & handoff",
    color: "from-[#4353ff]/20 to-[#4353ff]/5",
    border: "border-[#4353ff]/40",
  },
];

export const about = {
  intro:
    "I build conversion-focused websites on WordPress, Shopify, and Webflow for brands that need a developer who ships fast, communicates clearly, and cares about business outcomes—not just pixels. From Figma-to-production builds and custom WordPress themes to Shopify storefront tweaks and Webflow CMS setups, I deliver maintainable sites your team can actually run.",
  image: site.profileImage,
  stats: [
    { number: 5, title: "Years Experience" },
    { number: 15, title: "Sites Delivered" },
    { number: 3, title: "Core Platforms" },
    { number: 100, title: "Client Focus", suffix: "%" },
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
    id: 9,
    title: "MindBody Wellness",
    des: "Custom WordPress theme with Tailwind v4, GSAP motion, and a drag-to-scroll testimonials slider for a mental health practice.",
    iconLists: ["/wordpress.svg", "/tail.svg", "/jsLogo.svg", "/htmlLogo.svg"],
    img: "/wellnesspathways.png",
    link: "http://wellnesspathways.free.nf",
    category: ["WordPress"],
    target: "_blank",
    live: true,
  },
  {
    id: 8,
    title: "Smart Agency",
    des: "Agency WordPress theme with Tailwind—services, portfolio, and performance-tuned responsive layout.",
    iconLists: [
      "/wordpress.svg",
      "/tail.svg",
      "/htmlLogo.svg",
      "/cssLogo.svg",
      "/jsLogo.svg",
    ],
    img: "/smartagency.jpg",
    link: "https://smartagency.infinityfree.me/",
    category: ["WordPress"],
    target: "_blank",
    live: true,
  },
  {
    id: 7,
    title: "Plant Buy",
    des: "WooCommerce-ready WordPress shop with ACF, custom post types, Ajax filters, and mobile-first product browsing.",
    iconLists: [
      "/wordpress.svg",
      "/tail.svg",
      "/htmlLogo.svg",
      "/cssLogo.svg",
      "/jsLogo.svg",
    ],
    img: "/plantbuyimage.png",
    link: "https://plantbuy.free.nf/",
    category: ["WordPress"],
    target: "_blank",
    live: true,
  },
  {
    id: 1,
    title: "MediCare",
    des: "Figma-to-WordPress healthcare build with Elementor—pixel-perfect layout and fast static delivery.",
    img: "/medicareImg.jpg",
    iconLists: [
      "/wordpress.svg",
      "/tail.svg",
      "/htmlLogo.svg",
      "/cssLogo.svg",
      "/jsLogo.svg",
    ],
    link: "https://medicare101.netlify.app/",
    category: ["WordPress"],
    target: "_blank",
    live: true,
  },
  {
    id: 2,
    title: "Marci Realtor",
    des: "Real estate frontend with Tailwind and vanilla JS—refined UX, fully responsive, statically hosted.",
    img: "/marciImg.png",
    iconLists: [
      "/tail.svg",
      "/htmlLogo.svg",
      "/cssLogo.svg",
      "/netlifyLogo.svg",
      "/jsLogo.svg",
    ],
    link: "https://marcirealtor.netlify.app/",
    category: ["Frontend"],
    target: "_blank",
    live: true,
  },
  {
    id: 3,
    title: "Lotus Assessment",
    des: "Figma-to-HTML WordPress frontend for a cannabis automation brand—precise desktop layout per spec.",
    img: "/cannabisAssessment.png",
    iconLists: [
      "/wordpress.svg",
      "/tail.svg",
      "/htmlLogo.svg",
      "/netlifyLogo.svg",
      "/cssLogo.svg",
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
    thumbnail: "/exp2.svg",
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
    thumbnail: "/exp1.svg",
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
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Automation & Integrations",
    desc: "n8n workflows for lead scraping, cold outreach, and social publishing when Google Drive receives new assets—freeing teams from repetitive manual work.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    year: "July 2025 – Sept 2025",
    tech: ["n8n", "JavaScript", "Google Drive", "Gmail", "LinkedIn"],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: site.github,
  },
  {
    id: 3,
    img: "/link.svg",
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
