import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBarApp from "./components/NavBar/Navbar"
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./pages/Cart/Cart";




function App() {
  return (
    <BrowserRouter>
      <NavBarApp />
      <Routes>
        <Route path="/" element = {<ItemListContainer greeting="Bienvenidos a Makers m 3D" />} />
        <Route path="/category/:id" element = {<ItemListContainer />} />
        <Route path="/item/:id" element = {<ItemDetailContainer />} />
        <Route path="/cart" element = {<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
