
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"
import { Link } from 'react-router-dom';
import "./styles.css"

function NavBarApp() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container className='color-nav'>
                <Navbar.Brand  href="/"><img className="imglogo"  src="../images/logosolo.jpg" alt="logo makers m 3d" /></Navbar.Brand>
                <Navbar.Toggle  aria-controls="basic-navbar-nav" />
                <Navbar.Collapse  id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='linkbtn' to={"/"}>Home |</Link>
                        <Link className='linkbtn' to={"/category/electronics"}>Electronics</Link>
                        <Link className='linkbtn' to={"/category/jewelery"}>Joyería</Link>
                        <Link className='linkbtn' to={"/category/men's-clothing"}>Ropa de hombre</Link>
                        <Link className='linkbtn' to={"/category/women's-clothing"}>Ropa de mujer</Link>                     
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarApp;














// import "./styles.css"

// const NavBar = () => {
//     return (
//         <nav className="navbar-container" >
//             <div>
//                 <img className="imglogo" src="./images/logomakers3d.jpg" alt="logo makers m 3d" />
//             </div>

//             <div>
//                 <ul className="list-container">
//                     <li><button className="nav-btn">Figuras de acción</button></li>
//                     <li><button className="nav-btn">Espadas</button></li>
//                     <li><button className="nav-btn">Accesorios</button></li>
//                 </ul>
//             </div>
            
//             <CartWidget />



//         </nav>
//     )
// }

// export default NavBar