import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. ブラウザの「勝手に元の位置に戻す機能」をオフにする
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. ページ遷移したら即座に一番上へ
    window.scrollTo(0, 0);

    // 念のため、少し遅れてもう一度一番上へ（画像読み込み対策）
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 10);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
