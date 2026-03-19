import React from "react";
import styles from "./LunchSide.module.scss";

const formatPrice = (price) => {
  if (!price) return "";
  return Number(String(price).replace(/,/g, "")).toLocaleString();
};

const LunchSide = () => {
  const sideItems = [
    {
      name: "1. ポテト",
      prices: [
        { label: "S", price: "350" },
        { label: "M", price: "600" },
        { label: "L", price: "800" },
      ],
      img: "/Products/side/side1.png",
    },
    {
      name: "2. ナゲット",
      prices: [
        { label: "5個", price: "400" },
        { label: "10個", price: "650" },
        { label: "15個", price: "1000" },
      ],
      img: "/Products/side/side2.png",
    },
    {
      name: "3. オニオンリング",
      prices: [
        { label: "S", price: "400" },
        { label: "M", price: "700" },
        { label: "L", price: "950" },
      ],
      img: "/Products/side/side3.png",
    },
    {
      name: "4. チーズスティック",
      prices: [
        { label: "3本", price: "450" },
        { label: "5本", price: "850" },
        { label: "10本", price: "1200" },
      ],
      img: "/Products/side/side4.png",
    },
    {
      name: "5. アランチーニ",
      prices: [
        { label: "3個", price: "450" },
        { label: "6個", price: "850" },
        { label: "9個", price: "1200" },
      ],
      img: "/Products/side/side5.png",
    },
    {
      name: "6. フライドチキン",
      prices: [{ label: "1本", price: "200" }],
      img: "/Products/side/side6.png",
      flavors: [
        "プレーン",
        "ハニーマスタード",
        "ホットチリ",
        "バーベキュー",
        "ガーリック",
        "ヤンニョム",
      ],
    },
    {
      name: "7. ポテトサラダ",
      prices: [{ label: "", price: "450" }],
      img: "/Products/side/side7.png",
    },
    {
      name: "8. カプレーゼ",
      prices: [{ label: "", price: "650" }],
      img: "/Products/side/side8.png",
    },
    {
      name: "9. ガーリックシュリンプ",
      prices: [
        { label: "エビ5個", price: "700" },
        { label: "エビ8個", price: "1100" },
        { label: "エビ12個", price: "1500" },
      ],
      img: "/Products/side/side9.png",
    },
  ];

  const saladItems = [
    { name: "サーモンとキウイのサラダ", img: "/Products/salad/salad5.png" },
    { name: "サーモンサラダ", img: "/Products/salad/salad6.png" },
    { name: "アボカドサラダ", img: "/Products/salad/salad4.png" },
    { name: "レモンサラダ", img: "/Products/salad/salad3.png" },
  ];

  const soupItems = [
    { name: "カボチャポタージュ", img: "/Products/soup/soup3.png" },
    { name: "コーンポタージュ", img: "/Products/soup/soup.png" },
    { name: "ワンタンスープ", img: "/Products/soup/soup2.png" },
    { name: "豚汁", img: "/Products/soup/soup1.png" },
  ];

  const SidePrices = ({ priceList }) => (
    <div className={styles.priceList}>
      {priceList.map((item, index) => (
        <div key={index} className={styles.priceRow}>
          <span className={styles.priceLabel}>{item.label}</span>
          <span className={styles.priceValue}>
            税込 {formatPrice(item.price)}円
          </span>
        </div>
      ))}
    </div>
  );

  // レンダリング＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  return (
    <div className={styles.categoryContent}>
      <h3 className={styles.categoryTitle}>サイド</h3>
      <div className={styles.borderBox}>
        <div className={styles.grandMenuGrid}>
          {sideItems.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.mainImageWrapper}>
                <img src={item.img} alt={item.name} />
              </div>
              <div className={styles.info}>
                <h4 className={styles.itemTitle}>{item.name}</h4>
                <SidePrices priceList={item.prices} />
                {item.flavors && (
                  <div className={styles.flavorArea}>
                    <div className={styles.flavorGrid}>
                      {item.flavors.map((f, idx) => (
                        <span key={idx}>■{f}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3 id="saladAnchor" className={styles.categoryTitle}>
        サラダ
      </h3>
      <div className={styles.horizontalFlex}>
        {saladItems.map((item, i) => (
          <div key={i} className={styles.menuCard}>
            <div className={`${styles.imgBox} ${styles.circle}`}>
              <img src={item.img} alt={item.name} />
            </div>
            <p className={styles.itemName}>{item.name}</p>
          </div>
        ))}
      </div>

      <h3 id="soupAnchor" className={styles.categoryTitle}>
        スープ
      </h3>
      <div className={styles.horizontalFlex}>
        {soupItems.map((item, i) => (
          <div key={i} className={styles.menuCard}>
            <div className={styles.imgBox}>
              <img src={item.img} alt={item.name} />
            </div>
            <p className={styles.itemName}>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LunchSide;
