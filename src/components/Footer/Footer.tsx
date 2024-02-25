import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.contentWrapper}>
        <div className={styles.companyInfo}>
          <div className={styles.logo}>
            <img src='./img/icon2.png' alt='icon' />
            <span className={styles.companyName}>Nexcent</span>
          </div>
          <div className={styles.copyright}>
            <p>Copyright © 2020 Landify UI Kit.</p>
            <p>All rights reserved</p>
          </div>
          <div className={styles.socialLinks}>
            <img src='./img/social/instagram.png' alt='instagram' />
            <img src='./img/social/dribbble.png' alt='dribbble' />
            <img src='./img/social/twitter.png' alt='twitter' />
            <img src='./img/social/youtube.png' alt='youtube' />
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.company}>
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className={styles.support}>
            <h3>Support</h3>
            <ul>
              <li>Help center</li>
              <li>Term of service</li>
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Status</li>
            </ul>
          </div>
          <div className={styles.newsletter}>
            <h3>Stay up to date</h3>
            <div className={styles.inputWrapper}>
              <input type='text' placeholder='Your email address' />
              <img src='./img/send.png' alt='send' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
