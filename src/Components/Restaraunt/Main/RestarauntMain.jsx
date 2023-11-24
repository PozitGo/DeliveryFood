import styles from "./Restaraunt.module.css";
import Rating from "../../../Images/RatingIMG.png";
import { useParams } from "react-router-dom";
import MenuList from "../MenuList/MenuList";
import restaurantsData from "../../../Data/dishData.json";
import { useState, useEffect } from "react";
const RestarauntMain = () => {
  let { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const id = parseInt(restaurantId, 10);
    const foundRestaurant = restaurantsData.find((r) => r.id === id);
    setRestaurant(foundRestaurant);
  }, [restaurantId]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.MainContainer}>
      <section className={styles.HeaderRestoraunt}>
        <h1>{restaurant.name}</h1>
        <img src={Rating} />
        <p className={styles.Rating}>4.5</p>
        <p className={styles.Price}>От 900 ₽</p>
        <ul>
          <li>Пицца и суши</li>
        </ul>
      </section>
      <MenuList />
    </section>
  );
};

export default RestarauntMain;
