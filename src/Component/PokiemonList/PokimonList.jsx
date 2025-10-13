
import PokemonDetail from '../PokemonsDetails/PokemonDetail';
import usePokemonList from '../../hooks/usePokemonList';

function PokimonList() {

    const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon'

    const {pokemonListState, setPokemonListState} = usePokemonList(POKEMON_URL);
 
  return (
    <div className="pokemon-list-wrapper">
        <h2>Pokemon List...</h2>
        <div className='pokemon-lists'>
            {
                (pokemonListState.isLoading) ? <p id='loading'>Loading...</p> : 
                pokemonListState.pokemonList.map((poke) => 
                    <PokemonDetail key={poke.id} name={poke.name} image={poke.image} id={poke.id} />
                )
            }
        </div>

        <div className='prev-next-btn'>       
            <button disabled={pokemonListState.prevUrl===null}
             onClick={() => {
                const urlToSet =  pokemonListState.prevUrl;
                setPokemonListState({...pokemonListState, 
                    pokedex_Url : urlToSet})
                }}
                className='prev-btn'>
                Prev.. 
            </button>

            <button disabled={pokemonListState.nextUrl===null}
            onClick={() => { 
                const urlToSet = pokemonListState.nextUrl;
                setPokemonListState({...pokemonListState, pokedex_Url : urlToSet})
            }}
             className='next-btn'>
                Next.. 
            </button>
        </div>
    </div>
  )
}
//  onClick={() => setPokedex_url(prevUrl)}
//   onClick={() => setPokedex_url(nextUrl)}
export default PokimonList