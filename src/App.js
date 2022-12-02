import "./global.scss"
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import {ROUTES} from "./config/routes";
import CatalogPage from "./pages/catalog";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<HomePage/>}/>
        <Route path={ROUTES.catalog} element={<CatalogPage/>}/>
      </Routes>
    </>
  );
}

export default App;
