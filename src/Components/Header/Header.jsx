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
        <img src={Logo} />
        <a>
          <p>Delivery</p>
          <p>Food</p>
        </a>
      </NavLink>
      <section className={styles.HeaderSearch}>
        <img src={Home} />
        <input placeholder="Адрес доставки" />
      </section>
      <section className={styles.HeaderButtons}>
        <button className={styles.Login}>
          <img src={User} />
          Войти
        </button>
        <button className={styles.Cart}>
          <img src={Cart} />
          Корзина
        </button>
      </section>
    </section>
  );
};

export default Header;
