import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import './App.css';

const App = () => {

  const[items, setItems] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const[query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      //console.log(result.data);
      // set this result data to the items state
      // so we do that with setItems 
      setItems(result.data);
      // we also wanna make sure we set loading to false
      // because we've got the data it's loaded
      setIsLoading(false);
    }
    fetchItems();
  }, [query]);

  return(
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
