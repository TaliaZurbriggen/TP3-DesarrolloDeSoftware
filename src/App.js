import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <ProductList/>
    </div>
  );
}

export default App;
