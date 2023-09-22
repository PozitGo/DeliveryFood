import styles from "./Header.module.css";

import { NavLink } from "react-router-dom";
import Logo from "../../Images/logo.png";
import Home from "../../Images/home.png";
import User from "../../Images/user.png";
import Cart from "../../Images/cart.png";

const Header = () => {
  return (
    <section className={styles.HeaderContain}>
      <NavLink className={styles.Logo} to="/">
        <img src={Logo} alt="Логотип" />
        <span>
          <p>Delivery</p>
          <p>Food</p>
        </span>
      </NavLink>
      <section className={styles.HeaderSearch}>
        <img src={Home} alt="Домашняя страница" />
        <input placeholder="Адрес доставки" />
      </section>
      <section className={styles.HeaderButtons}>
        <button className={styles.Login}>
          <img src={User} alt="Пользователь" />
          Войти
        </button>
        <button className={styles.Cart}>
          <img src={Cart} alt="Корзина" />
          Корзина
        </button>
      </section>
    </section>
  );
};

export default Header;
