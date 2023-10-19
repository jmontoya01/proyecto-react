import NavBar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bien venido a Makers m 3D" />
    </div>
  );
}

export default App;
