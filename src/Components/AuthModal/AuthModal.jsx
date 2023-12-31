import styles from "./AuthModal.module.css";
import { useState, useRef } from "react";
import Modal from "../UI/Modal";
import { useDispatch } from "react-redux";
import { login } from "../../Store/loginSlice";

const AuthModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(props.isOpen);
  const [IsValid, setValid] = useState(true);
  const UserName = useRef();
  const dispatch = useDispatch();

  const closeModal = () => {
    setIsModalOpen(false);
    props.onCloseCart();
  };

  const LogInHandler = () => {
    if (
      UserName.current.value !== null &&
      UserName.current.value !== undefined &&
      UserName.current.value !== ""
    ) {
      setValid(true);
      handleLogin();
      closeModal();
    } else {
      setValid(false);
    }
  };

  const handleLogin = () => {
    dispatch(login(UserName.current.value));
  };

  const LogInFocusHandler = () => {
    setValid(true);
  };

  return (
    <Modal onHideCart={closeModal} isOpen={isModalOpen}>
      <section className={styles.AuthContain}>
        <h1>Авторизация</h1>
        <input
          className={`${IsValid !== true ? styles.ErrorBorder : ""} ${
            styles.AuthInput
          }`}
          type="text"
          ref={UserName}
          placeholder="Введите имя пользователя"
          onFocus={LogInFocusHandler}
        />
        {!IsValid && (
          <p className={styles.ErrorText}>Имя пользователя некорректно</p>
        )}
        <button className={styles.LogIn} onClick={LogInHandler}>
          Войти
        </button>
      </section>
    </Modal>
  );
};

export default AuthModal;
