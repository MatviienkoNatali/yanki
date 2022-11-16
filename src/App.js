import "./global.scss"
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import {ROUTES} from "./config/routes";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.home} element={<HomePage/>}/>
        <Route path={ROUTES.categories} element={<HomePage/>}/>
      </Routes>
    </>
  );
}

export default App;
