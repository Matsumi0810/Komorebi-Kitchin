import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MenuDesserts.module.scss";

const MenuDesserts = () => {
  // microCMSから取得したデータを保存
  const [gelatoItems, setGelatoItems] = useState([]);
  const [cakeItems, setCakeItems] = useState([]);

  // グランドメニューーーーーーーーーーーーーーーーーーーーーーーーーーー
  const regularCakes = [
    { name: "1.ショートケーキ", price: "450", img: "/Products/cake/cake1.png" },
    {
      name: "2.ルージュ・ブランボワーズ",
      price: "420",
      img: "/Products/cake/cake2.png",
    },
    {
      name: "3.ヘーゼルナッツのプラリネ・ティラミス",
      price: "420",
      img: "/Products/cake/cake3.png",
    },
    { name: "4.ガトーショコラ", price: "420", img: "/Products/cake/cake4.png" },
    {
      name: "5.キャラメルナッツのクランチ・チーズケーキ",
      price: "390",
      img: "/Products/cake/cake5.png",
    },
    {
      name: "6.クラシック・ニューヨークチーズケーキ",
      price: "320",
      img: "/Products/cake/cake6.png",
    },
    {
      name: "7.宇治抹茶のなめらかレアチーズケーキ",
      price: "600",
      img: "/Products/cake/cake7.png",
    },
    {
      name: "8.ごろっと果肉のアプリコットパイ",
      price: "650",
      img: "/Products/cake/cake8.png",
    },
    {
      name: "9.オレンジとホワイトチョコの3層ムース",
      price: "580",
      img: "/Products/cake/cake9.png",
    },
    {
      name: "10.ふわふわメレンゲのさわやかレモンパイ",
      price: "620",
      img: "/Products/cake/cake10.png",
    },
  ];
  // ーーーーーーーーーーーーーーーーーーーーーーーーーーーー

  // microCMSからデータを取得
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://m0ju2j4hsp.microcms.io/api/v1/fairdessert`,
        {
          headers: {
            "X-MICROCMS-API-KEY": import.meta.env.VITE_MICROCMS_API_KEY,
          },
        },
      );
      const data = await res.json();
      const contents = data.contents ?? [];

      // 取ってきたデータの中から、IDを指定してジェラートとケーキに振り分ける
      // ジェラート
      setGelatoItems(contents.filter((item) => item.category === 4));
      // ケーキ
      setCakeItems(contents.filter((item) => item.category === 5));
      // ーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
    } catch (error) {
      console.error("Failed to fetch fairdessert:", error);
    }
  };

  // ページを開いた瞬間に一度だけ実行する
  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  // 期間限定メニューの共通デザイン
  const renderFairCard = (item) => (
    <div key={item.id} className={styles.card}>
      <div className={styles.dessertImageWrapper}>
        <img src={item.image?.url} alt={item.title} />
      </div>
      <div className={styles.info}>
        <h4 className={styles.itemTitle}>{item.title}</h4>
        <p className={styles.singlePrice}>
          税込 {item.price1?.toLocaleString()}円
        </p>
        <div className={styles.descriptionWrapper}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        </div>
      </div>
    </div>
  );

  // レンダリング＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Menu</h2>
      </header>

      <div className={styles.dessertHero}>
        <img
          src="/Products/gelato/gelatoHero.png"
          alt="ジェラートのヒーロー画像"
        />
      </div>

      <section className={styles.section}>
        <div className={styles.categoryContent}>
          <h3 className={styles.categoryTitle}>ジェラート</h3>
          <div className={styles.borderBox}>
            <p className={styles.boxLabel}>期間限定</p>
            <div className={styles.fairGrid}>
              {gelatoItems.map((item) => renderFairCard(item))}
            </div>

            <p className={styles.subSectionLabel}>グランドフレーバー</p>
            <div className={styles.divider}></div>

            <div className={styles.flavorContainer}>
              <div className={styles.flavorList}>
                <span>バニラ</span>
                <span>クッキー＆クリームチーズ</span>
                <span>ベルギーチョコ</span>
                <span>黒蜜きなこ餅</span>
                <span>宇治抹茶</span>
                <span>ほうじ茶ラテ</span>
                <span>地中海レモンソルベ</span>
                <span>ロイヤルミルクティー</span>
                <span>塩キャラメルナッツ</span>
                <span>ピスタチオ</span>
              </div>
              <div className={styles.flavorPrices}>
                <p>シングル：税込300円</p>
                <p>ダブル　：税込500円</p>
                <p>トリプル：税込600円</p>
              </div>
            </div>

            <div className={styles.affogatoBox}>
              <div className={styles.affogatoImg}>
                <img src="/Products/gelato/Affogato.png" alt="アフォガート" />
              </div>
              <div className={styles.affogatoInfo}>
                <div className={styles.affogatoHead}>
                  <h4 className={styles.itemTitle}>アフォガート</h4>
                  <p className={styles.singlePrice}>税込 650円</p>
                </div>
                <div className={styles.descriptionWrapper}>
                  <p className={styles.description}>
                    冷たいバニラジェラートの上から、熱々の濃厚なエスプレッソをかけて食べるイタリアのデザートです。溶け出したアイスの甘みと、コーヒーの強い苦みが混ざり合う大人の贅沢な味わいを楽しめます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.dessertHero}>
        <img src="/Products/cake/cakeHero.png" alt="ケーキのヒーロー画像" />
      </div>

      <section className={styles.section}>
        <div className={styles.categoryContent}>
          <h3 className={styles.categoryTitle}>ケーキ</h3>
          <div className={styles.borderBox}>
            <p className={styles.boxLabel}>期間限定</p>
            <div className={styles.fairGrid}>
              {cakeItems.map((item) => renderFairCard(item))}
            </div>

            <p className={styles.subSectionLabel}>グランドメニュー</p>
            <div className={styles.divider}></div>

            <div className={styles.grandMenuGrid}>
              {regularCakes.map((cake, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.mainImageWrapper}>
                    <img src={cake.img} alt={cake.name} />
                  </div>
                  <div className={styles.info}>
                    <h4 className={styles.itemTitle}>{cake.name}</h4>
                    <p className={styles.singlePrice}>税込 {cake.price}円</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className={styles.backToMenuArea}>
        <Link to="/menu" className={styles.backLink}>
          {"メニュートップに戻る".split("").map((char, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
              {char}
            </span>
          ))}
        </Link>
      </div>
    </div>
  );
};

export default MenuDesserts;
