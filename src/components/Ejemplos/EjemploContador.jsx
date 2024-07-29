import { useState, useEffect } from "react";
import Contador from "./Contador";
import Titulo from "./Titulo";

const EjemploContador = ({ stock }) => {
  const [contador, setContador] = useState(1);
  const [toggle, setToggle] = useState(true);

  //se ejecuta solo al montar el componente
  //ej: llamadas a apis, suscripciones a eventListenter
  useEffect(() => {
    console.log("1er useEffect");
  }, []);

  //se ejecuta en el montaje y cada vez que la variable "contador" se actualice
  //ej: para realizar acciones especificas cuando una variable dependiente cambie
  useEffect(() => {
    console.log("2do useEffect");
  }, [contador]);

  //se ejecuta en el montaje y cada vez que se actualice cualquier estado de mi componente
  //ej: operaciones globales de monitoreo o registro, actualizaciones generales del componente
  useEffect(() => {
    console.log("3er useEffect");
  });

  const aumentarContador = () => {
    //contador = contador + 1
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const disminuirContador = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const cambiarValorToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <Contador
        contador={contador}
        aumentarContador={aumentarContador}
        disminuirContador={disminuirContador}
      />

      <p> Booleano: {toggle.toString()} </p>
      <button onClick={cambiarValorToggle}>Cambiar valor toggle</button>

      {toggle && <Titulo texto="hola" numero={3} />}
    </div>
  );
};
export default EjemploContador;
