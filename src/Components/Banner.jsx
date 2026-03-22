import React, { useState, useEffect } from "react";
import { client } from "../microcms";
import styles from "./Banner.module.scss";

const Banner = () => {
  const [allBanners, setAllBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    client
      .get({
        endpoint: "banner",
        queries: { 
          limit: 100,
          filters: "category[less_than]10"
        },
      })
      .then((res) => {
        const sorted = res.contents.sort((a, b) => a.category - b.category);
        setAllBanners(sorted);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (allBanners.length <= 3) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 3;
        return nextIndex >= allBanners.length ? 0 : nextIndex;
      });
    }, 8000);

    return () => clearInterval(timer);
  }, [allBanners]);

  const displayBanners = allBanners.slice(currentIndex, currentIndex + 3);

  if (allBanners.length === 0) return null;

  return (
    <div className={styles.bannerWrapper}>
      {displayBanners.map((banner) => (
        <div key={banner.id} className={styles.bannerItem}>
          <img src={banner.images.url} alt={banner.id} />
        </div>
      ))}
    </div>
  );
};

export default Banner;