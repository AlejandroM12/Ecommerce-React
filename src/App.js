import Topbar from "./components/Topbar";
import Header from "./components/Header";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";


const App = () => {
  return <div>
    <>
    <Topbar/>
    <Header/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    </>
  </div>
};

export default App;
