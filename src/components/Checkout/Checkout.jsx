import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";

import Formulario from "./Formulario";
import { CartContext } from "../../context/CartContext";
import validateForm from "../../utils/validacionFormulario.js";
import db from "../../db/db";

import "./Checkout.css";

const Checkout = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
  });

  const [idOrden, setIdOrden] = useState(null);

  const guardarDatosInput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrden = async (event) => {
    event.preventDefault();
    // formatear correctamente la orden
    const datos = {
      comprador: { ...datosForm },
      productos: [...carrito],
      total: precioTotal(),
    };
    // validar formulario antes de subir la orden
    const response = await validateForm(datosForm);
    if (response.status === "success") {
      subirOrden(datos);
    } else {
      toast.warn(response.message);
    }
  };

  const subirOrden = (datos) => {
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, datos)
      .then((respuesta) => {
        setIdOrden(respuesta.id);
      })
      .finally(() => {
        vaciarCarrito();
      });
  };

  return (
    <div>
      {idOrden ? (
        <div>
          <h2>Orden generada con éxito!!</h2>
          <p>Guarde el id de su orden: {idOrden}</p>
        </div>
      ) : (
        <Formulario
          datosForm={datosForm}
          guardarDatosInput={guardarDatosInput}
          enviarOrden={enviarOrden}
        />
      )}
    </div>
  );
};

export default Checkout;
