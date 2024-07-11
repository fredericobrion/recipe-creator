import "./App.css";
import MainPage from "./pages/mainPage";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout";
import LoadingPage from "./pages/loadingPage";
import RecipePage from "./pages/recipePage";
import ErrorPage from "./pages/errorPage";
import { useSelector } from "react-redux";
import { RootState } from "./state/store";
import { useEffect } from "react";

function App() {
  const darkTheme = useSelector((state: RootState) => state.theme.dark);
  
  const changeColor = (newColor: string) => {
    document.documentElement.style.setProperty("--background", newColor)
  }

  useEffect(() => {
    if (darkTheme) {
      changeColor("#000000")
    } else {
      changeColor("#ffffff")
    }
  }, [darkTheme]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="creating" element={<LoadingPage />} />
          <Route path="recipe" element={<RecipePage />} />
          <Route path="error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
