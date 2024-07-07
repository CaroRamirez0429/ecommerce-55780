const Contador = ({ contador, aumentarContador, disminuirContador }) => {
  return (
    <div>
      <button onClick={disminuirContador}>-</button>
      <p>Contador: {contador} </p>
      <button onClick={aumentarContador} >+</button>
    </div>
  )
}
export default Contador