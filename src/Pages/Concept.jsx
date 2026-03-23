import styles from "./Concept.module.scss";
import { useEffect, useRef } from "react";

const conceptData = [
  {
    id: 1,
    img: "/Products/concept/coffee9.png",
    alt: "コーヒーで安らぐ人の画像",
    title: "「何もしない」を楽しむ空間",
    text: "都会の忙しさを忘れて、深呼吸。\n店内に差し込む柔らかな光と、木の温もりに包まれる時間。\n窓の外を流れる急ぎ足の日常を、ここでは少しだけ遠くに。\n揺れる木の葉の影を眺めながら、何もしない贅沢を心ゆくまでお愉しみください。",
  },
  {
    id: 2,
    img: "/Products/concept/salad2.png",
    alt: "地元農家の無農薬野菜サラダ",
    title: "体、喜ぶ。素材を味わう",
    text: "私たちの体は、食べたものでできているから。\n地元農家さんが育てた無農薬野菜を主役に、余計なものは使わず、素材の旨みを引き出す。\n一口ごとに、体が整っていく。そんな「健やかな一皿」を届けます。",
  },
  {
    id: 3,
    img: "/Products/concept/coffee4.png",
    alt: "心を込めてコーヒーを淹れるスタッフ",
    title: "「手仕事」の温もり",
    text: "一杯ずつ淹れるハンドドリップコーヒー。\n毎日お店で焼き上げる、サクサクのタルト。\n手になじむ器や座り心地の良い木の椅子。\n大量生産にはない、人の手のひらの温かさを。\nあなたの五感で、ゆっくりとお楽しみください。",
  },
];

const Concept = () => {
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={styles.wave}>
        <img
          src="/Products/sectionTop/concept.png"
          alt="コンセプトトップウェーブ"
        />
      </div>
      <div id="concept" className={styles.concept}>
        <div className={styles.conceptContainer}>
          <h2 className={styles.pageTitle}>Concept</h2>

          <div className={styles.conceptInner}>
            {conceptData.map((item, index) => (
              <div
                className={styles.conceptItem}
                key={item.id}
                ref={(el) => (itemRefs.current[index] = el)}
              >
                <img
                  className={styles.conceptImg}
                  src={item.img}
                  alt={item.alt}
                />
                <div className={styles.textContainer}>
                  <p className={styles.conceptTtl}>{item.title}</p>
                  <p className={styles.conceptText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Concept;
