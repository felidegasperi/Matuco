import { useState, useEffect, useContext } from "react";
import { APIContext } from "../services/apiContext/API.context";

export const useFetchOrders = (url) => {
  const [orders, setOrders] = useState([]);
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
        toggleLoading(false);
        setOrders(data);
      })
      .catch((err) => {
        toggleLoading(false);
        setError(err);
      });
  }, [url]);

  return { orders, setOrders, error };
};
