import React from "react";
import styles from "./LunchPasta.module.scss";

const formatPrice = (price) => {
  if (!price) return null;
  return Number(price).toLocaleString();
};

const LunchPasta = ({ items }) => {
  const fairPastaItems = items || [];

  const regularPasta = [
    { name: "1. ボロネーゼ", price: "1200", img: "/Products/pasta/pasta1.png" },
    {
      name: "2. ごろごろ自家製ミートボールパスタ",
      price: "1300",
      img: "/Products/pasta/pasta2.png",
    },
    {
      name: "3. 極み海老と焦がしニンニクの濃厚トマトソース",
      price: "1400",
      img: "/Products/pasta/pasta3.png",
    },
    {
      name: "4. 地中海風 海老たっぷりのトマトパスタ",
      price: "1300",
      img: "/Products/pasta/pasta4.png",
    },
    {
      name: "5. パンチェッタと粗挽き胡椒のカルボナーラ",
      price: "1200",
      img: "/Products/pasta/pasta5.png",
    },
    {
      name: "6. あさりと白ワインのボンゴレ・ビアンコ",
      price: "1200",
      img: "/Products/pasta/pasta6.png",
    },
    {
      name: "7. 大葉明太クリームソース",
      price: "1250",
      img: "/Products/pasta/pasta7.png",
    },
    {
      name: "8. いくらとサーモンの親子パスタ",
      price: "1500",
      img: "/Products/pasta/pasta8.png",
    },
    {
      name: "9. 海の幸の贅沢ペスカトーレ",
      price: "1500",
      img: "/Products/pasta/pasta9.png",
    },
    {
      name: "10. ムール貝と若イカのイカスミパスタ",
      price: "1400",
      img: "/Products/pasta/pasta10.png",
    },
  ];

  const renderPriceRows = (item) => {
    const prices = [
      { val: item.price1, label: "" },
      { val: item.price2, label: "" },
      { val: item.price3, label: "" },
    ];

    const activePrices = prices.filter((p) => p.val);

    return activePrices.map((p, idx) => (
      <div key={idx} className={styles.priceRow}>
        <span className={styles.priceValue}>税込 {formatPrice(p.val)}円</span>
      </div>
    ));
  };

  const renderCard = (item, isCMSData = false) => (
    <div key={isCMSData ? item.id : item.name} className={styles.card}>
      <div className={styles.mainImageWrapper}>
        <img
          src={isCMSData ? item.image?.url : item.img}
          alt={isCMSData ? item.title : item.name}
        />
      </div>
      <div className={styles.info}>
        <h4 className={styles.itemTitle}>
          {isCMSData ? item.title : item.name}
        </h4>
        <div className={styles.priceList}>
          {isCMSData ? (
            renderPriceRows(item)
          ) : (
            <div className={styles.priceRow}>
              <span className={styles.priceValue}>
                税込 {formatPrice(item.price)}円
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.categoryContent}>
      <h3 className={styles.categoryTitle}>パスタ</h3>

      <div className={styles.borderBox}>
        <p className={styles.boxLabel}>期間限定</p>

        {fairPastaItems.length > 0 ? (
          <div className={styles.fairGrid}>
            {fairPastaItems.map((item) => renderCard(item, true))}
          </div>
        ) : (
          <p className={styles.noItem}>
            現在、期間限定メニューはございません。
          </p>
        )}

        <p className={styles.subSectionLabel}>グランドメニュー</p>
        <div className={styles.divider}></div>

        <div className={styles.grandMenuGrid}>
          {regularPasta.map((pasta) => renderCard(pasta, false))}
        </div>
      </div>
    </div>
  );
};

export default LunchPasta;
