import React from "react";
import Menu from "../Menu/RestarauntMenu";

import image1 from "../../../Images/Menu/image1.png";
import image2 from "../../../Images/Menu/image2.png";
import image3 from "../../../Images/Menu/image3.png";
import image4 from "../../../Images/Menu/image4.png";
import image5 from "../../../Images/Menu/image5.png";
import image6 from "../../../Images/Menu/image6.png";

import styles from "./MenuList.module.css";

const MenuData = [
  {
    id: 1,
    name: "Ролл угорь стандарт",
    image: image1,
    Description: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
    Price: 250,
  },
  {
    id: 2,
    name: "Калифорния лосось стандарт",
    image: image2,
    Description:
      "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
    Price: 395,
  },
  {
    id: 3,
    name: "Окинава стандарт",
    image: image3,
    Description:
      " Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...",
    Price: 250,
  },
  {
    id: 4,
    name: "Цезарь маки хl",
    image: image4,
    Description:
      "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...",
    Price: 250,
  },
  {
    id: 5,
    name: "Ясай маки стандарт 185 г",
    image: image5,
    Description:
      "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг",
    Price: 250,
  },
  {
    id: 6,
    name: "Ролл с креветкой стандарт",
    image: image6,
    Description:
      "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы",
    Price: 250,
  },
];

const MenuList = () => {
  return (
    <section className={styles.Contain}>
      {MenuData.map((item) => (
        <Menu
          key={item.id}
          img={item.image}
          Name={item.name}
          Description={item.Description}
          Price={item.Price}
        />
      ))}
    </section>
  );
};

export default MenuList;
