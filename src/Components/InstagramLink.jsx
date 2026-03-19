import styles from "./InstagramLink.module.scss";

const InstagramLink = ({ text }) => {
  return (
    <div className={styles.instagramLink}>
      {text && <p className={styles.message}>{text}</p>}

      <div className={styles.imageArea}>
        <a
          href="https://www.instagram.com/komorebi-kitchen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/Products/insta/instagram.png"
            alt="Instagram @komorebi-kitchen"
          />
        </a>
      </div>
    </div>
  );
};
export default InstagramLink;
