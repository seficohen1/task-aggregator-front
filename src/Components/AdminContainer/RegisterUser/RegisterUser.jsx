import { Button, Input } from "@nextui-org/react";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { createNewUser } from "../../../api/api";
import AuthContext from '../../../context/AuthContext'


// import { useForm } from "react-hook-form";
import "./RegisterUser.css";

const RegisterUser = () => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });

  
  const { token } = useContext(AuthContext)
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setNewUser((prev) => {
      return { ...prev, [name]: value };
    });
  };
  
  const navigate = useNavigate();

  const handleClick = () => {
    createNewUser(newUser, token.token);
    
    navigate("/dashboard", { replace: true });
  };

  return (
    <main className="register__container">
      <form className="register__form">
        <h2 className="register__title">REGISTER USER</h2>
        <Input
          className="register__input"
          name="firstName"
          value={newUser.firstName}
          label="Name"
          type="text"
          onChange={handleChange}
        />
        <Input
          className="register__input"
          name="lastName"
          value={newUser.lastName}
          label="Lastname"
          type="text"
          onChange={handleChange}
        />
        <Input
          className="register__input"
          name="email"
          value={newUser.email}
          label="Email"
          type="text"
          onChange={handleChange}
        />
        <Input.Password
          name="password"
          value={newUser.password}
          className="register__input"
          label="Password"
          type="password"
          onChange={handleChange}
        />
        <Input
          className="register__input"
          name="role"
          value={newUser.role}
          label="Role"
          type="text"
          onChange={handleChange}
        />
        <Button className="register__btn" onPress={handleClick}>
          Create
        </Button>
      </form>
    </main>
  );
};

export default RegisterUser;
