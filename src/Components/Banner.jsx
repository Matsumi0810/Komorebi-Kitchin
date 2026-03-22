import React, { useState, useEffect } from "react";
import { client } from "../microcms";
import styles from "./Banner.module.scss";

const Banner = () => {
  const [allBanners, setAllBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    const hiddenStatus = localStorage.getItem("banner-hidden");
    if (hiddenStatus === "true") {
      setIsVisible(false);
    }

    client
      .get({
        endpoint: "banner",
        queries: {
          limit: 100,
          filters: "category[less_than]10",
        },
      })
      .then((res) => {
        const sorted = res.contents.sort((a, b) => a.category - b.category);
        setAllBanners(sorted);
      })
      .catch((err) => console.error(err));

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (allBanners.length === 0) return;

    const step = isMobile ? 1 : 3;
    const intervalTime = 8000;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + step;
        return nextIndex >= allBanners.length ? 0 : nextIndex;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [allBanners, isMobile]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("banner-hidden", "true");
  };

  if (!isVisible || allBanners.length === 0) return null;

  const step = isMobile ? 1 : 3;
  const displayBanners = allBanners.slice(currentIndex, currentIndex + step);

  return (
    <div className={styles.bannerContainer}>
      {isMobile && (
        <button className={styles.closeButton} onClick={handleClose}>
          ×
        </button>
      )}
      <div className={styles.bannerWrapper}>
        {displayBanners.map((banner) => (
          <div key={banner.id} className={styles.bannerItem}>
            <img src={banner.images.url} alt={banner.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
