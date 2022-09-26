import React, { useContext } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import UpdateUserForm from "../UpdateUserForm/UpdateUserForm";
import AuthContext from "../../context/AuthContext";

const UserModal = ({
  visible,
  closeHandler,
  firstName,
  lastName,
  email,
  role,
  id,
}) => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="Edit user"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="Edit user" size={18}>
            {`Edit ${
              user.email === email
                ? "your own details"
                : firstName + "`s detials"
            }`}
          </Text>
        </Modal.Header>
        <Modal.Body>
          <UpdateUserForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            role={role}
            id={id}
            closeModal={closeHandler}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default UserModal;
