import dynamic from "next/dynamic"; // Import dynamic here

import Approach from "@/components/Approach";
import { Clients } from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { Grid } from "@/components/Grid";
import { Hero } from "@/components/Hero";
import { RecentProjects } from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Skills from "@/components/Skills";

// Dynamically import Publications component with ssr: false to disable SSR for this component
const Publications = dynamic(() => import("@/components/Publications"), {
  ssr: false,
});


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-6xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Skills />
        <Clients />
        <Experience />
        {/* Now safely render Publications with dynamic import */}
        <Publications />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
