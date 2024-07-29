import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ agregarAlCarrito, stock }) => {
  const [contador, setContador] = useState(1);

  const sumarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restarContador = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="controls-count">
        <button onClick={restarContador}>-</button>
        <p>{contador}</p>
        <button onClick={sumarContador}>+</button>
      </div>
      <button className="add" onClick={() => agregarAlCarrito(contador)}>
        Agregar al carrito
      </button>
    </div>
  );
};
export default ItemCount;
