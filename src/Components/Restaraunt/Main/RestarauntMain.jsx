import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MenuList from "../MenuList/MenuList";

import styles from "./Restaraunt.module.css";
import Rating from "../../../Images/RatingIMG.png";

const RestarauntMain = () => {
  let { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const id = parseInt(restaurantId, 10);
    axios
      .get(
        `https://deliveryfood-2f0eb-default-rtdb.asia-southeast1.firebasedatabase.app/dishList.json`
      )
      .then((response) => {
        setRestaurant(response.data);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных ресторана:", error);
      });
  }, [restaurantId]);

  if (!restaurant) {
    return <div className={styles.Loading}>Loading...</div>;
  }

  return (
    <section className={styles.MainContainer}>
      <section className={styles.HeaderRestoraunt}>
        <h1>{restaurant.name}</h1>
        <img src={Rating} alt="Рейтинг" />
        <p className={styles.Rating}>4.5</p>{" "}
        {/* Предположительно, рейтинг будет частью данных ресторана */}
        <p className={styles.Price}>От 900 ₽</p>{" "}
        {/* Аналогично, цена может быть частью данных */}
        <ul>
          <li>Пицца и суши</li>{" "}
          {/* Эти данные также должны приходить от API, если они переменны */}
        </ul>
      </section>
      <MenuList />
    </section>
  );
};

export default RestarauntMain;
