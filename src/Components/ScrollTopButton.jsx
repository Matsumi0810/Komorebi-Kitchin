import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ScrollTopButton.module.scss";

// トップに戻るボタン
// 状態管理 (State)ーーーーーーーーーーーーーーーーーーー
const ScrollTopButton = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // スクロール量の監視ーーーーーーーーーーー
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ページ遷移時のリセットーーーーーーーーーーーーーー
  useEffect(() => {
    setVisible(false);
  }, [location.pathname]);

  const handleClick = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (!visible) return null;

  return (
    <button
      className={styles.button}
      onClick={handleClick}
      aria-label="トップへ戻る"
    >
      <p className={styles.yajirushi}>↑</p>
      TOP
    </button>
  );
};

export default ScrollTopButton;
