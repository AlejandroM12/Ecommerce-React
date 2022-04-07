import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import '../styles/Global.scss'
import ItemListContainer from '../containers/ItemListContainer';
import Cart from '../components/Cart';
import { CartProvider } from '../context/cartContext';



const App = () => {
  return (
      <BrowserRouter>
      <CartProvider>
            <Layout>
                <Home/>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>} />
                    <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
                    <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/*" element={<Navigate to='/' replace/> } />
                </Routes>
            </Layout>
            </CartProvider>
      </BrowserRouter>
  )
};

export default App;
