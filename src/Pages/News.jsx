import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./News.module.scss";
import Button from "../Components/Button";

const News = () => {
  const [news, setNews] = useState([]);

  // 2. データ取得処理 microCMS
  useEffect(() => {
    const fetchNews = async () => {
      const res = await fetch("https://m0ju2j4hsp.microcms.io/api/v1/news", {
        headers: {
          "X-MICROCMS-API-KEY": import.meta.env.VITE_MICROCMS_API_KEY,
        },
      });
      const data = await res.json();
      setNews(data.contents ?? []);
    };
    fetchNews();
  }, []);

  const visibleItems = news.slice(0, 3);

  // レンダリング＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  return (
    <section id="news" className={styles.news}>
      {/* 背景の枝の装飾 */}
      <span className={styles.branchLeft}></span>
      <span className={styles.branchRight}></span>
      <h2 className={styles.pageTitle}>News</h2>
      <ul className={styles.list}>
        {visibleItems.map((item) => (
          <li key={item.id} className={styles.item}>
            <span className={styles.date}>
              {item.date
                ? new Date(item.date).toLocaleDateString("ja-JP")
                : "日付なし"}{" "}
            </span>
            <Link to={`/news`} className={styles.text}>
              {item.title}
            </Link>{" "}
          </li>
        ))}
      </ul>
      {/* 「お知らせ一覧」ページへ飛ぶボタン */}
      <div className={styles.buttonContainer}>
        <Link to="/news" style={{ textDecoration: "none" }}>
          <Button text="お知らせ一覧 →" color="orange" />
        </Link>
      </div>{" "}
    </section>
  );
};

export default News;
