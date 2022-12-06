import './App.css';
import Gallery from './Basics/Gallery/Gallery';
import ShoppingList from './Basics/Grocery/Shoplist';
import Szia from './Basics/Szia';
import Time from './Time/Time';

function App() {

  return (
    <div className="App">
      <Time />
      <Szia />
      <Gallery />
      <ShoppingList />
    </div>
  );
}

export default App;
