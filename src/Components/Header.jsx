import { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const items = [
    { name: "Concept", id: "concept" },
    { name: "News", path: "/news" },
    { name: "Menu", path: "/menu" },
    { name: "ペットをお連れのお客様へ", id: "terrace" },
    { name: "店舗情報", id: "shop" },
    { name: "採用情報", path: "/recruit" },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const scrollTimerRef = useRef(null);

  const isTopPage = location.pathname === "/";

  const handleScrollTo = (e, item) => {
    e.preventDefault();

    // pathがある場合（別ページへ移動）
    // 遷移後はトップから表示
    if (item.path) {
      window.scrollTo(0, 0);
      navigate(item.path);
      if (setOpen) setOpen(false);
      return;
    }

    //idがある場合（ページ内リンク）
    const id = item.id;
    const element = document.getElementById(id);

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    if (setOpen) setOpen(false);
  };

  // ロゴクリック時：トップページなら最上部へ、それ以外ならトップへ遷移
  const scrollToTop = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    setOpen(false);
  };

  // 別ページからハッシュ付きで戻ってきた時に、その場所までスクロールさせる
  useEffect(() => {
    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
    }

    if (!location.hash || location.pathname !== "/") return;

    const id = location.hash.replace("#", "");
    if (!id) return;

    scrollTimerRef.current = setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // スクロールが終わったらURLから「#id」を消して綺麗にする
        window.history.replaceState(null, "", "/");
      }
      // ScrollToTop.jsxとの競合を避けるために100→300に変更
    }, 300);

    return () => {
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, [location]);

  // フッターが見えたらヘッダーを隠す
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (footerTop < windowHeight - 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // レンダリング＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  return (
    <header
      className={`
        ${styles.header} 
        ${!isVisible ? styles.hide : ""} 
        ${isTopPage ? styles.topHeader : styles.subHeader}
      `}
    >
      <div className={styles.inner}>
        {/* ロゴ部分：トップページorそれ以外かによって2種類のロゴを出し分け */}
        <a href="/" className={styles.logoArea} onClick={scrollToTop}>
          <img
            src="/Products/logoBG.png"
            alt="こもれびキッチンのロゴ画像"
            className={`${styles.logoImg} ${isTopPage ? styles.show : styles.hidden}`}
          />
          <img
            src="/Products/logoGR.png"
            alt="こもれびキッチンのロゴ画像（サブ）"
            className={`${styles.logoImg} ${!isTopPage ? styles.show : styles.hidden}`}
          />
        </a>

        {/* PC用ナビゲーションーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー */}
        <nav>
          <ul className={styles.list}>
            {items.map((item, index) => (
              <li key={index} className={styles.ListItem}>
                <button
                  className={styles.linkButton}
                  onClick={(e) => handleScrollTo(e, item)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* スマホ用メニューボタン ハンバーガー */}
        <button
          className={`${styles.menuButton} ${open ? styles.open : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {/* スマホメニュー展開時の背景オーバーレイ */}
      <div
        className={`${styles.overlay} ${open ? styles.show : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* スマホ用スライドメニュー */}
      <nav
        className={`${styles.mobileNav} ${open ? styles.open : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {items.map((item, index) => (
          <button
            key={index}
            className={styles.linkButton}
            onClick={(e) => handleScrollTo(e, item)}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
