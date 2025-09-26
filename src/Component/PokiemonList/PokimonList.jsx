import axios from 'axios'
import { useEffect, useState } from 'react'
import PokemonDetail from '../PokemonsDetails/PokemonDetail';

function PokimonList() {

    const [pokemonList, setPokemonlist] = useState();
    const [isLoading, setLoading] = useState(true)

    const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';
    async function downloadPokemons() {
        try {
            const response = await axios.get(POKEMON_URL); // this downloads list of 20 pokemons
            const pokemonResult = response.data.results;  // we get array of pokemon
            console.log(response.data)
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
    }, [])

  return (
    <div className="pokemon-list-wrapper">
        <h2>Pokemon List...</h2>
        <div className='pokemon-lists'>
            {
                (isLoading) ? 'Loading...' : 
                pokemonList.map((poke) => 
                    <PokemonDetail name={poke.name} image={poke.image} id={poke.id} />
                )
            }
        </div>
        <div className='prev-next-btn'>
            <button className='prev-btn'>Prev..</button>
            <button className='next-btn'>Next..</button>
        </div>
    </div>
  )
}

export default PokimonList