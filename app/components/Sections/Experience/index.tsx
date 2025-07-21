import styles from "@/app/components/Sections/Experience/experience.module.css";
import ExperienceDetails from "./ExperienceDetails";
import { experienceData } from "@/app/data/ExperienceData";

const index = () => {
  return (
    <div id="experience" className={styles.section}>
      <span className={styles.blob}></span>
      <div className={styles.headingText}>
        <h3>Experience</h3>
        <p>Transforming ideas into functional technology.</p>
      </div>
      {[...experienceData].reverse().map((data) => (
        <ExperienceDetails
          key={data.id}
          id={data.id}
          title={data.title}
          company={data.company}
          location={data.location}
          startDate={data.startDate}
          endDate={data.endDate}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default index;
