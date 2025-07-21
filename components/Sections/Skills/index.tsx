import styles from "./skills.module.css";
import SkillsRow from "./SkillsRow";
import { Skills } from "@/data/Skills";

const index = () => {
  return (
    <section id="skills" className={styles.section}>
      <SkillsRow skills={Skills} from={0} to={"-100%"}/>
      <SkillsRow skills={Skills} from={"-100%"} to={0}/>
      <SkillsRow skills={Skills} from={0} to={"-100%"}/>
    </section>
  );
};

export default index;