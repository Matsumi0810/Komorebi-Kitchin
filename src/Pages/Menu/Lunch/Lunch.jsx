import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Lunch.module.scss";
import { client } from "../../../microcms";
import TopMenuFair from "../../TopMenuFair";
import TopMenuCard from "../../TopMenuCard";
import LunchPasta from "./LunchPasta";
import LunchPizza from "./LunchPizza";
import LunchWashoku from "./LunchWashoku";
import LunchSide from "./LunchSide";
import DrinksComponents from "../MenuDrinksComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const lunchItems = [
  { id: "pasta", image: "/Products/TopMenu/pasta.png", title: "パスタ" },
  { id: "pizza", image: "/Products/TopMenu/pizza.png", title: "ピザ" },
  {
    id: "washoku",
    image: "/Products/TopMenu/washoku.png",
    title: "和食・定食",
  },
  { id: "side", image: "/Products/TopMenu/side.png", title: "サイド" },
  { id: "salad", image: "/Products/TopMenu/salad.png", title: "サラダ" },
  { id: "soup", image: "/Products/TopMenu/soup.png", title: "スープ" },
  { id: "drink", image: "/Products/TopMenu/drink.png", title: "ドリンク" },
];

const doubleItems = (items) => [
  ...items.map((item, i) => ({ ...item, _key: `a-${i}` })),
  ...items.map((item, i) => ({ ...item, _key: `b-${i}` })),
];

const FairSwiper = ({ items, type }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const total = items.length;
  const doubled = doubleItems(items);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex % total);
  };

  return (
    <div className={styles.fairSwiperWrapper}>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        observer={true}
        observeParents={true}
        breakpoints={{
          0: { slidesPerView: 1.2, spaceBetween: 10 },
          640: { slidesPerView: 2.2, spaceBetween: 20 },
          1040: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className={styles.fairSwiper}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
      >
        {doubled.map((item) => (
          <SwiperSlide key={item._key}>
            <TopMenuFair
              image={item.image.url}
              title={item.title}
              price1={item.price1}
              type={type}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.customPagination}>
        {items.map((_, i) => (
          <span
            key={i}
            className={`${styles.bullet} ${i === activeIndex ? styles.bulletActive : ""}`}
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideToLoop(i);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Lunch = () => {
  const [fairAllItems, setFairAllItems] = useState([]);
  const [fairPastaItems, setFairPastaItems] = useState([]);
  const [fairPizzaItems, setFairPizzaItems] = useState([]);
  const [fairWashokuItems, setFairWashokuItems] = useState([]);
  const [activeTab, setActiveTab] = useState("pasta");
  const [showFixedNav, setShowFixedNav] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const originalNavRef = useRef(null);

  useEffect(() => {
    client.get({ endpoint: "fairmain" }).then((res) => {
      const contents = res.contents;
      setFairAllItems(contents);
      setFairPastaItems(contents.filter((item) => item.category === 1));
      setFairPizzaItems(contents.filter((item) => item.category === 2));
      setFairWashokuItems(contents.filter((item) => item.category === 3));
    });
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (originalNavRef.current) {
        const rect = originalNavRef.current.getBoundingClientRect();
        setShowFixedNav(rect.top <= 100);
      }

      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        if (footerTop < window.innerHeight - 300) setIsHeaderVisible(false);
        else setIsHeaderVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (id) => {
    setActiveTab(id);

    setTimeout(() => {
      let targetId = "menuContentStart";
      if (id === "salad") targetId = "saladAnchor";
      if (id === "soup") targetId = "soupAnchor";

      const element = document.getElementById(targetId);
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

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Menu</h2>
      </header>

      <nav
        className={`${styles.fixedQuickNav} ${showFixedNav && isHeaderVisible ? styles.active : ""}`}
      >
        <div className={styles.quickNavInner}>
          {lunchItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`${styles.quickNavItem} ${activeTab === item.id ? styles.quickActive : ""}`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </nav>

      <section className={styles.lunch}>
        <div className={styles.sectionTtlWrapper}>
          <p className={styles.sectionTtl}>Lunch</p>
          <p className={styles.oderTime}>11:00〜17:00 （LO 16:30）</p>
        </div>

        <div className={styles.lunchContainer}>
          <div className={styles.recommendContainer}>
            <p className={styles.subTtl}>おすすめメニュー</p>
            {fairAllItems.length > 0 && (
              <FairSwiper items={fairAllItems} type="lunch" />
            )}
          </div>

          <div
            ref={originalNavRef}
            className={`${styles.staticNav} ${styles.tabList}`}
          >
            {lunchItems.map((item) => (
              <div
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`${styles.tabItem} ${activeTab === item.id ? styles.active : ""}`}
              >
                <TopMenuCard
                  image={item.image}
                  title={item.title}
                  className={styles.card}
                />
              </div>
            ))}
          </div>
        </div>

        <div id="menuContentStart" className={styles.contentAnchor} />

        <div className={styles.lunchContainer}>
          <div className={styles.categoryContent}>
            {activeTab === "pasta" && <LunchPasta items={fairPastaItems} />}
            {activeTab === "pizza" && <LunchPizza items={fairPizzaItems} />}
            {activeTab === "washoku" && (
              <LunchWashoku items={fairWashokuItems} />
            )}

            {(activeTab === "side" ||
              activeTab === "salad" ||
              activeTab === "soup") && <LunchSide />}

            {activeTab === "drink" && <DrinksComponents isLunch={true} />}
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

export default Lunch;
