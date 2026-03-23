import styles from "./MenuDrinks.module.scss";

const drinkData = [
  {
    category: "Standard",
    image: "/Products/coffeeMenu/viennaCoffee.png",
    imageProductName: "ウィンナーコーヒー",
    items: [
      {
        name: "アメリカーノ",
        price: "S 300円 / M 350円 / L 400円",
        note: "エスプレッソをお湯や水で割った、すっきり飲みやすいブラックコーヒー",
      },
      {
        name: "エスプレッソ",
        price: "シングル 250円 / ダブル 300円",
        note: "少量の熱いお湯で一気に抽出した、とても濃くて香りが強いコーヒー",
      },
      {
        name: "ウィンナーコーヒー",
        price: "S 250円 / M 300円 / L 350円",
        note: "濃厚なエスプレッソに少量のクリームを乗せたコーヒー",
      },
      {
        name: "コンパナ",
        price: "シングル 300円 / ダブル 350円",
        note: "ドリップコーヒーにたっぷりのホイップクリームを浮かべたコーヒー",
      },
    ],
  },
  {
    category: "Standard Milk Drinks",
    image: "/Products/coffeeMenu/cappuccino.png",
    imageProductName: "カプチーノ",
    items: [
      {
        name: "ホットカフェオレ",
        price: "S 300円 / M 350円 / L 400円",
        note: "ドリップコーヒーと温かいミルクを半分ずつ混ぜた、優しい味わい",
      },
      {
        name: "カフェラテ",
        price: "S 300円 / M 350円 / L 400円",
        note: "濃いエスプレッソにたっぷりの泡立てたミルクを注いだ、定番の味",
      },
      {
        name: "カプチーノ",
        price: "S 300円 / M 350円 / L 400円",
        note: "カフェラテよりも泡の層が厚く、ふわふわした口当たりのミルクコーヒー",
      },
      {
        name: "ソイラテ",
        price: "S 300円 / M 350円 / L 400円",
        note: "牛乳の代わりに豆乳を使った、まろやかでヘルシーなラテ",
      },
    ],
  },
  {
    category: "Mocha",
    image: "/Products/coffeeMenu/CinnamonMocha.png",
    imageProductName: "シナモンモカ",
    items: [
      {
        name: "カフェモカ",
        price: "S 350円 / M 400円 / L 450円",
        note: "エスプレッソにチョコレートとミルクを混ぜた、ココアのようなコーヒー",
      },
      {
        name: "ソイモカ",
        price: "S 350円 / M 400円 / L 450円",
        note: "カフェモカを豆乳で作り、チョコのコクをさっぱりと仕上げた一杯",
      },
      {
        name: "キャラメルモカ",
        price: "S 380円 / M 430円 / L 480円",
        note: "チョコ味のコーヒーにキャラメルを加えた、しっかり甘いご褒美ドリンク",
      },
      {
        name: "メープルモカ",
        price: "S 380円 / M 430円 / L 480円",
        note: "チョコとメープルが溶け合う、深い甘みと香りが特徴のモカ",
      },
      {
        name: "シナモンモカ",
        price: "S 380円 / M 430円 / L 480円",
        note: "濃厚なチョコ味のコーヒーに、シナモンのアクセントを加えた一杯",
      },
    ],
  },
  {
    category: "Latte",
    image: "/Products/coffeeMenu/CaramelLatte.png",
    imageProductName: "キャラメルラテ",
    items: [
      {
        name: "バニララテ",
        price: "S 350円 / M 400円 / L 450円",
        note: "カフェラテにバニラの甘い香を開いた、スイーツのような一杯",
      },
      {
        name: "キャラメルラテ",
        price: "S 350円 / M 400円 / L 450円",
        note: "カフェラテにキャラメルソースを混ぜた、香ばしい甘さのラテ",
      },
      {
        name: "ソルトキャラメルラテ",
        price: "S 350円 / M 400円 / L 450円",
        note: "キャラメルにほんのり塩味を効かせた、甘じょっぱさがクセになる味",
      },
      {
        name: "メープルラテ",
        price: "S 350円 / M 400円 / L 450円",
        note: "自然で優しい甘みのメープル入りラテ",
      },
      {
        name: "オレンジラテ",
        price: "S 350円 / M 400円 / L 450円",
        note: "ミルクの甘みの中に、オレンジの爽やかな酸味がふんわり香るラテ",
      },
      {
        name: "シナモンラテ",
        price: "S 350円 / M 400円 / L 450円",
        note: "独特なスパイスの香りが広がる、体がポカポカ温まるラテ",
      },
      {
        name: "メープルシナモンラテ",
        price: "S 380円 / M 430円 / L 480円",
        note: "メープルの甘さとシナモンの香りが一度に楽しめる贅沢なラテ",
      },
    ],
  },
  {
    category: "Frappuccino",
    image: "/Products/coffeeMenu/MatchaFrappuccino.png",
    imageProductName: "濃厚宇治抹茶フラッペ",
    items: [
      {
        name: "エスプレッソ・チップ・フラッペ",
        price: "S 500円 / M 550円 / L 600円",
        note: "コーヒーフローズンに、砕いたチョコの粒を混ぜたシャリシャリ食感",
      },
      {
        name: "キャラメル・マキアート・フラッペ",
        price: "S 520円 / M 570円 / L 620円",
        note: "バニラとキャラメルが香る、甘くて冷たいミルクベースのフローズン",
      },
      {
        name: "カフェモカ・フローズン",
        price: "S 520円 / M 570円 / L 620円",
        note: "チョコとコーヒーを一緒に凍らせて砕いた、冷たい濃厚デザート",
      },
      {
        name: "濃厚宇治抹茶フラッペ",
        price: "S 550円 / M 600円 / L 650円",
        note: "和風の抹茶をたっぷり使った、ほろ苦くて甘いフローズンドリンク",
      },
      {
        name: "ハニーレモン・フローズン",
        price: "S 550円 / M 600円 / L 650円",
        note: "はちみつの甘さとレモンの酸っぱさが爽快な、氷のドリンク",
      },
    ],
  },
];

