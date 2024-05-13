"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/intro";
import { Loading } from "@/components/loading";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10);
  }, [loading]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <main className="flex flex-col items-center px-4">
      <Header />
      <Intro />
      <SectionDivider />
      <About />
      <Experience />

      <Skills />
      <Projects />

      <Contact />
      <Footer />
    </main>
  );
}
