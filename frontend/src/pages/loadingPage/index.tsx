import Loader from "../../components/loader/indes";
import styles from "./loadingPage.module.css";

function LoadingPage() {
  return (
    <div className={styles.container}>
      <h2>Criando receita</h2>
      <Loader />
    </div>
  );
}

export default LoadingPage;
