import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollTopButton from "./ScrollTopButton";
import ScrollToTop from "./ScrollToTop";
import InstagramLink from "./InstagramLink";
import Banner from "./Banner";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.layoutRoot}>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

      <div className={styles.floatingArea}>
        <div className={styles.instaWrapper}>
          <InstagramLink />
        </div>
        <div className={styles.bannerWrapper}>
          <Banner />
        </div>
        <div className={styles.topBtnWrapper}>
          <ScrollTopButton />
        </div>
      </div>
    </div>
  );
};

export default Layout;
