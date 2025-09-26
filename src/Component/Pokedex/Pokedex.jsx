
import Search from '../Search/Search'
import PokimonList from '../PokiemonList/PokimonList'

function Pokedex() {
  return (
    <div className='pokedex-wrapper'>
        <h1 className='pokie-heading'>Pokedex</h1>
        <Search />
        <PokimonList />
    </div>
  )
}

export default Pokedex