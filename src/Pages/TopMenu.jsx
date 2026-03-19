import styles from "./TopMenu.module.scss";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import TopMenuCard from "./TopMenuCard";
import Button from "../Components/Button";
import TopMenuFair from "./TopMenuFair";
import { client } from "../microcms";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// モーニング
const morningItems = [
  {
    id: 1,
    image: "/Products/TopMenu/toast.png",
    title: "お好きなトースト",
    size: "xl",
  },
  { id: 2, image: "/Products/TopMenu/salad.png", title: "サラダ", size: "m" },
  { id: 3, image: "/Products/TopMenu/soup.png", title: "スープ", size: "m" },
  { id: 4, image: "/Products/TopMenu/drink.png", title: "ドリンク", size: "m" },
];

// ランチのメイン
const lunchItemsMain = [
  { id: 5, image: "/Products/TopMenu/pasta.png", title: "パスタ" },
  { id: 6, image: "/Products/TopMenu/pizza.png", title: "ピザ" },
  { id: 7, image: "/Products/TopMenu/washoku.png", title: "和食・定食" },
];

// ランチのサイド・セット
const lunchItemsSide = [
  { id: 8, image: "/Products/TopMenu/side.png", title: "サイド" },
  { id: 2, image: "/Products/TopMenu/salad.png", title: "サラダ" },
  { id: 3, image: "/Products/TopMenu/soup.png", title: "スープ" },
  { id: 4, image: "/Products/TopMenu/drink.png", title: "ドリンク" },
];

// デザート項目
const dessertItems = [
  { id: 9, image: "/Products/TopMenu/gelato.png", title: "ジェラート" },
  { id: 10, image: "/Products/TopMenu/cake.png", title: "ケーキ" },
];

// ループスライダー用にデータを2倍に増やす
// microCMSに登録したコンテンツの数が少なくても綺麗にループできる
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

      {/* カスタムページネーション ドットの数を管理 */}
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

const Menu = () => {
  const [lunchFair, setLunchFair] = useState([]);
  const [dessertFair, setDessertFair] = useState([]);

  // エンドポイントの取得
  useEffect(() => {
    client
      .get({ endpoint: "fairmain" })
      .then((res) => setLunchFair(res.contents))
      .catch((err) => console.error(err));
    client
      .get({ endpoint: "fairdessert" })
      .then((res) => setDessertFair(res.contents))
      .catch((err) => console.error(err));
  }, []);

  // レンダリング＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  return (
    <div id="menu" className={styles.menu}>
      <h2 className={styles.pageTitle}>Menu</h2>

      {/* --- モーニングーーーーーーーーーーーーーーーーーー --- */}
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
            <div className={styles.sideItemsFlex}>
              {morningItems.slice(1).map((item) => (
                <TopMenuCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  size={item.size}
                />
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
                <div className={styles.okawari}>
                  <p>モーニングのメニュー詳細は</p>
                  <Link to="/menu/morning" style={{ textDecoration: "none" }}>
                    <Button text="こちら →" color="orange" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ランチーーーーーーーーーーーーーーーーーー --- */}
      <section className={styles.lunch}>
        <div className={styles.sectionTtlWrapper}>
          <p className={styles.sectionTtl}>Lunch</p>
          <p className={styles.oderTime}>
            11:00〜17:00 （ラストオーダー 16:30）
          </p>
        </div>
        <div className={styles.lunchContainer}>
          <div className={styles.recommendContainer}>
            <p className={styles.subTtl}>おすすめメニュー</p>
            {lunchFair.length > 0 && (
              <FairSwiper items={lunchFair} type="lunch" />
            )}
          </div>

          <div className={styles.lunchNormalArea}>
            <div className={styles.mainGroup}>
              {lunchItemsMain.map((item) => (
                <TopMenuCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                />
              ))}
            </div>
            <div className={styles.sideGroup}>
              {lunchItemsSide.map((item) => (
                <TopMenuCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                />
              ))}
            </div>
          </div>

          <div className={styles.innerButton}>
            <Link to="/menu/lunch" style={{ textDecoration: "none" }}>
              <Button text="メニューを見る →" color="orange" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- デザートーーーーーーーーーーーーーーーーーー --- */}
      <section className={styles.dessert}>
        <div className={styles.sectionTtlWrapper}>
          <p className={styles.sectionTtl}>Dessert</p>
          <p className={styles.oderTime}>
            14:00〜18:00 （ラストオーダー 17:30）
          </p>
        </div>
        <div className={styles.dessertContainer}>
          <div className={styles.fairSection}>
            <p className={styles.subTtl}>バレンタインフェア開催中！！</p>
            {dessertFair.length > 0 && (
              <FairSwiper items={dessertFair} type="dessert" />
            )}
          </div>

          <div className={styles.dessertNormalArea}>
            {dessertItems.map((item) => (
              <TopMenuCard
                key={item.id}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>

          <div className={styles.innerButton}>
            <Link to="/menu/desserts" style={{ textDecoration: "none" }}>
              <Button text="メニューを見る →" color="orange" />
            </Link>
          </div>
        </div>
      </section>

      <div className={styles.wave}>
        <img src="/Products/sectionTop/petWave.png" alt="ウェーブ画像" />
      </div>
    </div>
  );
};

export default Menu;
