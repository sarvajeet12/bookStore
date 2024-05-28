import React from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer.jsx";
import { useAuth } from "./store/Auth.jsx";

const App = () => {
  const { themeColor } = useAuth();

  return (
    <>
      <div className="appCont" data-theme={themeColor}>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
