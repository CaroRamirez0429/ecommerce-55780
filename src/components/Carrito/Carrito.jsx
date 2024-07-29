import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoTrash } from "react-icons/io5";
import "./Carrito.css";

const Carrito = () => {
  const { carrito, borrarProductoPorId, vaciarCarrito, precioTotal } =
    useContext(CartContext);

  //Early Return, Return temprano

  if (carrito.length === 0) {
    return (
      <div className="cart-empty">
        <h2>No hay productos en el carrito 😥</h2>
        <Link to="/">Ver productos</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Productos en el carrito 🛒</h2>
      {carrito.map((productoCarrito) => (
        <div className="card-cart" key={productoCarrito.id}>
          <img src={productoCarrito.imagen} width={100} alt="" />
          <p>{productoCarrito.nombre}</p>
          <p>precio c/u: ${productoCarrito.precio}</p>
          <p>cantidad: {productoCarrito.cantidad}</p>
          <p>
            total parcial: {productoCarrito.precio * productoCarrito.cantidad}
          </p>

          <IoTrash
            size={40}
            color="red"
            onClick={() => borrarProductoPorId(productoCarrito.id)}
          />
        </div>
      ))}
      <p>Precio Total: {precioTotal()}</p>
      <button className="delete-cart" onClick={vaciarCarrito}>
        <IoTrash size={40} color="red" />
        <p>Vaciar carrito</p>
      </button>
      <Link className="continue-cart" to="/checkout">
        Continuar con la compra
      </Link>
    </div>
  );
};
export default Carrito;
