import styles from "./CommunityUpdates.module.css";

export default function CommunityUpdates() {
  return (
    <div className={styles.communityUpdates}>
      <div className={styles.upperSubsection}>
        <h2>Carring is the new marketing</h2>
        <p>
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.​
        </p>
      </div>
      <div className={styles.lowerSubsection}>
        <div className={styles.item}>
          <img
            src='./img/communityUpdates/image1.png'
            alt='woman writing on a laptop'
          />
          <div>
            <p>Creating Streamlined Safeguarding Processes with OneRen</p>
            <div>
              Read more
              <svg
                width='16'
                height='16'
                viewBox='0 0 12 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M8.52606 8.4707L10.2452 6.7516C10.449 6.54772 10.449 6.21716 10.2452 6.01328L8.52606 4.29418M10.0923 6.38244L2.4353 6.38244'
                  stroke='#4CAF4F'
                  strokeWidth='0.765676'
                  strokeLinecap='round'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src='./img/communityUpdates/image2.png' alt='laptop' />
          <div>
            <p>
              What are your safeguarding responsibilities and how can you manage
              them?
            </p>
            <div>
              Read more
              <svg
                width='16'
                height='16'
                viewBox='0 0 12 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M8.52606 8.4707L10.2452 6.7516C10.449 6.54772 10.449 6.21716 10.2452 6.01328L8.52606 4.29418M10.0923 6.38244L2.4353 6.38244'
                  stroke='#4CAF4F'
                  strokeWidth='0.765676'
                  strokeLinecap='round'
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <img src='./img/communityUpdates/image3.png' alt='laptop' />
          <div>
            <p>Revamping the Membership Model with Triathlon Australia</p>
            <div>
              Read more
              <svg
                width='16'
                height='16'
                viewBox='0 0 12 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M8.52606 8.4707L10.2452 6.7516C10.449 6.54772 10.449 6.21716 10.2452 6.01328L8.52606 4.29418M10.0923 6.38244L2.4353 6.38244'
                  stroke='#4CAF4F'
                  strokeWidth='0.765676'
                  strokeLinecap='round'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
