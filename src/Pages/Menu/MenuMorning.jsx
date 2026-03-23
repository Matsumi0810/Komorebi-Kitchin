import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./MenuMorning.module.scss";
import TopMenuCard from "../../Pages/TopMenuCard";
import DrinksComponents from "../Menu/MenuDrinksComponent";

const MenuMorning = () => {
  const [activeTab, setActiveTab] = useState("toast");
  const [showFixedNav, setShowFixedNav] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const originalNavRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (originalNavRef.current) {
        const rect = originalNavRef.current.getBoundingClientRect();
        setShowFixedNav(rect.top <= 100);
      }

      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        // フッターが画面の下から300pxの位置まで来たらナビを上に上げる
        if (footerTop < window.innerHeight - 300) {
          setIsNavVisible(false);
        } else {
          setIsNavVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (id) => {
    setActiveTab(id);

    setTimeout(() => {
      const element = document.getElementById(`${id}Anchor`);
      if (element) {
        const yOffset = -160;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const morningItems = [
    {
      id: "toast",
      image: "/Products/TopMenu/toast.png",
      title: "お好きなトースト",
      size: "xl",
    },
    {
      id: "salad",
      image: "/Products/TopMenu/salad.png",
      title: "サラダ",
      size: "m",
    },
    {
      id: "soup",
      image: "/Products/TopMenu/soup.png",
      title: "スープ",
      size: "m",
    },
    {
      id: "drink",
      image: "/Products/TopMenu/drink.png",
      title: "ドリンク",
      size: "m",
    },
  ];

  // トーストデータ-----------------------------）
  const toastGroups = [
    {
      price: "税込 400円",
      items: [
        { name: "厚切りバタートースト", img: "/Products/toast/morning2.png" },
      ],
    },
    {
      price: "税込 550円",
      items: [
        { name: "あんバタートースト", img: "/Products/toast/morning6.png" },
        { name: "ハニーバナナトースト", img: "/Products/toast/morning4.png" },
        { name: "ベーコンエッグトースト", img: "/Products/toast/morning3.png" },
      ],
    },
    {
      price: "税込 600円",
      items: [
        {
          name: "いちじく＆クリームチーズトースト",
          img: "/Products/toast/morning9.png",
        },
        { name: "いちごチョコトースト", img: "/Products/toast/morning5.png" },
      ],
    },
    {
      price: "税込 750円",
      items: [
        { name: "ローストビーフトースト", img: "/Products/toast/morning1.png" },
        {
          name: "カマンベールチーズ＆生ハムトースト",
          img: "/Products/toast/morning10.png",
        },
      ],
    },
  ];

  // サラダデータ-----------------------------）
  const saladItems = [
    { name: "ケールとキウイのサラダ", img: "/Products/salad/salad5.png" },
    { name: "サーモンサラダ", img: "/Products/salad/salad6.png" },
    { name: "アボカドサラダ", img: "/Products/salad/salad4.png" },
    { name: "レッドサラダ", img: "/Products/salad/salad3.png" },
  ];

  // スープデータ-----------------------------）
  const soupItems = [
    { name: "カボチャポタージュ", img: "/Products/soup/soup3.png" },
    { name: "コーンポタージュ", img: "/Products/soup/soup.png" },
    { name: "ワンタンスープ", img: "/Products/soup/soup2.png" },
    { name: "豚汁", img: "/Products/soup/soup1.png" },
  ];

  // レンダリング＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Menu</h2>
      </header>

      {/* 修正：isNavVisible が true の時だけ active クラスがつくように変更 */}
      <nav
        className={`${styles.fixedQuickNav} ${showFixedNav && isNavVisible ? styles.active : ""}`}
      >
        <div className={styles.quickNavInner}>
          {morningItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`${styles.quickNavItem} ${activeTab === item.id ? styles.quickActive : ""}`}
            >
              {item.title === "お好きなトースト" ? "トースト" : item.title}
            </button>
          ))}
        </div>
      </nav>

      <section className={styles.section}>
        {/* --- モーニング ヘッダー------------------  */}
        <section className={styles.morning}>
          <div className={styles.sectionTtlWrapper}>
            <p className={styles.sectionTtl}>Morning</p>
            <p className={styles.oderTime}>
              8:00〜11:00 （ラストオーダー 10:30）
            </p>
          </div>

          <div className={styles.morningContainer}>
            <div className={styles.mainItem}>
              <TopMenuCard
                image={morningItems[0].image}
                title={morningItems[0].title}
                size={morningItems[0].size}
              />
            </div>

            <div className={styles.plusWrapper}>
              <img src="/Products/TopMenu/plus.svg" alt="plus" />
            </div>

            <div className={styles.morningRightContent}>
              <div ref={originalNavRef} className={styles.sideItemsFlex}>
                {morningItems.slice(1).map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleTabClick(item.id)}
                    className={styles.tabItem}
                  >
                    <TopMenuCard
                      image={item.image}
                      title={item.title}
                      size={item.size}
                    />
                  </div>
                ))}
              </div>

              <div className={styles.morningInfoArea}>
                <div className={styles.okawariGraphic}>
                  <img
                    src="/Products/TopMenu/okawari.png"
                    alt="300円でおかわり無料"
                  />
                </div>
                <div className={styles.morningText}>
                  <p className={styles.catchText}>
                    \単品OK！/ <br />
                    お好きな組み合わせでどうぞ！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --- トースト ------------------ */}
        <div id="toastAnchor" className={styles.categoryContent}>
          <h3 className={styles.categoryTitle}>トースト</h3>
          <div className={styles.toastGrid}>
            {toastGroups.map((group, idx) => (
              <div key={idx} className={styles.priceGroup}>
                <p className={styles.groupPrice}>{group.price}</p>
                <div className={styles.itemFlex}>
                  {group.items.map((item, i) => (
                    <div key={i} className={styles.menuCard}>
                      <div className={styles.imgBox}>
                        <img src={item.img} alt={item.name} />
                      </div>
                      <p className={styles.itemName}>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* --- サラダ ------------------  */}
        <div id="saladAnchor" className={styles.categoryContent}>
          <h3 className={styles.categoryTitle}>サラダ</h3>
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
        </div>
        {/* --- スープ ------------------  */}
        <div id="soupAnchor" className={styles.categoryContent}>
          <h3 className={styles.categoryTitle}>スープ</h3>
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
        {/* --- ドリンク ------------------  */}
        <div id="drinkAnchor" className={styles.categoryContent}>
          <h3 className={styles.categoryTitle}>ドリンク</h3>
          <div className={styles.horizontalFlex}>
            <DrinksComponents isLunch={true} />
          </div>
        </div>{" "}
      </section>

      {/* メニュートップへ戻るーーーーーーーーーーーーーーーーーーーーーー */}
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

export default MenuMorning;
