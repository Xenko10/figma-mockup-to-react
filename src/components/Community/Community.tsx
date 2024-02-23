import styles from "./Community.module.css";

export default function Community() {
  return (
    <div className={styles.community}>
      <div className={styles.upperSubsection}>
        <h2>
          Manage your entire community
          <div>in a single system</div>
        </h2>
        <p>Who is Nextcent suitable for?</p>
      </div>
      <div className={styles.lowerSubsection}>
        <div className={styles.group}>
          <img src='./community/icon1.png' alt='people icon' />
          <h3>
            Membership
            <div>Organizations</div>
          </h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className={styles.group}>
          <img src='./community/icon2.png' alt='people icon' />
          <h3>
            National
            <div>Associations</div>
          </h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div className={styles.group}>
          <img src='./community/icon3.png' alt='people icon' />
          <h3>
            Clubs And
            <div>Groups</div>
          </h3>
          <p>
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
}
