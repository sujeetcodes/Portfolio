import styles from "@/components/Header/Button/style.module.css";
import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

const index: React.FC<ButtonProps> = ({ isActive, setIsActive }) => {
  return (
    <div
      className={styles.button}
      onClick={() => setIsActive(!isActive)}
    >
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0px" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.element}>
          <p>Menu</p>
        </div>
        <div className={styles.element}>
          <p>Close</p>
        </div>
      </motion.div>
    </div>
  );
};

export default index;
