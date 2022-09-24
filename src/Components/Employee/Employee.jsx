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

  return (
    <main className="container__employee">
      <Grid.Container
        className="container__gird--employee"
        gap={2}
        justify="space-between  "
      >
        <Grid className="emp__grid" xs={1}>
          {firstName}
        </Grid>
        <Grid xs={1}>{lastName}</Grid>
        <Grid xs={1}>{email}</Grid>
        <Grid xs={1}>{role}</Grid>

        {(user?.role === "admin" || user._id === id) && (
          <Grid xs={1}>
            <Button
              className="emp-edit-modal-btn"
              onPress={handler}
              onClose={closeHandle}
            >
              {<Grid></Grid>}
              <i className="dropdown__icon bx bx-dots-horizontal-rounded"></i>
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
          </Grid>
        )}
      </Grid.Container>
    </main>
  );
};

export default Employee;
