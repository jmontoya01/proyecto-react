import CartWidget from "../CartWidget/CartWidget"
import "./styles.css"

const NavBar = () => {
    return (
        <nav className="navbar-container">
            <div>
                <img className="imglogo" src="./images/logomakers3d.jpg" alt="logo makers m 3d" />
            </div>

            <div>
                <ul className="list-container">
                    <li><button className="nav-btn">Figuras de acción</button></li>
                    <li><button className="nav-btn">Espadas</button></li>
                    <li><button className="nav-btn">anime</button></li>
                </ul>
            </div>
            
            <CartWidget />



        </nav>
    )
}

export default NavBar