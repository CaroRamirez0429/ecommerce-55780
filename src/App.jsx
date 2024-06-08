import './App.css'
import phone from "./img/phone.jpeg"
import NavBar from './components/NavBar'
import Titulo from './components/Ejemplos/Titulo'
import EjemploContador from './components/Ejemplos/EjemploContador'
import ItemContainer from './components/Ejemplos/ItemContainer'

function App() {
  const styleDiv = { backgroundColor: "purple" }

  const saludo = "Bienvenidos a mi ecommerce"

  const saludar = () => {
    alert("Ejecutando funcion desde App")
  }

  return(
    <div>
      <NavBar />
      <ItemContainer />
      
    </div>
  )
}

export default App