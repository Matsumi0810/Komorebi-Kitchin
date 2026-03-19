import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./MenuTopPage.module.scss";

// 各メニューへの入り口
const MenuPage = () => {
  const [fairImages, setFairImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    const fetchFairImages = async () => {
      try {
        const res = await fetch(
          "https://m0ju2j4hsp.microcms.io/api/v1/fairimage",
          {
            headers: {
              "X-MICROCMS-API-KEY": import.meta.env.VITE_MICROCMS_API_KEY,
            },
          },
        );
        const data = await res.json();
        setFairImages(data.contents ?? []);
      } catch (error) {
        console.error("Failed to fetch fair images:", error);
      }
    };
    fetchFairImages();
  }, []);

  // 期間限定セクションのみ登録画像をスライドさせる
  useEffect(() => {
    if (fairImages.length <= 1) return;

    timerRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 3000);

    return () => clearInterval(timerRef.current);
  }, [fairImages]);

  // 無限ループ：最後まで行ったらアニメーションを切って0枚目に戻す
  useEffect(() => {
    if (currentImageIndex === fairImages.length && fairImages.length > 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentImageIndex(0);
      }, 800);
    }
  }, [currentImageIndex, fairImages.length]);

  const menuCategories = [
    {
      id: "fair",
      title: "期間限定",
      subTitle: "Fair",
      path: "/menu/fair",
      note: "冬のごちそうセレクション：本場バレンタインフェア開催中！",
      large: true,
    },
    {
      id: "drinks",
      title: "ドリンク",
      subTitle: "Drinks",
      path: "/menu/drinks",
      image: "/Products/menuTop/coffee5.png",
      large: true,
    },
    {
      id: "morning",
      title: "モーニング",
      subTitle: "Morning",
      path: "/menu/morning",
      image: "/Products/menuTop/morning.png",
    },
    {
      id: "lunch",
      title: "ランチ",
      subTitle: "Lunch",
      path: "/menu/lunch",
      image: "/Products/menuTop/pasta.png",
    },
    {
      id: "desserts",
      title: "デザート",
      subTitle: "Desserts",
      path: "/menu/desserts",
      image: "/Products/menuTop/cake4.png",
    },
  ];

  // レンダリング＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  return (
    <div className={styles.container}>
      <header className={styles.headerArea}>
        <h2 className={styles.pageTitle}>Menu</h2>
      </header>

      <div className={styles.menuGrid}>
        {menuCategories.map((cat) => {
          const isFair = cat.id === "fair";

          return (
            <Link
              key={cat.id}
              to={cat.path}
              className={`${styles.menuCard} ${cat.large ? styles.large : ""}`}
              /* 通常のカードは背景画像をそのままセット。
                 Fairカード（スライダー）の場合は、中で動かすのでここでは背景を空にする */
              style={
                !isFair
                  ? {
                      backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(${cat.image})`,
                    }
                  : {}
              }
            >
              {/* スライダーの「表示窓」と「動く中身」 */}
              {isFair && (
                <div className={styles.sliderWrapper}>
                  <div
                    className={styles.sliderInner}
                    style={{
                      transform: `translateX(-${currentImageIndex * 100}%)`,
                      transition: isTransitioning
                        ? "transform 0.8s ease-in-out"
                        : "none",
                    }}
                  >
                    {/* 画像の羅列と無限ループの仕掛け */}
                    {fairImages.map((img, i) => (
                      <div
                        key={i}
                        className={styles.slideItem}
                        style={{
                          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(${img.fairimage?.url || "/menu-fair-placeholder.jpg"})`,
                        }}
                      />
                    ))}
                    {fairImages.length > 0 && (
                      <div
                        className={styles.slideItem}
                        style={{
                          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(${fairImages[0].fairimage?.url})`,
                        }}
                      />
                    )}
                  </div>
                </div>
              )}

              {/* カード内の文字情報 */}
              <div className={styles.cardContent}>
                <div className={styles.titleGroup}>
                  <h3 className={styles.catTitle}>{cat.title}</h3>
                  <span className={styles.catSub}>{cat.subTitle}</span>
                </div>
                {cat.note && <p className={styles.catNote}>{cat.note}</p>}
              </div>
            </Link>
          );
        })}
      </div>

      {/* アレルギーについてーーーーーーーーーーーーーーーーーーーー */}
      <div className={styles.allergyNote}>
        <p className={styles.allergyTitle}>【アレルギーをお持ちのお客様へ】</p>
        <p className={styles.allergyText}>
          当店では、アレルギー特定原材料を含むすべての食材を同一の厨房で調理しております。
          <br />
          十分な洗浄・清掃を行っておりますが、微量混入の可能性を完全に否定することはできません。
          <br />
          症状が重篤な方やご不安な方は、ご注文前にスタッフまでお気軽にご相談ください。
        </p>
      </div>
    </div>
  );
};

export default MenuPage;
