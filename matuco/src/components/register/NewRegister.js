import React, { memo } from "react";
import RegisterForm from "./RegisterForm";

const NewRegister = memo(({ onSavedUser }) => {
  console.log("new user create");
  const savedUserHandler = (user) => {
    onSavedUser(user);
  };

  return (
    <>
      <RegisterForm onSavedUser={savedUserHandler} />
    </>
  );
});

export default NewRegister;
