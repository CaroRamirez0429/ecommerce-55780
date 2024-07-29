import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <div className="item">
      <img src={producto.imagen} width={200} alt="" />
      <div className="description-item">
        <p>{producto.nombre}</p>
        <p>precio: ${producto.precio}</p>

        <Link to={"/detalle/" + producto.id} style={{ color: "red" }}>
          Ver detalles
        </Link>
      </div>
    </div>
  );
};
export default Item;
