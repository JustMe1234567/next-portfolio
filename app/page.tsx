import AboutMe from "@/components/AboutMe";
import FeaturedWorks from "@/components/FeaturedWorks";
import Footer from "@/components/Footer";
import HashScrollHandler from "@/components/HashScrollHandler";
import Hero from "@/components/Hero";
import Platforms from "@/components/Platforms";
import Process from "@/components/Process";
import RecentProjects from "@/components/RecentProjects2";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative flex flex-col overflow-x-hidden bg-black-100 text-white">
      <HashScrollHandler />
      <FloatingNav navItems={navItems} />
      <Hero />
      <Platforms />
      <FeaturedWorks />
      <AboutMe />
      <Process />
      <RecentProjects />
      <Footer />
    </main>
  );
}
