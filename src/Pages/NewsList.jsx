import { useEffect, useState, useMemo, useRef } from "react";
import styles from "./NewsList.module.scss";
import Button from "../Components/Button";
import InstagramLink from "../Components/InstagramLink";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState("newest"); // 絞り込み条件（新着順 or 月別）
  const footerInstaRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchNews = async () => {
      // microCMSから取ってくる
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

  //新着順 or 月別ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  const monthOptions = useMemo(() => {
    const months = news.map((item) => {
      const date = new Date(item.date);
      return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}`;
    });
    return [...new Set(months)].sort().reverse();
  }, [news]);

  const filteredNews = useMemo(() => {
    let result = [...news];

    // 「新着順」か「特定の月」かでフィルタリング
    if (filter === "newest") {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      result = result.filter((item) => {
        const d = new Date(item.date);
        const format = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}`;
        return format === filter;
      });
    }

    return showAll ? result : result.slice(0, 5);
  }, [news, filter, showAll]);

  // レンダリング＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  return (
    <div className={styles.container}>
      <div className={styles.headerArea}>
        <h2 className={styles.pageTitle}>News</h2>

        {/* 月別絞り込みセレクトボックス */}
        <div className={styles.filterWrapper}>
          <select
            className={styles.select}
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setShowAll(false);
            }}
          >
            <option value="newest">新着順</option>
            {monthOptions.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.list}>
        {filteredNews.map((item) => (
          <article key={item.id} className={styles.item}>
            <div className={styles.meta}>
              <time className={styles.date}>
                {item.date
                  ? new Date(item.date)
                      .toLocaleDateString("ja-JP")
                      .replace(/\//g, ".")
                  : "0000.00.00"}
              </time>
            </div>
            <div className={styles.content}>
              <p className={styles.itemTitle}>{item.title}</p>
              <div
                className={styles.body}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />

              {/* 記事ごとのカスタムボタン（ある場合のみ表示）ーーーーーーーーーーーーーーーー */}
              {item.button &&
                item.button.buttonText &&
                item.button.buttonLink && (
                  <div className={styles.itemButtonArea}>
                    <a href={item.button.buttonLink}>
                      <Button text={item.button.buttonText} color="green" />
                    </a>
                  </div>
                )}
            </div>
          </article>
        ))}
      </div>

      {/* 5件以上ある時に表示される「すべて表示する」ボタン */}
      {!showAll && news.length > 5 && (
        <div
          className={styles.buttonContainer}
          onClick={() => setShowAll(true)}
        >
          <Button text="すべて表示する" color="orange" />
        </div>
      )}

      {/* フッター側のInstagramエリア（ここが見えると浮遊ボタンが消える） */}
      <div className={styles.instaArea} ref={footerInstaRef}>
        <InstagramLink
          text={`質問や相談がございましたら
DMにてお気軽にお聞きください。`}
        />
      </div>
    </div>
  );
};

export default NewsList;
