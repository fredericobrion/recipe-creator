import styles from "./header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        <h1>Criador de Receitas</h1>
      </Link>
    </header>
  );
}

export default Header;
