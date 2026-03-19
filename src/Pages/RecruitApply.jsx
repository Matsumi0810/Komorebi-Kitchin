import styles from "./RecruitApply.module.scss";
import InstagramLink from "../Components/InstagramLink";
import Button from "../Components/Button";

const DAYS = [
  "月曜日",
  "火曜日",
  "水曜日",
  "木曜日",
  "金曜日",
  "土曜日",
  "日曜日",
];

const FormRow = ({ label, htmlFor, children }) => (
  <div className={styles.formGroup}>
    <label className={styles.formLabel} htmlFor={htmlFor}>
      {label}
    </label>
    <div className={styles.formField}>{children}</div>
  </div>
);

// レンダリング＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
const RecruitApply = () => {
  return (
    <section className={styles.applySection} aria-labelledby="apply-heading">
      <h3 id="apply-heading" className={styles.sectionTitle}>
        【応募方法】
      </h3>

      {/* ① Instagram DM */}
      <div className={styles.applyBox}>
        <h4 className={styles.applyMethodTitle}>① Instagram DM で送る</h4>
        <div className={styles.applyContent}>
          <p className={styles.applyText}>
            公式 Instagram の DM にて、「採用応募」の旨をお送りください。
          </p>
          <div className={styles.infoBox}>
            <p className={styles.infoTitle}>【お送りいただくもの】</p>
            <p
              className={styles.infoContent}
            >{`1. 履歴書の画像（内容が鮮明に確認できる画像の送付をお願いします）
2. 面接希望日時
3. お名前、連絡先、希望ポジション、希望シフト
※上記の内容が履歴書内に記載されている場合は、DMでの入力は不要です。
履歴書に記載がない項目のみ、メッセージで追加してお送りください。

※履歴書は面接当日の持参も可能です。その場合は、DMにてその旨をお伝えください。`}</p>
          </div>
          <InstagramLink
            text={`その他質問や相談がございましたら
DMにてお気軽にお聞きください。`}
          />
        </div>
      </div>

      {/* ② 応募フォーム */}
      <div className={styles.applyBox}>
        <h4 className={styles.applyMethodTitle}>② 応募フォームから送る</h4>
        <div className={styles.applyContent}>
          <form
            action="https://ssgform.com/s/xaTPoHYHd8YB"
            method="post"
            className={styles.form}
            encType="multipart/form-data"
          >
            <div className={styles.formList}>
              {/* お名前 */}
              <FormRow label="お名前" htmlFor="name">
                <input
                  id="name"
                  type="text"
                  name="お名前"
                  className={styles.inputField}
                  autoComplete="name"
                  required
                />
              </FormRow>

              {/* メールアドレス */}
              <FormRow label="メールアドレス" htmlFor="email">
                <input
                  id="email"
                  type="email"
                  name="メールアドレス"
                  className={styles.inputField}
                  autoComplete="email"
                  required
                />
              </FormRow>

              {/* 希望ポジション */}
              <div className={styles.formGroup}>
                <fieldset className={styles.fieldset}>
                  <legend className={styles.formLabel}>希望ポジション</legend>
                  <div className={styles.radioGroup}>
                    {["キッチン", "ホール"].map((pos) => (
                      <label key={pos}>
                        <input
                          type="radio"
                          name="希望ポジション"
                          value={pos}
                          required
                        />
                        {pos}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              {/* 希望シフト */}
              <div className={styles.formGroup}>
                <fieldset className={styles.fieldset}>
                  <legend className={styles.formLabel}>希望シフト</legend>
                  <div className={styles.formField}>
                    <p className={styles.subLabel}>出勤可能日</p>
                    <div className={styles.checkboxGrid}>
                      {DAYS.map((day) => (
                        <label key={day}>
                          <input
                            type="checkbox"
                            name="出勤可能日"
                            value={day}
                          />
                          {day}
                        </label>
                      ))}
                    </div>
                    <p className={styles.note}>
                      出勤可能な時間帯、その他備考などがあれば自由にご記入ください。
                      <br />
                      （例：週3日程度、平日は10:00〜15:00を希望します。土日はフルタイム可能です、など）
                    </p>
                    <textarea
                      id="shift-detail"
                      name="シフト詳細備考"
                      rows={4}
                      className={styles.textareaField}
                      aria-label="シフト詳細備考"
                    />
                  </div>
                </fieldset>
              </div>

              {/* 履歴書の提出方法 */}
              <div className={styles.formGroup}>
                <fieldset className={styles.fieldset}>
                  <legend className={styles.formLabel}>履歴書の提出方法</legend>
                  <div className={styles.radioGroup}>
                    {[
                      {
                        value: "画像をアップロードする",
                        label: "画像をアップロードする",
                      },
                      { value: "面接当日持参する", label: "面接当日持参する" },
                    ].map(({ value, label }) => (
                      <label key={value}>
                        <input
                          type="radio"
                          name="提出方法"
                          value={value}
                          required
                        />
                        {label}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              {/* 画像アップロード */}
              <FormRow label="画像アップロード" htmlFor="resume-file">
                <input
                  id="resume-file"
                  type="file"
                  name="履歴書画像"
                  className={styles.fileInput}
                  accept="image/*"
                />
              </FormRow>

              {/* 面接希望日時 */}
              <FormRow label="面接希望日時" htmlFor="interview-date">
                <p className={styles.note}>
                  面接の希望日時を第3希望までご記入ください。
                  <br />
                  ※ご希望の日程で調整が難しい場合は、電話にて確認させていただくことがございます。
                </p>
                <textarea
                  id="interview-date"
                  name="面接希望日時"
                  rows={4}
                  className={styles.textareaField}
                  required
                />
              </FormRow>

              {/* その他備考 */}
              <FormRow label="その他備考" htmlFor="remarks">
                <p className={styles.note}>
                  その他、ご質問や事前にお伝えしておきたいこと
                  <br />
                  （扶養内での勤務希望、現在の職業など）がございましたら、お気軽にご記入ください。
                </p>
                <textarea
                  id="remarks"
                  name="その他備考"
                  rows={4}
                  className={styles.textareaField}
                />
              </FormRow>
            </div>

            {/* 送信ボタン */}
            <div className={styles.submitArea}>
              <Button
                type="submit"
                text="送信する"
                color="orange"
                className={styles.submitButton}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RecruitApply;
