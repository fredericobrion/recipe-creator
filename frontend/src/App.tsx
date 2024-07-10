import "./App.css";
import MainPage from "./pages/mainPage";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout";
import LoadingPage from "./pages/loadingPage";
import RecipePage from "./pages/recipePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="creating" element={<LoadingPage />} />
          <Route path="recipe" element={<RecipePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
