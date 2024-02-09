import React, { useState } from "react";
import MyNavbar from "./Navbar";
import Info from "./Info";
import Feedback from "./Feedback";
import Footer from "./Footer";
import Login from "./Login";
import Register from "./Register";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistration, setShowRegister] = useState(false);
  const [showData, setData] = useState(true);

  const handleLoginClick = () => {
    setShowRegister(false);
    setShowLogin(!showLogin);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(!showRegistration);
  };
  // function handleShow() {
  //   if(showRegistration==true || showLogin==true){
  //     setData(false);
  //   }
  //   else{
  //     setData(true);
  //   }
  // }

  return (
    <div>
      <MyNavbar
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
      />
      {showLogin && <Login />}
      {showRegistration && <Register />}

      {<Info />}
      {<Feedback />}
      <Footer />
    </div>
  );
};

export default Home;
