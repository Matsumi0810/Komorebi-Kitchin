import { useState, useEffect } from "react";
import styles from "./Home.module.scss";
import Hero from "./Hero";
import Concept from "./Concept";
import News from "./News";
import Menu from "./TopMenu";
import Terrace from "./Terrace";
import FooterHero from "./FooterHero";
import Modal from "../Components/Modal";
import { client } from "../microcms";

const Home = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    client
      .get({
        endpoint: "banner",
        queries: { filters: "category[equals]10", limit: 1 },
      })
      .then((res) => {
        if (res.contents.length > 0) {
          setModalContent(res.contents[0]);
          setTimeout(() => setIsModalOpen(true), 1000);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.mainContent}>
      <Hero />
      <Concept />
      <News />
      <Menu />
      <Terrace />
      <FooterHero />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {modalContent && (
          <div className={styles.modalInner}>
            {modalContent.url ? (
              <a href={modalContent.url}>
                <img src={modalContent.images.url} alt="Modal Notice" />
              </a>
            ) : (
              <img src={modalContent.images.url} alt="Modal Notice" />
            )}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Home;
