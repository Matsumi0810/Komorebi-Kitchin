import styles from "./TerraceFaqCard.module.scss";

const TerraceFaqCard = ({ question, answer }) => {
  return (
    <div className={styles.faqCard}>
      <div className={styles.questionBox}>
        <p className={styles.questionText}>{question}</p>
      </div>
      <div className={styles.answerBox}>
        <p className={styles.answerText}>{answer}</p>
      </div>
    </div>
  );
};

export default TerraceFaqCard;
