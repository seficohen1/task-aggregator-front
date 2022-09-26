import React, { useContext, useState, useEffect } from "react";
import "./Employee.css";
import {
  Grid,
  Modal,
  Button,
  Text,
  Input,
  Row,
  Checkbox,
} from "@nextui-org/react";
import AuthContext from "../../context/AuthContext";

import UserModal from "../UserModal/UserModal";

const Employee = ({ firstName, lastName, email, role, id }) => {
  const { user } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandle = () => setVisible(false);
  const editOption = user?.role === "admin" || user._id === id;

  return (
    <main className="container__employee">
      <Grid.Container
        className="container__gird--employee"
        gap={2}
        justify="center"
      >
        <Grid className="emp__grid" xs={5}>
          {firstName}
        </Grid>
        <Grid xs={2}>{lastName}</Grid>
        <Grid xs={2}>{email}</Grid>
        <Grid xs={3} justify="space-between">
          <p className="emp__role">{role}</p>

          {(user?.role === "admin" || user._id === id) && (
            <>
              <Button
                size='xs'
                className="employee__edit--p"
                onPress={handler}
                onClose={closeHandle}
              >
                EDIT
              </Button>
              <UserModal
                visible={visible}
                closeHandler={closeHandle}
                firstName={firstName}
                lastName={lastName}
                email={email}
                role={role}
                id={id}
              />
            </>
          )}
        </Grid>
      </Grid.Container>
    </main>
  );
};

export default Employee;
