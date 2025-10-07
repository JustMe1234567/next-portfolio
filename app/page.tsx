import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects2";
import { FloatingNav } from "@/components/ui/FloatingNav";
import WorkExperience from "@/components/WorkExperience";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-x-hidden">
      <div className="max-w-7xl w-full ">
        <div className="text-white">
          <FloatingNav navItems={navItems} />
          <Hero />
          <AboutMe />
          <Grid />
          <RecentProjects />
          <WorkExperience />
          <Footer />
        </div>
      </div>
    </main>
  );
}
