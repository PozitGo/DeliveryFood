import styles from "./Dish.module.css";
import RatingIMG from "../../../Images/RatingIMG.png";
import { Link } from "react-router-dom";

const Dish = (props) => {
  return (
    <Link className={styles.DishContain} to={props.to}>
      <img src={props.image} alt="Restoran" />
      <section className={styles.DishDescription}>
        <section className={styles.DishNameSection}>
          <h2 className={styles.DishName}>{props.DishName}</h2>
          <p className={styles.DishTime}>50 мин</p>
        </section>
        <section className={styles.DishRatingAndPrice}>
          <img src={RatingIMG} alt="Rating" />
          <p className={styles.Rating}>4.5</p>
          <p className={styles.Price}>От 900 ₽</p>
          <ul>
            <li>Пицца</li>
          </ul>
        </section>
      </section>
    </Link>
  );
};

export default Dish;
