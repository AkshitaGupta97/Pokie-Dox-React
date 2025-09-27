
import Search from '../Search/Search'
import PokimonList from '../PokiemonList/PokimonList'

function Pokedex() {
  return (
    <div className='pokedex-wrapper'>
        <Search />
        <PokimonList />
    </div>
  )
}

export default Pokedex