export const navItems = [
  { name: "Me", link: "#aboutme" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

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
    id: 1,
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
    id: 2,
    title: "Water Quality Monitoring System",
    des: "Built an ESP32-based system integrated with Telegram Bot API to send and receive data. The bot alerts users when water quality is unsafe and restricts access to verified users only",
    img: "/qualiot.png",
    iconLists: ["/telegram.svg", "/arduino.svg"],
    link: "#2",
    category: ["IoT System", "Automation"],
    target: "none",
    live: false,
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "#3",
    category: ["Web Development"],
    target: "none",
    live: false,
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "#4",
    category: ["Three js"],
    target: "none",
    live: true,
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
    title: "IT Staff",
    desc: "Handling data entry for legislative records in the legislative tracking system, ensuring older copies of resolutions are stored accurately and in compliance with the guidelines provided by my supervisor. Maintaining a high level of productivity by leveraging AI for noise cleaning and using macros for templating and formatting Excel spreadsheets.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    year: "January 2025 - July 2025",
    tech: ["vb.net", "Excel", "Google Sheet", "Chatgpt", "Acrobat Reader"],
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
