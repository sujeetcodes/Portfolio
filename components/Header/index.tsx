"use client";

import Button from "@/components/Header/Button";
import styles from "@/components/Header/style.module.css";
import { useState, useRef, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Nav from "@/components/Header/Nav/index";
import Link from "next/link";

const navBg = {
  backgroundColor: "#ffffff17",
  backdropFilter: "blur(100px)",
  height: "70px",
};

const variants = {
  open: {
    width: 320,
    height: 650,
    top: -10,
    right: -10,
    transition: {
      duration: 0.25,
      ease: [0.76, 0, 0.24, 1],
    },
  },

  closed: {
    width: 100,
    height: 40,
    top: 0,
    right: 0,
    transition: {
      duration: 0.25,
      delay: 0.25,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const index = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [scrollyValue, setScrollyValue] = useState<number>(0);
  const menuRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollyValue(latest);
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  return (
    <motion.div
      className={styles.header}
      style={scrollyValue > 100 ? navBg : {}}
    >
      <Link href="#hero">
        <span>SUJEET KUMAR</span>
      </Link>
      <div className={styles.menuOption} ref={menuRef}>
        <motion.div
          className={styles.menu}
          variants={variants}
          initial="closed"
          animate={isActive ? "open" : "closed"}
        >
          <AnimatePresence>
            {isActive && <Nav setIsActive={setIsActive} />}
          </AnimatePresence>
        </motion.div>
        <Button isActive={isActive} setIsActive={setIsActive} />
      </div>
    </motion.div>
  );
};

export default index;
