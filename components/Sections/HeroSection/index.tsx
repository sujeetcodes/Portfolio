"use client";

import { ArrowIcon, DownloadIcon } from "@/assets/Icons";
import styles from "@/components/Sections/HeroSection/heroSection.module.css";
import Link from "next/link";
import { resumeLink } from "@/data/HeroData";

const index = () => {
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.blob}></span>
        <div className={styles.box}>
          <div className={styles.content}>
            <h2>Hello! I'm Sujeet Kumar</h2>
            <h1>MERN Stack Developer</h1>
            <p>Building the web with passion and precision.</p>
            <div className={styles.buttons}>
              <Link href="#contact">
                <div className={styles.button}>
                  <span>Let's talk</span>
                  <ArrowIcon />
                </div>
              </Link>
              <Link target="_blank" href={resumeLink}>
                <div className={styles.button2}>
                  <span>Get Resume</span>
                  <DownloadIcon />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
