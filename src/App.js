import Topbar from "./topbar/Topbar";
import Header from "./header/Header";
import ItemListContainer from "./itemList/itemListContainer";


const App = () => {
  return <div>
    <Topbar/>
    <Header/>
    <ItemListContainer name="Axel"/>
    <ItemListContainer name="Alejandro"/>
    <ItemListContainer name="Morel"/>
  </div>
};

export default App;
