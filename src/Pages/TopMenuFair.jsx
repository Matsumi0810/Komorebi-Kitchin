import styles from "./TopMenu.module.scss";

// type=dessertかそれ以外か
const TopMenuFair = ({ image, title, price1, type }) => {
  return (
    <div
      className={`${styles.fairCard} ${type === "dessert" ? styles.dessertType : styles.lunchType}`}
    >
      <div className={styles.imageBox}>
        <img src={image} alt={title} />
      </div>

      <div className={styles.content}>
        <p className={styles.itemTitle}>{title}</p>
        {/* price?.＝もしpriceが空でもエラーを出さないため */}
        <p className={styles.price}>税込 {price1?.toLocaleString()}円</p>
      </div>
    </div>
  );
};

export default TopMenuFair;
