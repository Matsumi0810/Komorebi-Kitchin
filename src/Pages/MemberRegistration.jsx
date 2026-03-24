import styles from "./MemberRegistration.module.scss";

const MemberRegistration = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tag}>Special Present</div>
      
      <h2 className={styles.title}>新規会員登録キャンペーン</h2>
      
      <div className={styles.couponBox}>
        <p className={styles.couponLabel}>全メニュー対象</p>
        <div className={styles.discount}>
          <span className={styles.number}>10</span>
          <span className={styles.percent}>% OFF</span>
        </div>
        <p className={styles.couponText}>1ヶ月間何度でも使えるクーポン配布中！</p>
      </div>

      <p className={styles.description}>
        今すぐ会員登録して、お得に美味しいひとときを。<br />
        メールアドレスひとつで簡単に登録いただけます。
      </p>

      <button className={styles.registerBtn}>
        新規会員登録（無料）はこちら
      </button>

      <p className={styles.note}>
        ※登録完了後、マイページにてクーポンが付与されます。
      </p>
    </div>
  );
};

export default MemberRegistration;