import MemberRegistration from "./MemberRegistration";
import styles from "./MemberRegistrationPage.module.scss";

const MemberRegistrationPage = () => {
  return (
    <div className={styles.pageContainer}>
      <MemberRegistration />
    </div>
  );
};

export default MemberRegistrationPage;