import React from "react";
import styles from "./LunchPizza.module.scss";

const formatPrice = (price) => {
  if (!price) return null;
  return Number(price).toLocaleString();
};

const LunchPizza = ({ items }) => {
  const fairPizzaItems = items || [];

  const regularPizza = [
    {
      name: "1. マルゲリータ",
      prices: { s: "980", m: "1380", l: "1780" },
      img: "/Products/pizza/pizza1.png",
    },
    {
      name: "2. ペパロニ",
      prices: { s: "1080", m: "1580", l: "1980" },
      img: "/Products/pizza/pizza2.png",
    },
    {
      name: "3. ピザパンピザ",
      prices: { s: "1180", m: "1680", l: "2080" },
      img: "/Products/pizza/pizza3.png",
    },
    {
      name: "4. オリーブ＆チーズ",
      prices: { s: "1280", m: "1780", l: "2180" },
      img: "/Products/pizza/pizza4.png",
    },
    {
      name: "5. 照り焼きチキン",
      prices: { s: "1180", m: "1680", l: "2080" },
      img: "/Products/pizza/pizza5.png",
    },
    {
      name: "6. ボロネーゼ",
      prices: { s: "1150", m: "1650", l: "2050" },
      img: "/Products/pizza/pizza6.png",
    },
    {
      name: "7. サーモンマヨ",
      prices: { s: "1280", m: "1780", l: "2180" },
      img: "/Products/pizza/pizza7.png",
    },
    {
      name: "8. 贅沢クワトロ・フォルマッジ",
      prices: { s: "1050", m: "1550", l: "1950" },
      img: "/Products/pizza/pizza8.png",
    },
  ];

  const renderPriceRows = (item) => {
    const labels = ["S", "M", "L"];
    const prices = [item.price1, item.price2, item.price3];

    return prices.map((price, idx) => {
      if (!price) return null;
      return (
        <div key={idx} className={styles.priceRow}>
          <span className={styles.priceLabel}>{labels[idx]}</span>
          <span className={styles.priceValue}>税込 {formatPrice(price)}円</span>
        </div>
      );
    });
  };

  return (
    <div className={styles.categoryContent}>
      <h3 className={styles.categoryTitle}>ピザ</h3>

      <div className={styles.borderBox}>
        {fairPizzaItems.length > 0 && (
          <>
            <p className={styles.boxLabel}>期間限定</p>
            <div className={styles.fairGrid}>
              {fairPizzaItems.map((item) => (
                <div key={item.id} className={styles.card}>
                  <div className={styles.mainImageWrapper}>
                    <img src={item.image?.url} alt={item.title} />
                  </div>
                  <div className={styles.info}>
                    <h4 className={styles.itemTitle}>{item.title}</h4>
                    <div className={styles.priceList}>
                      {renderPriceRows(item)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.subSectionLabel}>グランドメニュー</p>
            <div className={styles.divider}></div>
          </>
        )}

        <div className={styles.grandMenuGrid}>
          {regularPizza.map((pizza, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.mainImageWrapper}>
                <img src={pizza.img} alt={pizza.name} />
              </div>
              <div className={styles.info}>
                <h4 className={styles.itemTitle}>{pizza.name}</h4>
                <div className={styles.priceList}>
                  <div className={styles.priceRow}>
                    <span className={styles.priceLabel}>S</span>
                    <span className={styles.priceValue}>
                      税込 {formatPrice(pizza.prices.s)}円
                    </span>
                  </div>
                  <div className={styles.priceRow}>
                    <span className={styles.priceLabel}>M</span>
                    <span className={styles.priceValue}>
                      税込 {formatPrice(pizza.prices.m)}円
                    </span>
                  </div>
                  <div className={styles.priceRow}>
                    <span className={styles.priceLabel}>L</span>
                    <span className={styles.priceValue}>
                      税込 {formatPrice(pizza.prices.l)}円
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LunchPizza;
