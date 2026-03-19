import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollTopButton from "./ScrollTopButton";
import ScrollToTop from "./ScrollToTop";
import InstagramLink from "./InstagramLink";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollTopButton />
      <div className={styles.floatingInsta}>
        <InstagramLink />
      </div>
    </div>
  );
};

export default Layout;
