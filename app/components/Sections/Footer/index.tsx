import styles from "./footer.module.css";

const index = () => {
  const year = new Date().getFullYear();
  const author = "Sujeet Kumar";
  return (
    <div className={styles.footerBox}>
      <p>© {year}. {author}</p>
      <p>Developed by <span>{author}</span></p>
    </div>
  );
};

export default index;