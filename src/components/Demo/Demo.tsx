import styles from "./Demo.module.css";

export default function Demo() {
  return (
    <div className={styles.demo}>
      <h2>Pellentesque suscipit fringilla libero eu.</h2>
      <button>
        Get a Demo
        <svg
          width='16'
          height='16'
          viewBox='0 0 12 12'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M8.52606 8.4707L10.2452 6.7516C10.449 6.54772 10.449 6.21716 10.2452 6.01328L8.52606 4.29418M10.0923 6.38244L2.4353 6.38244'
            stroke='white'
            strokeWidth='0.765676'
            strokeLinecap='round'
          />
        </svg>
      </button>
    </div>
  );
}
