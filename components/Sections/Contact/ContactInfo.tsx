import styles from "./contact.module.css"
import Link from "next/link";

const ContactInfo = () => {
  const contactInfo = {
    email: "sujeetkumar.official798@gmail.com",
    phone: "+91 7982422191",
    address: "New Delhi, Delhi, India",
    linkedin: "https://www.linkedin.com/in/sujeetyt/",
    gitHub: "https://github.com/SujeetYT/",
  }

  return (
    <div className={styles.contactInfoBox}>
      <div className={styles.infoBox}>
        <div className={styles.contactHeader}>
          <h2>Get in touch</h2>
          <p>{contactInfo.email}</p>
          <p>{contactInfo.phone}</p>
          <p>{contactInfo.address}</p>
        </div>
        <div className={styles.contactFooter}>
          <Link href={contactInfo.linkedin}>
            <span>LinkedIn</span>
          </Link>
          <Link href={contactInfo.gitHub}>
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;