import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/?q=${query}`);
  };  

  return (
    <form onSubmit={handleSearch}>
      <input
        className='input-SearchBar'
        type="text"
        placeholder="Buscar productos"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button 
      className='button-SearchBar'
      type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
