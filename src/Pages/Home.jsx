import styles from "./Home.module.scss";
import Hero from "./Hero";
import Concept from "./Concept";
import News from "./News";
import Menu from "./TopMenu";
import Terrace from "./Terrace";
import FooterHero from "./FooterHero";

const Home = () => {
  return (
    <div className={styles.mainContent}>
      <Hero />
      <Concept />
      <News />
      <Menu />
      <Terrace />
      <FooterHero />
    </div>
  );
};

export default Home;
