import styles from "./Terrace.module.scss";
import Faq from "./TerraceFaqCard";
import InstagramLink from "../Components/InstagramLink";
import InstaSlider from "../Components/InstagramSlider";

const faqList = [
  {
    id: 1,
    question: "予約はできますか？",
    answer: `テラス席のご予約も承っております。
お席に限りがございますので、週末は事前にお電話をいただけるとスムーズです。`,
  },
  {
    id: 2,
    question: "椅子の上に座らせてもいいですか？",
    answer: `可能ですが、他のお客様への配慮として椅子の上に座らせる際は、持参されたカフェマットやタオルの敷布をお願いしております。`,
  },
  {
    id: 3,
    question: "わんちゃん以外の動物も大丈夫ですか？",
    answer: `はい、もちろんです。
わんちゃん以外にも、キャリーバッグやリードをご使用いただければ他の小動物も一緒にご来店いただけます。`,
  },
  {
    id: 4,
    question: "ペット用のメニューはありますか？",
    answer: `はい、わんちゃんと猫ちゃん専用の自家製ごはんをご用意しております。
また、「季節の蒸し野菜」もございます。
ペットフードの持ち込みも可能です。`,
  },
];

// レンダリング＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
const Terrace = () => {
  return (
    <div id="terrace" className={styles.terrace}>
      <h2 className={styles.pageTitle}>Terrase seats</h2>
      <div className={styles.terraceInner}>
        {/* キャッチコピーとメイン写真 */}
        <section className={styles.introContent}>
          <div className={styles.textContent}>
            <p className={styles.introTitle}>お散歩の途中に、一緒にひと休み</p>
            <p className={styles.introText}>
              街の喧騒から少し離れて、愛犬や愛猫と一緒に深呼吸。
              <br />
              テラス席限定でご一緒にお食事いただけます。
              <br />
              屋根付きのスペースもございますので、日差しが気になる時間帯も快適。{" "}
              <br />
              お散歩コースの寄り道に、ぜひお気軽にお立ち寄りください。
            </p>
          </div>
          <div className={styles.mainVisual}>
            <div className={styles.walkContainer}>
              <span className={styles.walkIllustration}></span>
            </div>
            <img
              src="/Products/terrace.png"
              alt="テラス席でくつろぐわんちゃん"
            />
          </div>
        </section>
        {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}

        {/* 【FAQエリア】よくある質問のリスト */}
        <section className={styles.Faq}>
          <p>よくある質問</p>
          <div className={styles.faqWrapper}>
            <span className={styles.dogLeft}></span>
            <span className={styles.dogRight}></span>
            <div className={styles.faqGrid}>
              {faqList.map((item) => (
                <Faq
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        </section>
        {/* ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝ */}

        {/* 【SNSエリア】Instagramへの誘導とスライダー */}
        <section className={styles.insta}>
          <InstagramLink
            text={`その他質問や相談がございましたら
DMにてお気軽にお聞きください。`}
          />
          <InstaSlider />
        </section>
      </div>
    </div>
  );
};
export default Terrace;
