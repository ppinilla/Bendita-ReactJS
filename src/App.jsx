import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Cart from "./components/Cart"
import CartProvider from "./context/CartContext"


const App = () => {

  return (
    <BrowserRouter>

      <CartProvider>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting={"Bienvenido a Bendita"} />} />
          <Route exact path='/category/:id' element={<ItemListContainer />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>
      </CartProvider>

    </BrowserRouter>



  )
}

export default App
