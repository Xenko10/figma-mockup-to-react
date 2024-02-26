import styles from "./Hero.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.contentWrapper}>
        <div className={styles.mainContent}>
          <div className={styles.textContent}>
            <h1>
              <span className={styles.greyH1}>Lessons and insights </span>
              <div className={styles.greenH1}>from 8 years</div>
            </h1>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button>Register</button>
          </div>
          <img src='./img/hero.png' alt='IT specialist' />
        </div>
        <div className={styles.dots}>
          <div className={`${styles.dot} ${styles.active}`}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </div>
    </div>
  );
}
