import axios from 'axios'
import { useEffect, useState } from 'react'
import PokemonDetail from '../PokemonsDetails/PokemonDetail';

function PokimonList() {

    const [pokemonList, setPokemonlist] = useState();
    const [isLoading, setLoading] = useState(true)
    const [nextUrl, setNext] = useState('')
    const [prevUrl, setPrev] = useState('')

   // const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';
    // for fetching data we are using useState because we want to fetch next and previous data
   const [Pokedex_url, setPokedex_url] = useState('https://pokeapi.co/api/v2/pokemon')
    async function downloadPokemons() {
        try {
            setLoading(true)
            const response = await axios.get(Pokedex_url); // this downloads list of 20 pokemons
            const pokemonResult = response.data.results;  // we get array of pokemon
            console.log(response.data)
            // setting next and prev, url from data
            setNext(response.data.next);
            setPrev(response.data.previous);
            // iterating the array of pokemon and creating array of pokemon promise that will give array of 20 pokemon.
            const pokemonResultPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url))
            // passing that promise array to axios.all()
            const pokemonData = await axios.all(pokemonResultPromise);  // axios.all() => taske an array and works similar as promise.all(), where it waits for each results to be successful.
            console.log(pokemonData);  // pokemonData = array of 20 pokemons
            // iterate on data of each pokeman and extract some elements
            const res = pokemonData.map((pokeData) => {
                const pokemon = pokeData.data;
                return {
                    id : pokemon.id,
                    name : pokemon.name,
                    image : pokemon.sprites.other.dream_world.front_default,
                    types : pokemon.types,
                    moves : pokemon.moves[0].move.name,
                    ability : pokemon.abilities[0].ability.name
                }
            });
            console.log(res)
            setPokemonlist(res);
 
            setLoading(false)
        }catch(error){
            console.error('Error in fetching', error);
        }
    }

    useEffect( () => {
        downloadPokemons();
    }, [Pokedex_url])

  return (
    <div className="pokemon-list-wrapper">
        <h2>Pokemon List...</h2>
        <div className='pokemon-lists'>
            {
                (isLoading) ? <p id='loading'>Loading...</p> : 
                pokemonList.map((poke) => 
                    <PokemonDetail name={poke.name} image={poke.image} id={poke.id} />
                )
            }
        </div>
        <div className='prev-next-btn'>
            <button disabled={prevUrl===null}
             onClick={() => setPokedex_url(prevUrl)}
            className='prev-btn'>
                Prev..</button>
            <button disabled={nextUrl===null}
            onClick={() => setPokedex_url(nextUrl)}
             className='next-btn'>
                Next..</button>
        </div>
    </div>
  )
}

export default PokimonList