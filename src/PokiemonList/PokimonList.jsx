import axios from 'axios'
import { useEffect, useState } from 'react'

function PokimonList() {

    const [pokemonList, setPokemonlist] = useState();
    const [isLoading, setLoading] = useState(true)

    async function downloadPokemons() {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
            const pokemonResult = response.data.results;
            const pokemonResultPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url))
            const pokemonData = await axios.all(pokemonResultPromise);  // axios.all() => taske an array and works similar as promise.all(), where it waits for each results to be successful.
            console.log(pokemonData);
            setPokemonlist(pokemonData)





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
        {{isLoading} ? 'Loading...' : 'Data Downloaded...'}
    </div>
  )
}

export default PokimonList