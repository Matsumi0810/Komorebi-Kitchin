import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./InstagramSlider.module.scss";

const images = [
  "/Products/insta/photo1.png",
  "/Products/insta/photo2.png",
  "/Products/insta/photo3.png",
  "/Products/insta/photo4.png",
  "/Products/insta/photo5.png",
  "/Products/insta/photo6.png",
  "/Products/insta/photo7.png",
  "/Products/insta/photo8.png",
];

// 表示枚数：5枚 < 768px < 7枚
const InstagramSlider = () => {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={-3}
        slidesPerView={5}
        loop={true}
        speed={6000}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: { slidesPerView: 7 },
        }}
        className={styles.mySwiper}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Instagram photo ${index}`}
              className={styles.slideImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstagramSlider;
