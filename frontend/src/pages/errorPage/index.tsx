import styles from "./errorPage.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

function ErrorPage() {
  const navigate = useNavigate();

  const darkTheme = useSelector((state: RootState) => state.theme.dark);
  const error = useSelector((state: RootState) => state.error.value);

  useEffect(() => {
    if (error === "") navigate("/");
  }, []);

  return (
    <div className={styles.container}>
      <h2
        className={classNames(styles.error, {
          [styles.error__light]: !darkTheme,
        })}
      >
        {error}
      </h2>
      <button onClick={() => navigate('/')}>Voltar</button>
    </div>
  );
}

export default ErrorPage;
