
import { useEffect, useState } from "react";
import downloadPokemons from "./downloadPokemons";

function usePokemonList() {
   /*  const [pokemonList, setPokemonlist] = useState();
    const [isLoading, setLoading] = useState(true)
    const [nextUrl, setNext] = useState('')
    const [prevUrl, setPrev] = useState('')
    */
   // to control too many states = we create onnly one states and add them in object
   const [pokemonListState, setPokemonListState] = useState({
        pokemonList : [],
        isLoading : true,
        pokedex_Url : 'https://pokeapi.co/api/v2/pokemon',
        nextUrl : '',
        prevUrl : ''
   })

   // const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';
    // for fetching data we are using useState because we want to fetch next and previous data
  // const [Pokedex_url, setPokedex_url] = useState('https://pokeapi.co/api/v2/pokemon')
    
    useEffect( () => {
        downloadPokemons(pokemonListState, setPokemonListState);
    }, [pokemonListState.pokedex_Url])

    return{
        pokemonListState,
        setPokemonListState
    }
}

export default usePokemonList