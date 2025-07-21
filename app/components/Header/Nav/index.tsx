import { NavFooterData, NavData } from "../../../data/NavData";
import styles from "./style.module.css";
import { motion } from "framer-motion";

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },
  enter: (i: number) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.25,
      opacity: { duration: 0.35 },
      delay: 0.35 + i * 0.1,
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const slideIn = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      delay: 0.75 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

interface NavProps {
  setIsActive: (isActive: boolean) => void;
}
const index: React.FC<NavProps> = ({ setIsActive }) => {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {NavData.map((item, i) => {
          return (
            <div className={styles.linkContainer} key={i}>
              <motion.div
                custom={i}
                className={styles.navItem}
                variants={perspective}
                animate="enter"
                initial="initial"
                exit="exit"
              >
                <a href={item.href} onClick={() => setIsActive(false)}>
                  {item.title}
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className={styles.footer}>
        {NavFooterData.map((item, i) => {
          return (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              variants={slideIn}
              custom={i}
              animate="enter"
              initial="initial"
              exit="exit"
            >
              {item.title}
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default index;
