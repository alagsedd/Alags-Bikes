import styles from "../styles/BikeCard.module.css";

interface Props {
  poster: string;
  price: number;
  label: string;
}
const BikeCard = ({ label, poster, price }: Props) => {
  return (
    <>
      <div className={styles.parent}>
        <img
          src={poster}
          alt="Your browser doesn't support this image"
          className={styles.image}
        />
        <p className={styles.label}>{label}</p>
        <span className={styles.price}>GH₵ {price}</span>
      </div>
    </>
  );
};

export default BikeCard;
