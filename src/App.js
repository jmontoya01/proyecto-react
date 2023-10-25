import NavBarApp from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <NavBarApp />
      <ItemListContainer greeting="Bienvenidos a Makers m 3D" />
    </div>
  );
}

export default App;
