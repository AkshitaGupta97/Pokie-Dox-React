
import Search from '../Search/Search'
import PokimonList from '../PokiemonList/PokimonList'
import { useState } from 'react'
import PokePageDetail from '../PokePageDetails/PokePageDetail';

function Pokedex() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='pokedex-wrapper'>

      <Search updateSeatchTerm={setSearchTerm} />

      {(!searchTerm) ? <PokimonList /> : <PokePageDetail key={searchTerm} pokemonName={searchTerm} />}
    </div>
  )
}

export default Pokedex

// key={searchTerm} =>  this is because i want to re-render my page based on search term, and when key changes the new data will be displayed.