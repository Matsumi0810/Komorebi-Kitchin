import React from "react";
import styles from "./LunchWashoku.module.scss";

const formatPrice = (price) => {
  if (!price) return null;
  return Number(price).toLocaleString();
};

const LunchWashoku = ({ items }) => {
  const fairWashokuItems = items || [];

  const regularWashoku = [
    {
      name: "1. ハムカツ",
      prices: { single: "680", set: "1080", side: "350" },
      img: "/Products/washoku/washoku1.png",
    },
    {
      name: "2. コロッケ",
      prices: { single: "450", set: "850", side: "160" },
      img: "/Products/washoku/washoku2.png",
    },
    {
      name: "3. 生姜焼き",
      prices: { single: "850", set: "1250", side: "450" },
      img: "/Products/washoku/washoku3.png",
    },
    {
      name: "4. 回鍋肉",
      prices: { single: "1080", set: "1480", side: "550" },
      img: "/Products/washoku/washoku4.png",
    },
    {
      name: "5. 鶏大根",
      prices: { single: "980", set: "1380", side: "500" },
      img: "/Products/washoku/washoku5.png",
    },
    {
      name: "6. うな丼",
      prices: { single: "1680", set: "1980", side: "850" },
      img: "/Products/washoku/washoku6.png",
    },
    {
      name: "7. 牛丼",
      prices: { single: "500", set: "800", side: "350" },
      img: "/Products/washoku/washoku7.png",
    },
    {
      name: "8. 親子丼",
      prices: { single: "880", set: "1180", side: "450" },
      img: "/Products/washoku/washoku8.png",
    },
    {
      name: "9. カレー",
      prices: { single: "700", set: "1000", side: "350" },
      img: "/Products/washoku/washoku9.png",
    },
    {
      name: "10. カツカレー",
      prices: { single: "950", set: "1250", side: "500" },
      img: "/Products/washoku/washoku10.png",
    },
  ];

  const renderPriceRows = (item) => {
    const labels = ["単品", "定食", "小鉢"];
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
      <h3 className={styles.categoryTitle}>和食・ごはん</h3>

      <div className={styles.borderBox}>
        {fairWashokuItems.length > 0 && (
          <>
            <p className={styles.boxLabel}>期間限定</p>
            <div className={styles.fairGrid}>
              {fairWashokuItems.map((item) => (
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

        <div className={styles.washokuCommitment}>
          <p className={styles.commitmentTitle}>
            ■毎日をいろどる和食のこだわり
          </p>
          <p className={styles.commitmentText}>
            厳選した国産米と、毎朝丁寧にとる出汁。
            <br />
            日本古来の伝統を大切にしながら、
            旬の食材を一番美味しい調理法でご提供します。
            <br />
            心もお腹も満たされる、滋味豊かな味わいをお楽しみください。
          </p>
          <div className={styles.commitmentNote}>
            ■単品（Single Item）
            <br />
            メインのお料理のみをご堪能いただけます。
            <br />
            <br />
            ■定食（Full Course Set）
            <br />
            ＋500円でご飯・汁物・サラダ・デザート付きの充実したセットです。
            <br />
            ※単品にご飯やサラダが含まれているメニューは＋300円となります。
            <br />
            <br />
            ■小鉢（Side Dish Size）
            <br />
            追加の一品に最適なミニサイズです。
          </div>
        </div>

        <div className={styles.grandMenuGrid}>
          {regularWashoku.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.mainImageWrapper}>
                <img src={item.img} alt={item.name} />
              </div>
              <div className={styles.info}>
                <h4 className={styles.itemTitle}>{item.name}</h4>
                <div className={styles.priceList}>
                  <div className={styles.priceRow}>
                    <span className={styles.priceLabel}>単品</span>
                    <span className={styles.priceValue}>
                      税込 {formatPrice(item.prices.single)}円
                    </span>
                  </div>
                  <div className={styles.priceRow}>
                    <span className={styles.priceLabel}>定食</span>
                    <span className={styles.priceValue}>
                      税込 {formatPrice(item.prices.set)}円
                    </span>
                  </div>
                  <div className={styles.priceRow}>
                    <span className={styles.priceLabel}>小鉢</span>
                    <span className={styles.priceValue}>
                      税込 {formatPrice(item.prices.side)}円
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

export default LunchWashoku;
