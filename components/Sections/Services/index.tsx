import Link from "next/link";
import Service from "./Service";
import styles from "./services.module.css";
import { ServiceData } from "@/data/ServiceData";

const index = () => {
  return (
    <section id="services" className={styles.section}>
      <span className={styles.blob}></span>
      <div className={styles.sectionHead}>
        <h3>Services</h3>
        <p>
          I provide a wide range of services to help you achieve your goals.
        </p>
      </div>
      <div className={styles.services}>
        {ServiceData.map((service, index) => (
          <Service
            key={index}
            heading={service.heading}
            subHeading={service.subHeading}
          />
        ))}
      </div>
      <div className={styles.contactMobile}>
        <Link href="#contact">
          <span>Let's Discuss</span>
        </Link>
      </div>
    </section>
  );
};

export default index;