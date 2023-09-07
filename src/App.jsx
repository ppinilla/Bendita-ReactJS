import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"


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
