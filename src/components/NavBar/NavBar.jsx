import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <img
          width={150}
          src="https://www.telcel.com/medias/Header-Logo.png?context=bWFzdGVyfGltYWdlc3w1MTk5fGltYWdlL3BuZ3xpbWFnZXMvaDgxL2g2Ni84ODY1MjAyMDEyMTkwLnBuZ3w0ZjM0YTM2OTNjNDM5ODM0OTc5YWE4ZmI4NGQ0NTFjYjQ2YmQyNjcyYTEyM2Y3ZjI3NGQ4YjJiOTU5Mjc5ZTAy"
          alt=""
        />
      </Link>

      <ul className="categories">
        <Link to="/categoria/kiosco" className="category">
          <p>Otros</p>
          <div className="img-category">
            <img
              src="https://images.deliveryhero.io/image/pedidosya/only-home-squad/grid-masonry/quilted/kioscos-foto-q.png"
              alt=""
            />
          </div>
        </Link>

        <Link to="/categoria/bebidas" className="category">
          <p>Bebidas</p>
          <div className="img-category">
            <img
              src="https://images.deliveryhero.io/image/pedidosya/only-home-squad/grid-masonry/quilted/drinks-foto-q.png"
              alt=""
            />
          </div>
        </Link>

        <Link to="/categoria/mascotas" className="category">
          <p>Mascotas</p>
          <div className="img-category">
            <img
              src="https://images.deliveryhero.io/image/pedidosya/only-home-squad/grid-masonry/quilted/mascotas-foto-q.png"
              alt=""
            />
          </div>
        </Link>
      </ul>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
