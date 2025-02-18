// config/routes.js

export const ROUTES = {
    HOME: "/",
    ABOUT: "/about",
    SERVICES: "/services",
    PRICELIST: "/pricing",
    CONTACT: "/contact",
  };
  
  // Contoh Routing dengan react-router-dom
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  import Home from "../pages/Home";
  import About from "../pages/About";
  import Services from "../pages/Services";
  import Pricelist from "../pages/Pricelist";
  import Contacts from "../pages/Contacts";
  
  export function AppRouter() {
    return (
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.SERVICES} element={<Services />} />
          <Route path={ROUTES.PRICELIST} element={<Pricelist />} />
          <Route path={ROUTES.CONTACT} element={<Contacts />} />
        </Routes>
      </Router>
    );
  }
    // src/pages/HomePage.jsx  