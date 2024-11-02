"use client";

import { FC, useEffect } from "react";
import styles from "@/app/components/Sections/Experience/experience.module.css";

interface ExperienceDetailsProps {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

const formatDate = (date:string) => date === "Present" ? date : date.split("-").reverse().slice(1).join("-");

const ExperienceDetails:FC<ExperienceDetailsProps> = ({id, title, company, location, startDate, endDate, description}) => {
  
  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = formatDate(endDate);
  
  return (
    <div key={id} className={styles.experienceBox}>
      <div className={styles.detailsBox}>
        <div className={styles.number}>
          <span>0{id}</span>
        </div>
        <div className={styles.details}>
          <div className={styles.heading}>
            <p>{title}</p>
            <p>{company}</p>
          </div>
          <div className={styles.dateLocation}>
            <p>{formattedStartDate} - {formattedEndDate}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <ul className={styles.unOrderedList}>
          {
            description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default ExperienceDetails;