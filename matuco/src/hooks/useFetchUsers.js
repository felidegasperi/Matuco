import { useState, useEffect, useContext } from "react";
import { APIContext } from "../services/apiContext/API.context";

export const useFetchUsers = (url) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const { toggleLoading } = useContext(APIContext);

  useEffect(() => {
    toggleLoading(true);
    fetch(url, {
      headers: {
        accept: "aplication/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo obtener los datos");
        }
        return response.json();
      })
      .then((data) => {
        toggleLoading(false)
        setUsers(data);
      })
      .catch((err) => {
        toggleLoading(false);
        setError(err);
      });
  }, [url]);

  return { users, setUsers, error };
};
