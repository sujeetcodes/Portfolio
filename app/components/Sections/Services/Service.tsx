import { FC } from "react";
import styles from "./services.module.css";
import Link from "next/link";


interface ExperienceDetailsProps {
  key: number;
  heading: string;
  subHeading: string;
}

const Service: FC<ExperienceDetailsProps> = ({ key, heading, subHeading }) => {
  return (
    <Link href="#contact" className={styles.link}>
      <div key={key} className={styles.serviceBox}>
        <div className={styles.heading}>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
        <div className={styles.contact}>
          <span>Let's Discuss</span>
        </div>
      </div>
    </Link>
  );
};

export default Service;
