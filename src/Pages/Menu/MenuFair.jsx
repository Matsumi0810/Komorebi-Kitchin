import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import styles from "./MenuFair.module.scss";

const MenuFair = () => {
  // カテゴリーごとに取得したデータを格納
  const [pizzaItems, setPizzaItems] = useState([]);
  const [mainItems, setMainItems] = useState([]);
  const [dessertItems, setDessertItems] = useState([]);

  //メイン・ピザ・デザートの３種類をエンドポイントで管理
  const fetchData = async (endpoint, setter) => {
    try {
      const res = await fetch(
        `https://m0ju2j4hsp.microcms.io/api/v1/${endpoint}`,
        {
          headers: {
            "X-MICROCMS-API-KEY": import.meta.env.VITE_MICROCMS_API_KEY,
          },
        },
      );
      const data = await res.json();
      setter(data.contents ?? []);
    } catch (error) {
      console.error(`Failed to fetch ${endpoint}:`, error);
    }
  };

  // ページ読み込み時に3つのAPIを一気に叩く
  useEffect(() => {
    fetchData("fairpizza", setPizzaItems);
    fetchData("fairmain", setMainItems);
    fetchData("fairdessert", setDessertItems);
    window.scrollTo(0, 0);
  }, []);

  // ピザのように「S/M/Lで値段が違う」ものと「一律価格」のものを自動判別して表示
  const renderPrice = (item) => {
    // ３つの価格
    if (item.price1 || item.price2 || item.price3) {
      return (
        <div className={styles.multiPrice}>
          {item.price1 && (
            <span>Sサイズ（ハーフ） 税込{item.price1.toLocaleString()}円</span>
          )}
          {item.price2 && (
            <span>Mサイズ（ホール） 税込{item.price2.toLocaleString()}円</span>
          )}
          {item.price3 && (
            <span>Lサイズ（ラージ） 税込{item.price3.toLocaleString()}円</span>
          )}
        </div>
      );
    }
    // それ以外は通常の「1つの価格」を表示
    return (
      <p className={styles.singlePrice}>税込{item.price?.toLocaleString()}円</p>
    );
  };

  // レンダリング＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Menu</h2>
      </header>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>冬のごちそうセレクション</h3>
        <div className={styles.mainGrid}>
          {/* メインとピザを同時に回す */}
          {[...mainItems, ...pizzaItems].map((item) => (
            <div key={item.id} className={styles.card}>
              {/* メインーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
              <div className={styles.mainImageWrapper}>
                <img src={item.image?.url} alt={item.title} />
              </div>
              <div className={styles.info}>
                <h4 className={styles.itemTitle}>{item.title}</h4>
                {renderPrice(item)}
                <div className={styles.descriptionWrapper}>
                  <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.btnArea}>
          <Link to="/menu/lunch">
            <Button text="ランチメニューを見る" color="orange" />
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>
          いちご＆チョコのバレンタインフェア
        </h3>
        <div className={styles.dessertGrid}>
          {dessertItems.map((item) => (
            <div key={item.id} className={styles.card}>
              {/* デザートーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
              <div className={styles.dessertImageWrapper}>
                <img src={item.image?.url} alt={item.title} />
              </div>
              <div className={styles.info}>
                <h4 className={styles.itemTitle}>{item.title}</h4>
                {renderPrice(item)}
                <div className={styles.descriptionWrapper}>
                  <div
                    className={styles.description}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.btnArea}>
          <Link to="/menu/desserts">
            <Button text="デザートメニューを見る" color="orange" />
          </Link>
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

export default MenuFair;
