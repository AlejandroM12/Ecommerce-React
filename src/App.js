import Topbar from "./topbar/Topbar";
import Header from "./header/Header";
import ItemListContainer from "./itemList/itemListContainer";


const App = () => {
  return <div>
    <Topbar/>
    <Header/>
    <ItemListContainer name="Nike"/>
    <ItemListContainer name="Adidas"/>
    <ItemListContainer name="Puma"/>
  </div>
};

export default App;
