import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
  const items = [
    { name: "Concept", id: "concept" },
    { name: "News", path: "/news" },
    { name: "Menu", path: "/menu" },
    { name: "ペットをお連れのお客様へ", id: "terrace" },
    { name: "採用情報", path: "/recruit" },
  ];

  const shopInfo = [
    { label: "住所", value: "〒123-4567\n陽溜県 木立市 森の里1-2-3" },
    { label: "営業時間", value: "8:00〜18:00" },
    { label: "定休日", value: "毎週火曜日" },
    { label: "TEL", value: "012-345-6789" },
    { label: "座席数", value: "店内：15席 / テラス：4席" },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (e, item) => {
    e.preventDefault();

    if (item.path) {
      window.scrollTo(0, 0);
      navigate(item.path);
      return;
    }

    const id = item.id;
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      window.scrollTo(0, 0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // レンダリング＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  return (
    <footer id="shop" className={styles.footer}>
      <div className={styles.inner}>
        {/* ロゴ -------------------------------------------- */}
        <div className={styles.logo}>
          <a href="/" onClick={scrollToTop}>
            <img src="/Products/logoBG.png" alt="こもれびキッチンのロゴ画像" />
          </a>
        </div>

        {/* ナビゲーション -------------------------------- */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {items.map((item, index) => (
              <li key={index} className={styles.listItem}>
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

        {/* 店舗情報 --------------------------------- */}
        <div className={styles.shopInfo}>
          <dl className={styles.infoList}>
            {shopInfo.map((item, index) => (
              <div key={index} className={styles.infoItem}>
                <dt className={styles.label}>{item.label}</dt>
                <dd className={styles.value}>
                  {item.value.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Google Map --------------------------------------- */}
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13627579.110253144!2d137.15386460000002!3d33.500188599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2sjp!4v1772764104122!5m2!1sen!2sjp"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* コピーライト ---------------------------------- */}
      <div className={styles.copyright}>
        <p>© 2026 komorebi-kitchen All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
