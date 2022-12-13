import '../styles/App.scss';
import { useEffect, useState } from 'react';
import logo from '../images/logo_compr.png';
import callToApi from '../service/Api.js'
import CharacterList from './CharacterList.js';
import FiltersName from './FiltersName.js';
import Filters from './Filters';




function App() {
  // VARIABLES ESTADO
  const [charactersData, setCharactersData] = useState([]);
  const [filtersName, setFiltersName] = useState('');

  // USEEFFECT 
  useEffect(() => {
    callToApi().then((cleanChar) => {
      setCharactersData(cleanChar);
    });
  }, []);


  // FUNCIONES HANDLER
  const handleFilter = (value) => {
    setFiltersName(value);
  };

  // FUNCIONES Y VARIABLES QUE AYUDEN A RENDERIZAR HTML

  const filteredNames = charactersData.filter((filter) => filter.name.toLocaleLowerCase().includes(filtersName.toLowerCase()));

  // HTML EN EL RETURN

  return (
    <div className="App">
      <header> <img src={logo} alt="Rick and Morty" /></header>
      <main>
        <Filters handleFilter={handleFilter} filtersName={filtersName} />
        <CharacterList charactersData={filteredNames}  ></CharacterList>

      </main>

      {/* Aquí va tu código HTML. */}
    </div>
  );
}

export default App;
