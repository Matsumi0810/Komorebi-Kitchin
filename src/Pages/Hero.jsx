import { useState, useEffect } from "react";
import styles from "./Hero.module.scss";

// パララックス
const Hero = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // コンセプトセクションの取得
      const conceptSection = document.querySelector("section");
      if (!conceptSection) return;
      // コンセプトセクションの位置を取得
      const rect = conceptSection.getBoundingClientRect();

      // セクションの下端が2000pxより上にきたら非表示にする
      if (rect.bottom < 2000) {
        setShowImage(false);
      } else {
        setShowImage(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // コンポーネントが消える時にイベントを解除して、ブラウザを軽く保つ
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // レンダリング＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  return (
    <div className={styles.hero}>
      {showImage && <div className={styles.heroImg}></div>}
    </div>
  );
};

export default Hero;
