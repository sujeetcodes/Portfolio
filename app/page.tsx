"use client";

import styles from "./page.module.css";
import HeroSection from "@/components/Sections/HeroSection";
import About from "@/components/Sections/About";
import Experience from "@/components/Sections/Experience";
import Skills from "@/components/Sections/Skills";
import Services from "@/components/Sections/Services";
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Sections/Footer";
import Loader from "@/components/Loader/Loader";
import React, { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <div className={styles.page}>
          <HeroSection />
          <About />
          <Experience />
          <Skills />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
