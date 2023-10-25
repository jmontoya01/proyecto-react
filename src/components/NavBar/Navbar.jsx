
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget"

function NavBarApp() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home"><img className="imglogo" src="./images/logomakers3d.jpg" alt="logo makers m 3d" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Figuras de Acción</Nav.Link>
                        <NavDropdown title="Accesorios" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Espadas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Diseños 3D
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Varias</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>                       
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