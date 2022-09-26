import React from "react";
import "./UserBar.css";
import { Container, Grid } from "@nextui-org/react";

const UserBar = () => {
  return (
    <Container className="container__employees">
      <Grid.Container gap={2} justify="center">
        <Grid xs={5}>First name</Grid>
        <Grid xs={2}>Last name</Grid>
        <Grid xs={2}>Email</Grid>
        <Grid xs={3}>Role</Grid>
      </Grid.Container>
    </Container>
  );
};

export default UserBar;
