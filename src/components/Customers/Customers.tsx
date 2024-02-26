import styles from "./Customers.module.css";

const clientLogos = [
  "logo1.png",
  "logo2.png",
  "logo3.png",
  "logo4.png",
  "logo5.png",
  "logo6.png",
];

export default function Customers() {
  return (
    <div className={styles.customers}>
      <div className={styles.contentWrapper}>
        <img src='./img/tesla.png' alt='tesla' />
        <div className={styles.content}>
          <p>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          <div className={styles.customer}>
            <h2>Tim Smith</h2>
            <p>British Dragon Boat Racing Association</p>
          </div>
          <div className={styles.customersLogosWrapper}>
            {clientLogos.map((logo, index) => (
              <img
                key={index}
                src={`./img/clients/${logo}`}
                alt={`Client ${index + 1}`}
              />
            ))}
            <div>
              <div>
                Meet all <br />
                customers
              </div>
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
