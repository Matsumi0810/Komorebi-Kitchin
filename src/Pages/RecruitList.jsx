import styles from "./RecruitList.module.scss";

const RECRUIT_DATA = [
  { label: "雇用形態", value: "パート・アルバイト（試用期間あり）" },
  { label: "職種", value: "ホール・キッチン補助" },
  {
    label: "勤務地",
    value: `〒123-4567\n陽溜県 木立市 森の里1-2-3`,
  },
  {
    label: "給与",
    value: `時給：1,150円〜
・日祝手当：時給 1,200円〜（時給50円UP！）
・早朝手当（7:00〜8:00）：時給 1,250円〜（時給100円UP！）
・昇給あり（※ラテアート技術・発注業務等、スキル経験による）
・交通費規定支給
試用期間：2週間（試用期間中の時給：変更なし）`,
  },
  {
    label: "仕事内容",
    value: `【ホール】
・座席案内、オーダー
・配膳、片付け
・レジ会計

【キッチン】
・調理
・盛り付け
・仕込み
・ドリンク作成
・洗い場業務
・片付け・キッチン清掃

（1日の流れ）
8:00　開店準備
9:00　開店
18:30　閉店
19:00　締業務`,
  },
  {
    label: "求める人材",
    value: `【必須】
人と接することが好きな方

【歓迎】
・接客経験がある方
・お菓子作りや料理に興味がある方
・土日祝に勤務できる方`,
  },
  {
    label: "勤務時間",
    value: `7:30〜18:30の間でシフト制
・週3日〜OK
・1日4時間〜OK
・土日祝のみの勤務OK
・年末年始、お盆、GW出勤できる方優遇
※半月毎のシフト制
時間や曜日について、面接時にご相談ください`,
  },
  {
    label: "交通アクセス",
    value: `「木立駅」から徒歩10分\n自転車通勤OK`,
  },
  {
    label: "試用期間",
    value: `試用期間あり\n試用期間：2週間\n試用期間中の労働条件：同条件`,
  },
  {
    label: "社会保険",
    value: `・雇用保険
・労災保険
・健康保険
・厚生年金保険
※加入条件は、勤務時間等の契約内容によります。`,
  },
  {
    label: "福利厚生",
    value: `・交通費規定支給
・制服貸与
・正社員登用制度あり
・髪型、髪色自由
・ピアス相談可`,
  },
  {
    label: "その他",
    value: `【未経験歓迎！】スタッフがしっかりサポートします
【繁忙期入れる方歓迎】年末年始、GW、盆休みなど出勤できる方大歓迎！
【学生可！】授業や行事でのシフト相談もお気軽にどうぞ♪友達同士の応募もOK！
【勤務開始日の相談OK】3月末や4月からのスタートなど、先の日程でも相談OK！`,
  },
];

// dt、ddの中身をセット
const RecruitItem = ({ label, value }) => (
  <div className={styles.recruitItem}>
    <dt className={styles.label}>{label}</dt>
    <dd className={styles.value}>{value}</dd>
  </div>
);

// レンダリング＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
const RecruitList = () => {
  return (
    <section
      className={styles.recruitSection}
      aria-labelledby="recruit-heading"
    >
      <h3 id="recruit-heading" className={styles.sectionTitle}>
        【募集要項】
      </h3>
      <dl className={styles.recruitList}>
        {RECRUIT_DATA.map((item) => (
          <RecruitItem key={item.label} label={item.label} value={item.value} />
        ))}
      </dl>
    </section>
  );
};

export default RecruitList;
