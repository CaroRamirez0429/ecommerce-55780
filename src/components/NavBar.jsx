import "./NavBar.css"
import CartWidget from "./Ejemplos/CartWidget"

const NavBar = () => {
    return(
        <nav className="navbar"> 
        <div>
            <img width={150} src="https://www.telcel.com/medias/Header-Logo.png?context=bWFzdGVyfGltYWdlc3w1MTk5fGltYWdlL3BuZ3xpbWFnZXMvaDgxL2g2Ni84ODY1MjAyMDEyMTkwLnBuZ3w0ZjM0YTM2OTNjNDM5ODM0OTc5YWE4ZmI4NGQ0NTFjYjQ2YmQyNjcyYTEyM2Y3ZjI3NGQ4YjJiOTU5Mjc5ZTAy" alt="" />
        </div>
        <ul>
            <li>Tecnología Móvil</li>
            <li>Modelos</li>
            <li>Accesorios</li>
        </ul>
        <CartWidget />
        </nav>
    )
}

export default NavBar 