import styles from "./TopMenu.module.scss";

const TopMenuCard = ({ image, title, size, className }) => {
  return (
    <div className={`${styles.card} ${styles[size]} ${className || ""}`}>
      <div className={styles.imageBox}>
        <img src={image} alt={title} />
      </div>
      <p className={styles.cardTitle}>{title}</p>
    </div>
  );
};

export default TopMenuCard;
