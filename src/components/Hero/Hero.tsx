import styles from "./Hero.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.mainContent}>
        <h1>
          <div className={styles.greyH1}>Lessons and insights </div>
          <div className={styles.greenH1}>from 8 years</div>
        </h1>
        <img src='/hero.png' alt='IT specialist' />
        <p>
          Where to grow your business as a photographer: site or social media?
        </p>
        <button>Register</button>
      </div>
      <div className={styles.dots}>
        <div className={`${styles.dot} ${styles.active}`}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
}
