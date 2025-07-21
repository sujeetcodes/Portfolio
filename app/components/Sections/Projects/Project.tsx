import styles from "./projects.module.css";
import { ProjectType } from "@/app/data/ProjectsData";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const Project: FC<ProjectType> = ({
  id,
  title,
  description,
  tags,
  images,
  liveLink,
  gitHubLink,
}) => {
  return (
    <div key={id} className={styles.projectBox}>
      <div className={styles.aboutProject}>
        <div className={styles.projectHeader}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.projectButtons}>
          {gitHubLink && (
            <Link
              href={gitHubLink}
              className={styles.buttonLink}
              target="_blank"
            >
              <span>GitHub Link</span>
            </Link>
          )}
          {liveLink && (
            <Link href={liveLink} className={styles.buttonLink} target="_blank">
              <span>Live Link</span>
            </Link>
          )}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageBox}>
          <Image
            src={images[0].url}
            alt={title}
            width={100}
            height={100}
            quality={100}
            unoptimized={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
