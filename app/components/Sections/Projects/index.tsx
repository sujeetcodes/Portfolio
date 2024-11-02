import styles from "./projects.module.css";
import AllProjects from "./AllProjects";

const index = () => {
  return (
    <section id="projects" className={styles.section}>
      <span className={styles.blob}></span>
      <div className={styles.sectionHead}>
        <h3>Projects</h3>
        <p>
          Here are some of the projects I have worked on. Click on the project
          to view more details.
        </p>
      </div>
      <AllProjects />
    </section>
  );
};

export default index;