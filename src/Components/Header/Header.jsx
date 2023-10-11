import styles from "./Header.module.css";
import AuthModal from "../AuthModal/AuthModal";
import Cart from "../Cart/Cart";
import { NavLink } from "react-router-dom";
import Logo from "../../Images/logo.png";
import Home from "../../Images/home.png";
import User from "../../Images/user.png";
import CartImage from "../../Images/cart.png";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { logout } from "../../Store/loginSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const UserName = useSelector((state) => state.login.UserName);
  const [IsOpenAuth, setOpenAuth] = useState(false);
  const [IsAuth, setIsAuth] = useState(false);
  const [isOpenCart, setOpenCart] = useState(false);
  const dispatch = useDispatch();

  const openCart = () => {
    setOpenCart(true);
  };

  const closeCart = () => {
    setOpenCart(false);
  };

  const openAuthModal = () => {
    setOpenAuth(true);
  };

  const handleLogin = () => {
    dispatch(logout());
    setIsAuth(false);
  };

  const closeAuthModal = () => {
    setOpenAuth(false);
  };

  return (
    <section className={styles.HeaderContain}>
      <NavLink className={styles.Logo} to="/DeliveryFood">
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

      {IsAuth && <p className={styles.UserName}>{UserName}</p>}
      <section className={styles.HeaderButtons}>
        {!IsAuth && (
          <button className={styles.Login} onClick={openAuthModal}>
            <img src={User} alt="Пользователь" />
            Войти
          </button>
        )}

        {IsOpenAuth && !IsAuth && (
          <AuthModal
            isOpen={IsOpenAuth}
            IsAuth={setIsAuth}
            onCloseCart={closeAuthModal}
          />
        )}

        {IsAuth && (
          <button className={styles.Login} onClick={handleLogin}>
            <img src={User} alt="Пользователь" />
            Выйти
          </button>
        )}

        <button className={styles.Cart} onClick={openCart}>
          <img src={CartImage} alt="Корзина" />
          Корзина
        </button>

        <Cart isOpen={isOpenCart} onCloseCart={closeCart} />
      </section>
    </section>
  );
};

export default Header;
