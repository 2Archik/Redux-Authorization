import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LOGIN, PASSWORD } from "../../constants/constants";
import { login } from "../../redux/actions/actions";
import "./styles.css";

const LoginPage = () => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handlerLogin = (event) => {
    dispatch(login(LOGIN, event.target.value));
    console.log(state.login);
  };

  const handlerPassword = (event) => {
    dispatch(login(PASSWORD, event.target.value));
    console.log(state.password);
  };

  return (
    <form className="form">
      <h1>Авторизация</h1>
      <input
        className="form__input"
        onChange={handlerLogin}
        placeholder="LadinArtur"
      />
      <input
        className="form__input"
        onChange={handlerPassword}
        placeholder="123456789"
      />
      <NavLink
        className={`form__link ${
          state.login === "LadinArtur" && state.password === "123456789"
            ? ""
            : "form__link--disabled "
        }`}
        to="/profile"
      >
        Войти
      </NavLink>
    </form>
  );
};

export default LoginPage;
