import styles from "../styles/BikesGrid.module.css";
import b1 from "../assets/bikes/bike1.webp";
import b2 from "../assets/bikes/bike2.png";
import b3 from "../assets/bikes/bike3.png";
import b4 from "../assets/bikes/bike4.png";
import b5 from "../assets/bikes/bike5.png";
import b6 from "../assets/bikes/bike6.png";
import b7 from "../assets/bikes/bike7.webp";
import b8 from "../assets/bikes/bike8.webp";
import b9 from "../assets/bikes/bike9.webp";
import b10 from "../assets/bikes/bike10.webp";
import BikeCard from "../cards/BikeCard";

const BikesGrid = () => {
  const bikes = [
    {
      id: 1,
      poster: b1,
      price: 6500,
      label: "Avante X3 - Sleek and Speedy Road Machine",
    },
    {
      id: 2,
      poster: b2,
      price: 4200,
      label: "TrailMaster XT - Conquer any Terrain",
    },
    {
      id: 3,
      poster: b10,
      price: 12000,
      label: "EcoCarrier Deluxe - Sustainable City Transport",
    },
    {
      id: 4,
      poster: b3,
      price: 9800,
      label: "VoltRider Pro - Effortless E-Cruising",
    },
    {
      id: 5,
      poster: b4,
      price: 3500,
      label: "PocketRocket Mini - Compact Urban Rider",
    },
    {
      id: 6,
      poster: b5,
      price: 2800,
      label: "SteelStride Classic - Pure Cycling Nostalgia",
    },
    {
      id: 7,
      poster: b6,
      price: 8000,
      label: "Double Decker - Pedaling Together",
    },
    {
      id: 8,
      poster: b7,
      price: 5800,
      label: "RelaxRider LX - Comfort-First Cruising",
    },
    {
      id: 9,
      poster: b8,
      price: 7000,
      label: "SnowMonster Yeti - Master the Winter Trails",
    },
    {
      id: 10,
      poster: b9,
      price: 4800,
      label: "Pathfinder GT - Adventure Awaits on Any Road",
    },
  ];

  return (
    <>
      <h1 className={styles.header}>
        <span>Bikes</span>
      </h1>

      <div className={styles.parent}>
        {bikes.map((bike) => (
          <BikeCard
            label={bike.label}
            poster={bike.poster}
            price={bike.price}
            key={bike.id}
          />
        ))}
      </div>
    </>
  );
};

export default BikesGrid;
