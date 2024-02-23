import styles from "./Unlock.module.css";

export default function Unlock() {
  return (
    <div className={styles.unlock}>
      <img src='./unlock.png' alt='mobile login' />
      <div className={styles.content}>
        <h2>The unseen of spending three years at Pixelgrade</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
}
