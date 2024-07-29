import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import db from "../../db/db.js";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});

  const { idProducto } = useParams();

  const obtenerProducto = () => {
    const docRef = doc(db, "productos", idProducto);
    getDoc(docRef).then((respuesta) => {
      const data = { id: respuesta.id, ...respuesta.data() };
      setProducto(data);
    });
  };

  useEffect(() => {
    obtenerProducto();
  }, []);

  return <ItemDetail producto={producto} />;
};
export default ItemDetailContainer;
