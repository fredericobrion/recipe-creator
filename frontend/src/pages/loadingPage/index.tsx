import Loader from "../../components/loader";
import styles from "./loadingPage.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoadingPage() {
  const loading = useSelector((state: RootState) => state.loading.value);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      navigate("/");
    }
  }, [loading]);

  return (
    <div className={styles.container}>
      <Loader />
    </div>
  );
}

export default LoadingPage;
