
import styles from "./projects.module.css";
import { ProjectType } from "@/app/data/ProjectsData";
import Link from "next/link";
import React, { FC } from "react";

const Project:FC<ProjectType> = ({id, title, description, tags, images, liveLink, gitHubLink}) => {
  return (
    <div key={id} className={styles.projectBox}>
      <div className={styles.aboutProject}>
        <div className={styles.projectHeader}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.projectButtons}>
          <Link href={gitHubLink} className={styles.buttonLink} target="_blank">
            <span>GitHub Link</span>
          </Link>
          <Link href={liveLink} className={styles.buttonLink} target="_blank">
            <span>Live Link</span>
          </Link>
        </div>
      </div>
      <div className={styles.imageContainer}>          
        <div className={styles.imageBox}>
          <img src={images[0].url} alt={title} />          
        </div>
      </div>
    </div>
  );
};

export default Project;