import React, { useCallback, useContext, useState } from "react";
import { ThemeContext } from "../../services/themeContext/Theme.context";
import { useNavigate } from "react-router-dom";
import { useFetchUsers } from "../../hooks/useFetchUsers";
import UserForm from "./UserForm";

const AddUser = () => {
  const [isValid, setIsValid] = useState(false);

  const { theme } = useContext(ThemeContext);
  const apiUrl = "http://localhost:8000/users";
  const { users, setUsers, error } = useFetchUsers(apiUrl);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const navigate = useNavigate();

  const postNewUserHandler = useCallback(
    (user) => {
      //setUsers((prevUsers) => [user, ...prevUsers]);

      const newUserId = users[users.length - 1].id + 1;
      console.log("User data in postNewUserHandler: ", user);
      fetch("http://localhost:8000/users", {
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
        })
        .catch((error) => console.log(error));
    },
    [users]
  );

  const onValidHandler = () => {
    setIsValid(true);
    navigate("/listUsers");
  };

  return (
    <div className="row justify-content-center mt-5 p-5">
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
