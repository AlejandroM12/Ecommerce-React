import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import '../styles/Global.scss'
import ItemListContainer from '../containers/ItemListContainer';
import Cart from '../components/Cart';



const App = () => {
  return (
      <BrowserRouter>
            <Layout>
                
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/categoria/:categoriaId' element={<Home/>} />
                    <Route path='/' element={<ItemListContainer/>} />
                    <Route path='/categoria/:categoriaId' element={<ItemListContainer/>} />
                    <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/*" element={<Navigate to='/' replace/> } />
                </Routes>
            </Layout>
      </BrowserRouter>
  )
};

export default App;
