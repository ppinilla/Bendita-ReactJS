import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"


const App = () => {

  return (
    <>
    <NavBar />
    {/* <ItemListContainer greeting={"Bienvenido a Bendita"}/> */}
    <ItemDetailContainer/>
    </>
  )
}

export default App
