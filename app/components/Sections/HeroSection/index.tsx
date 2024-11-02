"use client"

import { ArrowIcon, DownloadIcon } from "@/app/assets/Icons";
import styles from "@/app/components/Sections/HeroSection/heroSection.module.css";
import Link from "next/link";


const index = () => {

  return (
    <section id="hero" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.blob}></span>
        <div className={styles.box}>
          <div
            className={styles.content}
          >
            <h2>Hello! I'm Sujeet Kumar</h2>
            <h1>MERN Stack Developer</h1>
            <p>Building the web with passion and precision.</p>
            <div className={styles.buttons}>
              <Link href="#">
                <div className={styles.button}>
                  <span>Let's talk</span>
                  <ArrowIcon />
                </div>
              </Link>
              <Link target="_blank" href="https://drive.google.com/file/d/19k_qtjJI3dhsmJf3ZyZkyM6wu-Cy5uwz/view?usp=sharing">
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