import styles from './contact.module.css';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const index = () => {
  return (
    <section id='contact' className={styles.section}>
      <span className={styles.blob}></span>
      <div className={styles.sectionHead}>
        <h3>Contact</h3>
        <p>
          Let's work together!
        </p>
      </div>
      <div className={styles.contactBox}>
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
};

export default index;