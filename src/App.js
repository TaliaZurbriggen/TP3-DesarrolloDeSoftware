import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import ProductDetail from './components/Productdetail';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <ProductList/>
    </div>
  );
}

export default App;
