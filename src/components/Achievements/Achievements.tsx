import styles from "./Achievements.module.css";

export default function Achievements() {
  return (
    <div className={styles.achievements}>
      <div className={styles.leftContent}>
        <h2>
          Helping a local
          <div className={styles.greenH2}> business reinvent itself</div>
        </h2>
        <p>We reached here with our hard work and dedication</p>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.item}>
          <img src='./achievements/icon1.png' alt='members' />
          <div>
            <h3>2,245,341</h3>
            <p>Members</p>
          </div>
        </div>
        <div className={styles.item}>
          <img src='./achievements/icon2.png' alt='clubs' />
          <div>
            <h3>46,328</h3>
            <p>Clubs</p>
          </div>
        </div>
        <div className={styles.item}>
          <img src='./achievements/icon3.png' alt='event bookings' />
          <div>
            <h3>828,867</h3>
            <p>Event Bookings</p>
          </div>
        </div>
        <div className={styles.item}>
          <img src='./achievements/icon4.png' alt='payments' />
          <div>
            <h3>1,926,436</h3>
            <p>Payments</p>
          </div>
        </div>
      </div>
    </div>
  );
}
