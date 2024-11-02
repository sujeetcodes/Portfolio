"use client";

import Button from "@/app/components/Header/Button";
import styles from "@/app/components/Header/style.module.css"
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Nav from "@/app/components/Header/Nav";
import Link from "next/link";

const navBg = {
  backgroundColor: "#ffffff17",
  backdropFilter: "blur(100px)",
}

const variants = {
  open: {
    width: 320,
    height: 650,
    top: -15,
    right: -15,
    transition: { 
      duration: 0.25, 
      ease: [0.76, 0, 0.24, 1]
    }
  },
  
  closed: {
    width: 100,
    height: 40,
    top: 0,
    right: 0,
    transition: { 
      duration: 0.25, 
      delay: 0.25,
      ease: [0.76, 0, 0.24, 1]
    }
  }
}

const index = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [scrollyValue, setScrollyValue] = useState<number>(0);
  const {scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollyValue(latest);
  })
  

  return (
    <motion.div 
      className={styles.header} 
      style={scrollyValue > 100 ? navBg : {}}
    >
      <Link href="#hero">
        <span>SUJEET KUMAR</span>
      </Link>
      <div className={styles.menuOption}>
        <motion.div
          className={styles.menu}
          variants={variants}
          initial="closed"
          animate={isActive ? "open" : "closed"}
        >
          <AnimatePresence>
            {isActive && <Nav />}
          </AnimatePresence>
        </motion.div>
        <Button isActive={isActive} setIsActive={setIsActive} />
      </div>
    </motion.div>
  );
};

export default index;