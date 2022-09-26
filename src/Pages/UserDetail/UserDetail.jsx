import React, { useContext, useEffect, useState } from "react";
import { getAllUsers } from "../../api/api";
import "./UserDetail.css";

import UserBar from "../../Components/UserBar/UserBar";
import Employee from "../../Components/Employee/Employee";
import { EmployeeContext } from "../../context/EmployeeContex";

function UserDetail() {
  const { employees } = useContext(EmployeeContext);

  return (
    <>
      <UserBar></UserBar>
      {employees.map(({ firstName, lastName, email, role, _id: id }) => {
        return (
          <Employee
            key={id}
            firstName={firstName}
            lastName={lastName}
            email={email}
            role={role}
            id={id}
          />
        );
      })}
    </>
  );
}

export default UserDetail;
