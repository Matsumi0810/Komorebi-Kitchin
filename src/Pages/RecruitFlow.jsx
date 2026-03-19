import styles from "./RecruitFlow.module.scss";

// 応募から採用までの流れ
const FLOW_DATA = [
  {
    step: 1,
    title: "応募",
    content: [
      {
        text: `応募フォーム、またはInstagramのDMよりご応募ください。
内容を確認し、3日以内に担当者より選抜日程についてご連絡いたします。`,
      },
      {
        heading:
          "Instagramから応募された方：当店アカウントよりDMにてお送りいたします。",
      },
      {
        heading:
          "応募フォームから応募された方：ご記入いただいたメールアドレス宛にご連絡します。",
        body: `【メール受信設定のお願い】
迷惑メール設定などでご利用の方は、当店からのメール（example@gmail.com）を受信できるようドメイン指定解除などの設定をお願いいたします。
3日以内に返信がない場合は、お手数ですがお電話にてお問い合わせください。`,
      },
    ],
  },
  {
    step: 2,
    title: "面接",
    content: [
      {
        text: `お店にて面接を行います。リラックスしてお話しましょう！
当日は、履歴書（画像で送付済みの方は不要です）をご持参ください。
面接所要時間は30分程度を予定しています。`,
      },
    ],
  },
  {
    step: 3,
    title: "合否連絡",
    content: [
      {
        text: `面接後、1週間以内に保存に関わらずお電話にてご連絡をさせていただきます。
万が一、お電話に出られなかった場合は折り返しをしていただくか、改めてこちらからご連絡差し上げます。
面接期間を過ぎても連絡がない場合は、お手数ですがお店までお問い合わせください。`,
      },
    ],
  },
  {
    step: 4,
    title: "お仕事スタート",
    content: [
      {
        text: `最初は、お店の常連客やメニューの名前を覚えるところからスタート！
先輩スタッフが横について、接客のコツやドリンクの作り方を丁寧にお教えします。
分からないことは何でも聞ける環境ですので、一歩ずつ自分のペースで慣れていってくださいね。
あなたと一緒に働ける日を、スタッフ一同楽しみにしています！`,
      },
    ],
  },
];

// レンダリング＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
const RecruitFlow = () => {
  return (
    <section className={styles.flowSection} aria-labelledby="flow-heading">
      <h3 id="flow-heading" className={styles.sectionTitle}>
        採用までの流れ
      </h3>

      <ol className={styles.flowList}>
        {FLOW_DATA.map((item, index) => (
          <li key={item.step} className={styles.flowItem}>
            <div className={styles.stepCard}>
              <div className={styles.stepHead}>
                <img
                  src={`/Products/step/step${item.step}.png`}
                  alt={`STEP ${item.step}`}
                  className={styles.stepImg}
                  // ブラウザへの予約のためjsxにw、hを書く→画面のカクツキを抑える
                  width={64}
                  height={64}
                />
                <h4 className={styles.stepTitle}>{item.title}</h4>
              </div>

              <div className={styles.stepBody}>
                {item.content.map((block, i) => (
                  <div key={i} className={styles.contentBlock}>
                    {/* データがある時だけ（&&）表示する */}
                    {block.heading && (
                      <p className={styles.blockHeading}>■ {block.heading}</p>
                    )}
                    {block.body && (
                      <p className={styles.blockBody}>{block.body}</p>
                    )}
                    {block.text && (
                      <p className={styles.blockText}>{block.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {index < FLOW_DATA.length - 1 && (
              <div className={styles.arrow} aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};

export default RecruitFlow;
