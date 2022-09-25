import { Button, Input } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
import "./RegisterUser.css";
import axios from "axios";

const RegisterUser = () => {
  // const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (event) => {
		console.log(event.target.value)
    const { name, value } = event.target;
		console.log(name, value)
    setNewUser((prev) => {
      return { ...prev, name: value };
    });
  };

  // useEffect(() => {
  // 	console.log(newUser)
  // }, [newUser])

  const handleClick = (event) => {
    // event.preventDefault();
		// console.log(newUser)

    axios
      .post("http://localhost:4001/dashboard/users", newUser)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <main className="register__container">
      <form className="register__form">
        <h2 className="register__title">REGISTER USER</h2>
        <Input
          className="register__input"
          name="name"
          value={newUser.name}
          label="Name"
          type="text"
          onChange={handleChange}
        />
        <Input
          className="register__input"
          name="lastname"
          value={newUser.lastname}
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
        <Button className="register__btn" onClick={handleClick} type='submit'>
          Create
        </Button>
      </form>
    </main>
  );
};

export default RegisterUser;
