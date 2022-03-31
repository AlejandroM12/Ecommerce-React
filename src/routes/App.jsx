import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import ItemDetailContainer from '../containers/ItemDetailContainer';
import '../styles/Global.scss'



const App = () => {
  return (
      <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/categoria/:categoriaId' element={<Home/>} />
                    <Route path='/producto/:detalleId' element={<ItemDetailContainer/>} />
                </Routes>
            </Layout>
      </BrowserRouter>
  )
};

export default App;
