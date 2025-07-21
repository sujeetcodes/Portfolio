import styles from "@/components/Sections/About/about.module.css";
import { AboutData } from "@/data/AboutData";

const index = () => {
  const paragraph = AboutData
  return (
    <div id="about" className={styles.section}>
      <div className={styles.headingText}>
        <h3>About Me</h3>
      </div>
      <div className={styles.description}>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default index;