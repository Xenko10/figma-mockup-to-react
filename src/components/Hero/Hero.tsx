import styles from "./Hero.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <h1>
            <span className={styles.greyH1}>Lessons and insights </span>
            <span className={styles.greenH1}>from 8 years</span>
          </h1>
          <p>
            Where to grow your business as a photographer: site or social media?
          </p>
          <button>Register</button>
        </div>
        <img src='/hero.png' alt='IT specialist' />
      </div>
      <div className={styles.dots}>
        <div className={`${styles.dot} ${styles.active}`}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
}
