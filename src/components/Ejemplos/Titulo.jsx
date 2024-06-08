const Titulo = ({texto, numero, saludar}) => {


  return (
    <div>
     <p>{texto}</p>
     <p>{numero}</p>
     <button onClick={saludar}>Clickeame</button>
    </div>
  )
}

export default Titulo
