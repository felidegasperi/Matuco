/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useContext, useState } from "react";
import { ThemeContext } from "../../services/themeContext/Theme.context";
import { useNavigate } from "react-router-dom";
import { useFetchUsers } from "../../hooks/useFetchUsers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserForm from "./UserForm";

const AddUser = () => {
  const [isValid, setIsValid] = useState(false);

  const { theme } = useContext(ThemeContext);
  const apiUrl = "https://matuco-fake-api.onrender.com/users";
  const { users, setUsers, error } = useFetchUsers(apiUrl);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const navigate = useNavigate();

  const postNewUserHandler = useCallback(
    (user) => {
      const newUserId = users[users.length - 1].id + 1;
      console.log("User data in postNewUserHandler: ", user);
      fetch("https://matuco-fake-api.onrender.com/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: newUserId,
          username: user.username,
          email: user.email,
          password: user.password,
          type: user.type,
          isActive: true,
        }),
      })
        .then((response) => {
          if (response.ok) return response.json();
          else {
            throw new Error("The response had some errors");
          }
        })
        .then(() => {
          console.log("user en then", user);
          const newUserArray = [{ ...user, id: newUserId }, ...users];
          setUsers(newUserArray);
          toast.success("Se creo el usuario correctamente.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((error) => console.log(error));
    },
    [setUsers, users]
  );

  const onValidHandler = () => {
    setIsValid(true);
    navigate("/listUsers");
  };

  return (
    <div className="row justify-content-center mt-5 p-5">
      <ToastContainer />
      <div className=" col-1 d-flex align-items-center">
        {isValid === false && (
          <button
            className={`${
              theme === "DARK"
                ? "btn btn-outline-light d-flex justify-content-center"
                : "btn btn-outline-dark d-flex justify-content-center"
            }`}
            onClick={onValidHandler}
          >
            Agregar Usuario
          </button>
        )}
      </div>
      <div className="col-6">
        {isValid === true && (
          <UserForm
            onNewUserHandler={postNewUserHandler}
            isValid={isValid}
            setIsValid={setIsValid}
            users={users}
          />
        )}
      </div>
    </div>
  );
};

export default AddUser;
