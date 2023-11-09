import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
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
      .then((data) => setUsers(data))
      .catch((err) => setError(err));
  }, [url]);

  return { users, error };
};
