import styles from "./Clients.module.css";

const clientLogos = [
  "logo1.png",
  "logo2.png",
  "logo3.png",
  "logo4.png",
  "logo5.png",
  "logo6.png",
  "logo7.png",
];

export default function Clients() {
  return (
    <div className={styles.clients}>
      <h2>Our Clients</h2>
      <p>We have been working with some Fortune 500+ clients</p>
      <div className={styles.imageWrapper}>
        {clientLogos.map((logo, index) => (
          <img
            key={index}
            src={`./img/clients/${logo}`}
            alt={`Client ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
