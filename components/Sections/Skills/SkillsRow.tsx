"use client";

import styles from "./skills.module.css";
import { motion } from "framer-motion";
import { FC } from "react";

interface ISkillsRowProps {
  skills: string[];
  from: string | number;
  to: string | number;
}

const SkillsRow:FC<ISkillsRowProps> = ({skills, from, to}) => {
  return (
    <div className={styles.row}>
      <motion.div 
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className={styles.wrapper}
      >
        {          
          skills?.map((skill, index) => (
            <span key={index} className={styles.skill}>
              {skill + " •"}
            </span>
          ))
        }
      </motion.div>
      <motion.div 
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className={styles.wrapper}
      >
        {          
          skills?.map((skill, index) => (
            <span key={index} className={styles.skill}>
              {skill + " •"}
            </span>
          ))
        }
      </motion.div>
    </div>
  );
};

export default SkillsRow;