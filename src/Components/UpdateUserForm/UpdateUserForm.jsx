import React, { useState, useMemo, useContext, useEffect } from "react";
import "./UpdateUserForm.css";
import { Input, Button, Dropdown, Grid } from "@nextui-org/react";
import AuthContext from "../../context/AuthContext";

import { getAllUsers, updateUser } from "../../api/api";

import { EmployeeContext } from "../../context/EmployeeContex";

const UpdateUserForm = ({
  id,
  firstName,
  lastName,
  email,
  role,
  closeModal,
}) => {
  const { user } = useContext(AuthContext);
  const { setEmployees, setIsLoaded } = useContext(EmployeeContext);
  const [selected, setSelected] = useState(new Set(["User"]));
  const [formValues, setFormValues] = useState({ firstName, lastName, email });
  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected],
  );

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email } = formValues;
    updateUser(`http://localhost:4001/dashboard/users/${id}`, {
      firstName,
      lastName,
      email,
      role,
      dropDownInput: selected.currentKey,
    });
    closeModal();
    getAllUsers("http://localhost:4001/dashboard/users", setEmployees);
    setIsLoaded(() => !true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid.Container justify="center">
          <Grid className="update-from-field">
            <Input
              label="First name"
              name="firstName"
              onChange={handleChange}
              placeholder={firstName}
              css={{
                width: "100%",
              }}
            />
          </Grid>
          <Grid className="update-from-field">
            <Input
              label="Last name"
              name="lastName"
              onChange={handleChange}
              placeholder={lastName}
              css={{
                width: "100%",
              }}
            />
          </Grid>
          <Grid className="update-from-field">
            <Input
              label="Email"
              name="email"
              onChange={handleChange}
              placeholder={email}
              css={{
                width: "100%",
              }}
            />
          </Grid>
          {user.role === "admin" && (
            <Grid>
              <Dropdown>
                <Dropdown.Button
                  flat
                  color="secondary"
                  css={{ tt: "capitalize" }}
                >
                  {selectedValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  aria-label="Single selection actions"
                  color="secondary"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                >
                  <Dropdown.Item key="user">User</Dropdown.Item>
                  <Dropdown.Item key="admin">Admin</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
          )}
          <Button
            className="update-from-field"
            type="submit"
            value={`I'm done`}
            css={{
              width: "100%",
              backgroundColor: "#25316D",
              fontSize: "1.2rem",
              marginTop: "1.5rem",
            }}
          >
            I'm Done
          </Button>
        </Grid.Container>
      </form>
    </>
  );
};

export default UpdateUserForm;
