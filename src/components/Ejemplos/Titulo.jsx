import { useEffect } from "react";

const Titulo = ({ texto, numero, saludar }) => {
  useEffect(() => {
    //cleanup effect
    return () => {
      console.log("Desmontando titulo...");
    };
  }, []);

  return (
    <div>
      <p>{texto}</p>
      <p>{numero}</p>
      <button onClick={saludar}>Clickeame</button>
    </div>
  );
};
export default Titulo;
