import { Button } from "@mui/material";
import styles from "../styles/BikeCard.module.css";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import BuyCountContext from "../contexts/BuyCountContext";

interface Props {
  poster: string;
  price: number;
  label: string;
}
const BikeCard = ({ label, poster, price }: Props) => {
  const { dispatch } = useContext(BuyCountContext);

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

        <div className={styles.buttonBox}>
          <Button
            onClick={() => dispatch({ type: "addItem" })}
            variant="contained"
            startIcon={<FaCartPlus />}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default BikeCard;
