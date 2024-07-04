import "./App.css";
import MainPage from "./pages/mainPage";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import LoadingPage from "./pages/loadingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="creating" element={<LoadingPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
