import { useEffect } from "react";
import styles from "./Recruit.module.scss";
import RecruitList from "./RecruitList";
import RecruitApply from "./RecruitApply";
import RecruitFlow from "./RecruitFlow";

const Recruit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.mainVisual}>
        <h2 className={styles.pageTitle}>採用情報</h2>
      </header>
      <RecruitList />
      <RecruitApply />
      <RecruitFlow />
    </div>
  );
};

export default Recruit;
