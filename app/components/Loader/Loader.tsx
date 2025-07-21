"use client";

import React from "react";
import styles from "./loader.module.css";
import { motion } from "framer-motion";
import { LoaderIcon } from "@/app/assets/Icons";

export default function Check() {
  return (
    <motion.div
      exit={{ y: "-100vh", transition: { duration: 1 } }}
      className={styles.loaderBox}
    >
      <h2 className={styles.text}>Sujeet Kumar</h2>
      <div className={styles.loading}>
        <LoaderIcon />
        <p>
          <span style={{ animationDelay: "0.1s" }}>L</span>
          <span style={{ animationDelay: "0.3s" }}>O</span>
          <span style={{ animationDelay: "0.5s" }}>A</span>
          <span style={{ animationDelay: "0.7s" }}>D</span>
          <span style={{ animationDelay: "0.9s" }}>I</span>
          <span style={{ animationDelay: "0.1s" }}>N</span>
          <span style={{ animationDelay: "0.3s" }}>G</span>
          <span style={{ animationDelay: "0.5s" }}>.</span>
          <span style={{ animationDelay: "0.7s" }}>.</span>
          <span style={{ animationDelay: "0.9s" }}>.</span>
        </p>
      </div>
    </motion.div>
  );
}
