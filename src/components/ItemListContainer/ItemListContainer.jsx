import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import db from "../../db/db.js";
import { collection, getDocs, query, where } from "firebase/firestore";

import "./ItemListContainer.css";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const [estaCargando, setEstaCargando] = useState(false);

  const { idCategoria } = useParams();

  const obtenerProductos = () => {
    const productosRef = collection(db, "productos");
    getDocs(productosRef).then((respuesta) => {
      const data = respuesta.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProductos(data);
    });
  };

  const obtenerProductosFiltrados = () => {
    const productosRef = collection(db, "productos");
    const q = query(productosRef, where("categoria", "==", idCategoria));
    getDocs(q).then((respuesta) => {
      const data = respuesta.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProductos(data);
    });
  };

  useEffect(() => {
    if (idCategoria) {
      obtenerProductosFiltrados();
    } else {
      obtenerProductos();
    }
  }, [idCategoria]);

  return (
    <div className="itemlistcontainer">
      <h2>{saludo}</h2>
      {estaCargando ? (
        <div>Cargando...</div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
};
export default ItemListContainer;
