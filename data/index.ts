export const navItems = [
  { name: "Me", link: "#aboutme" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const resumeLink = "wJohnChloe-Resume.pdf";

export const about = {
  intro:
    "Hi, I'm John Chloe 👋. I help businesses turn ideas into powerful, user-friendly digital solutions. With a Bachelor's degree in Information Technology and hands-on experience in full-stack web development, automation, and embedded systems, I build websites and systems that don't just look great — they work great. My focus is on creating engaging, scalable, and results-driven solutions that help brands grow and stand out online.",
  image: "/KlowiProfile.jpg",
  stats: [
    { number: 5, title: "Years Exp" },
    { number: 7, title: "Projects" },
  ],
};

export const gridItems = [
  {
    id: 1,
    title: "Client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tools I use",
    description: "These are the ",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building websites and Embedded Systems",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 9,
    title: "MindBody Wellness WordPress Theme",
    des: "A modern, fully responsive WordPress theme for a psychiatric mental health practice built with Tailwind CSS v4 and GSAP animations. Features a custom interactive testimonials slider with drag/swipe functionality, animated statistics counters, and smooth scroll-triggered animations, all optimized for performance and mobile-first design.",
    iconLists: ["/wordpress.svg", "/tail.svg", "/jsLogo.svg", "/htmlLogo.svg"],
    img: "/wellnesspathways.png",
    link: "http://wellnesspathways.free.nf",
    category: ["Web Development", "WordPress"],
    target: "_blank",
    live: true,
  },
  {
    id: 8,
    title: "Smart Agency",
    des: "A custom wordpress theme  for a digital marketing agency built with Tailwind CSS and HTML. The design is modern and sleek, with a focus on showcasing the agency's services and portfolio. The site is fully responsive and optimized for performance, ensuring a smooth user experience across all devices.",
    iconLists: [
      "/cssLogo.svg",
      "/tail.svg",
      "/htmlLogo.svg",
      "/wordpress.svg",
      "jsLogo.svg",
    ],
    img: "/smartagency.jpg",
    link: "https://smartagency.infinityfree.me/",
    category: ["Web Development"],
    target: "_blank",
    live: true,
  },
  {
    id: 7,
    title: "Plant Buy",
    des: "A custom WordPress plant shop website built with my own classic theme, featuring Advanced Custom Fields, custom post types, and tailored taxonomies for structured, easy-to-manage content. The site includes fully designed single pages for each post type, an archive page, and a category page, all optimized for seamless navigation. With Ajax-powered filtering for fast, reload-free interactions and a mobile-responsive layout, the website delivers a smooth, modern, and highly functional user experience across all devices.",
    iconLists: [
      "/cssLogo.svg",
      "/tail.svg",
      "/htmlLogo.svg",
      "/netlifyLogo.svg",
      "/wordpress.svg",
      "jsLogo.svg",
    ],
    img: "/plantbuyimage.png",
    link: "https://plantbuy.free.nf/",
    category: ["Web Development", "WordPress"],
    target: "_blank",
    live: true,
  },
  {
    id: 6,
    title: "Plant It Too",
    des: "The Plant Shop project is a custom WordPress theme I built from scratch using PHP and Tailwind CSS. It features fully responsive design, custom Gutenberg blocks, and editable content areas powered by Advanced Custom Fields (ACF). The site includes a styled Google Maps integration and focuses on performance, clean design, and flexibility for easy content management.",
    img: "/plantittoo.jpg",
    iconLists: [
      "/cssLogo.svg",
      "/tail.svg",
      "/htmlLogo.svg",
      "/netlifyLogo.svg",
      "/wordpress.svg",
    ],
    link: "https://plantittoo.free.nf/",
    category: ["Web Development", "WordPress"],
    target: "_blank",
    live: true,
  },
  {
    id: 1,
    title: "MediCare Website",
    des: "A fully responsive healthcare website faithfully recreated from a Figma design. Built with custom HTML and CSS in WordPress using Elementor, it delivers a pixel-perfect layout and smooth user experience. The site is served statically for fast loading and performance, combining modern aesthetics with efficient, lightweight code.",
    img: "/medicareImg.jpg",
    iconLists: [
      "/cssLogo.svg",
      "/tail.svg",
      "/htmlLogo.svg",
      "/netlifyLogo.svg",
      "/wordpress.svg",
      "jsLogo.svg",
    ],
    link: "https://medicare101.netlify.app/",
    category: ["Web Development", "WordPress"],
    target: "_blank",
    live: true,
  },
  {
    id: 2,
    title: "Marci Realtor",
    des: "A fully responsive real estate website replicated and enhanced to make it more user friendly and responsive. Built with tailwind css, html, and javascript. The site is serve statically and just a frontend.",
    img: "/marciImg.png",
    iconLists: [
      "/cssLogo.svg",
      "/tail.svg",
      "/htmlLogo.svg",
      "/netlifyLogo.svg",
      "/wordpress.svg",
      "jsLogo.svg",
    ],
    link: "https://marcirealtor.netlify.app/",
    category: ["Web Development"],
    target: "_blank",
    live: true,
  },
  {
    id: 3,
    title: "Cannabis Email And Automation Website",
    des: "Translated a Figma design into a fully functional static website using HTML and CSS for a WordPress frontend. Focused on precise layout implementation and desktop-specific optimization as per project guidelines.",
    img: "/cannabisAssessment.png",
    iconLists: [
      "/cssLogo.svg",
      "/tail.svg",
      "/htmlLogo.svg",
      "/netlifyLogo.svg",
      "/wordpress.svg",
      "jsLogo.svg",
    ],
    link: "https://lotus-assessment.netlify.app/",
    category: ["WordPress", "Web Development"],
    target: "_blank",
    live: true,
  },
  {
    id: 4,
    title: "Automatic Watering IoT System",
    des: "Built an IoT monitoring system using an ESP32 microcontroller integrated with Blynk IoT, enabling real-time viewing of sensor readings (e.g., [temperature, humidity, soil moisture, etc.]).",
    img: "/moistureiot.png",
    iconLists: ["/arduino.svg", "/blynk.svg"],
    link: "#1",
    category: ["IoT System"],
    target: "none",
    live: false,
  },
  {
    id: 5,
    title: "Water Quality Monitoring System",
    des: "Built an ESP32-based system integrated with Telegram Bot API to send and receive data. The bot alerts users when water quality is unsafe and restricts access to verified users only",
    img: "/qualiot.png",
    iconLists: ["/telegram.svg", "/arduino.svg"],
    link: "#2",
    category: ["IoT System", "Automation"],
    target: "none",
    live: false,
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];
/**
 * Maintained existing office computer systems, including updates and troubleshooting
 Added new features and applied fixes to resolve bugs and system issues
 Entered and organized legislative records and resolutions
 Provided technical support to co-workers and staff
 Wordpress uploads and  updating pages for events.
 */
export const workExperience = [
  {
    id: 1,
    title: "Computer Programmer",
    desc: "I maintained and updated office computer systems, handled troubleshooting and UI fixes, and added new features. Providing technical and hardware support to staff, managed WordPress uploads and event page updates, and edited photos for posters and other materials.",
    className: "md:col-span-2 text-justify",
    thumbnail: "/exp1.svg",
    year: "January 2025 - July 2025",
    tech: [
      "vb.net",
      "WordPress",
      "PHP",
      "JQuery",
      "Canva",
      "Photoshop",
      "MS Visual Studio",
      "Sql Server",
    ],
  },
  {
    id: 2,
    title: "Web Developer",
    desc: "Customized and developed WordPress themes to accurately match client-provided designs. Translated Figma and other design files into fully responsive web pages using Tailwind CSS or plain CSS. Implemented Google Analytics for SEO insights and used Tag Manager to track user activities and engagement. Built custom post types and integrated Advanced Custom Fields (ACF) to create flexible, scalable content structures tailored to each project’s needs.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    year: "Sept 2025 - Nov 2025",
    tech: [
      "WordPress",
      "HTML",
      "CSS",
      "Tailwind",
      "Google Analytics",
      "JavaScript",
      "PHP",
      "JQuery",
    ],
  },
  {
    id: 3,
    title: "Freelance Web Developer and Embedded Systems Projects",
    desc: "Creating capstone research projects. Making IoT and embedded systems using esp32 and arduino, and Blynk IoT and Nextjs for frontend of IoT projects.",
    tech: [
      "PHP",
      "Javascript",
      "JQuery",
      "Nodejs",
      "Nextjs",
      "Blynk IoT",
      "Arduino",
      "C++",
      "Telegram",
    ],
    year: "2024 - Present",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "n8n Automation Specialist",
    desc: "Created automation for lead scraping and sending cold emails from scraping. Creating an automation for when the google drive detects a file being uploaded and then uploads it to facebook, instagram, twitter, and LinkedIn.  ",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    year: "July 2025 - September 2025",
    tech: [
      "JavaScript",
      "n8n",
      "ChatGPT",
      "Gmail",
      "LInkedIn",
      "Google Drive",
      "Google Sheets",
    ],
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/JustMe1234567",
  },
  // {
  //   id: 2,
  //   img: "/twit.svg",
  //   link: "#",
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/johnchloe",
  },
];
