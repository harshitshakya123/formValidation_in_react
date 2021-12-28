import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import RegisterForm1 from "./components/RegisterForm1";
import { RegisterForm2 } from "./components/RegisterForm2";
import CustomRegisterForm from "./components/CustomRegisterForm";
import RegisterFormUsingCustomHook from "./components/RegisterFormUsingCustomHook";

function App() {
  return (
    <div className="register-form">
      <RegisterForm1 />
      <RegisterForm2 />
      <CustomRegisterForm />
      <RegisterFormUsingCustomHook />
    </div>
  );
}

export default App;
