import styles from "./header.module.css";
import { Link } from "react-router-dom";
import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { toggleTheme } from "../../state/theme/themSlice";
import { useEffect, useState } from "react";

function Header() {
  const dispatch = useDispatch<AppDispatch>();

  const [isToggled, setToggle] = useState(false);

  const darkTheme = useSelector((state: RootState) => state.theme.dark);

  useEffect(() => {
    dispatch(toggleTheme());
  }, [isToggled]);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <h1>Criador de Receitas</h1>
      </Link>
      <Classic
        className={`${styles.toggle} ${
          darkTheme ? styles.toggle__dark : styles.toggle__light
        }`}
        duration={750}
        toggled={isToggled}
        toggle={setToggle}
      />
    </header>
  );
}

export default Header;