const otherLeft = [
  "オレンジジュース",
  "アップルジュース",
  "ジンジャーエール",
  "コーラ",
  "レモンスカッシュ",
];
const otherRight = [
  "ココア（アイス/ホット）",
  "ロイヤルミルクティー（アイス/ホット）",
  "チャイミルクティー（アイス/ホット）",
  "ルイボスティー（アイス/ホット）",
  "カモミールティー（アイス/ホット）",
];

// レンダリング＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
const DrinksComponents = ({ isLunch }) => {
  return (
    // isLunch が true の場合は枠線を消す (noBorder) ためのクラス切り替え
    <section className={`${styles.section} ${isLunch ? styles.noBorder : ""}`}>
      
      <div className={styles.groupBlock}>
        <span className={styles.groupBgTitleC}>COFFEE</span>
        {/* --- メインのドリンクカテゴリー --- */}
        {drinkData.map((cat, index) => (
          <div
            key={index}
            //画像とテキストを交互に描画
            className={`${styles.categoryBlock} ${index % 2 !== 0 ? styles.reverse : ""}`}
          >
            <div className={styles.textContent}>
              <h3 className={styles.drinkCategoryTitle}>{cat.category}</h3>
              <div className={styles.itemList}>
                {cat.items.map((item, i) => (
                  <div key={i} className={styles.drinkItem}>
                    <div className={styles.itemMain}>
                      <span className={styles.marker}>■</span>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemPrice}>（{item.price}）</span>
                    </div>
                    {/* コーヒーの説明 */}
                    <p className={styles.itemNote}>{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.imageContent}>
              {/* 画像の上に表示する商品名帯 */}
              <span className={styles.imageProductName}>
                {cat.imageProductName}
              </span>
              <img src={cat.image} alt={cat.imageProductName} />
            </div>
          </div>
        ))}
      </div>

      {/* --- Other ーーーーーーーーーーーーーーーーーーーーーーーーー --- */}
      <div className={styles.groupBlock}>
        <span className={styles.groupBgTitleO}>OTHER</span>
        <div className={styles.otherSection}>
          <h3 className={styles.drinkCategoryTitle}>Softdrink & Tea</h3>
          <div className={styles.otherGrid}>
            <div className={styles.otherColumns}>
              <div className={styles.otherColumn}>
                {/* 左 */}
                {otherLeft.map((item, i) => (
                  <span key={i} className={styles.otherItem}>
                    {item}
                  </span>
                ))}
              </div>
              <div className={styles.otherColumn}>
                {/* 右 */}
                {otherRight.map((item, i) => (
                  <span key={i} className={styles.otherItem}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.otherPrice}>
              <span>税込 500円</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrinksComponents;