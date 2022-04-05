import Header from "./components/Layout/Header";
import "./App.css";
import ItemList from "./components/Items/ItemList";
import Slider from "./components/UI/Slider";

function App() {
  return (
    <div>
      <Header />
      <ItemList />
      <Slider />
    </div>
  );
}

export default App;
