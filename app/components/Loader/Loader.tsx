"use client"

import React from "react";
import styles from "./loader.module.css";
import { motion } from "framer-motion";

export default function Check() {


  return (
    <motion.div
      exit={{ y: "-100vh", transition: { duration: 1 }}}
      className={styles.loaderBox}>
      <h2 className={styles.text}>Sujeet Kumar</h2>
      <p>Loading...</p>
    </motion.div>
  );
}
