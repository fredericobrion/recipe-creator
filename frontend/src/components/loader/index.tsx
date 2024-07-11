import { useSelector } from "react-redux";
import styles from "./loader.module.css";
import { RootState } from "../../state/store";
import classNames from "classnames";


function Loader() {
  const darkTheme = useSelector((state: RootState) => state.theme.dark);

  return (
    <div className={styles.loading}>
      <div className={styles.loading__text}>
        <span className={classNames(styles.span, {[styles.span__light]: !darkTheme})}>C</span>
        <span className={classNames(styles.span, {[styles.span__light]: !darkTheme})}>R</span>
        <span className={classNames(styles.span, {[styles.span__light]: !darkTheme})}>I</span>
        <span className={classNames(styles.span, {[styles.span__light]: !darkTheme})}>A</span>
        <span className={classNames(styles.span, {[styles.span__light]: !darkTheme})}>N</span>
        <span className={classNames(styles.span, {[styles.span__light]: !darkTheme})}>D</span>
        <span className={classNames(styles.span, {[styles.span__light]: !darkTheme})}>O</span>
      </div>
    </div>
  );
}

export default Loader;
