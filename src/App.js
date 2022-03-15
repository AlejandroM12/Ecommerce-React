
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import NavBar from './layouts/navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About />}/>
            <Route path='contact' element={<Contact />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
