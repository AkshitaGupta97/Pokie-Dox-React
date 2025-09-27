import axios from 'axios'
import { useEffect, useState } from 'react'
import PokemonDetail from '../PokemonsDetails/PokemonDetail';

function PokimonList() {

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
    async function downloadPokemons() {
        try {
            {/* setLoading(true) */}
            setPokemonListState((state)=>({...state, isLoading: true}));
            const response = await axios.get(pokemonListState.pokedex_Url); // this downloads list of 20 pokemons
            const pokemonResult = response.data?.results;  // we get array of pokemon
            console.log(response.data)
            // setting next and prev, url from data
           {/*
             setNext(response.data.next);
            setPrev(response.data.previous);
             */}

            setPokemonListState((state) => ({
                ...state,  //...pokemonListState, 
                nextUrl : response.data.next,  
                prevUrl : response.data.previous,
            }));  // here we are creating a arrow function, as setPokemonListState is rendered multiple times, (for more :- see queuing a state searies of react.)
            
            // iterating the array of pokemon and creating array of pokemon promise that will give array of 20 pokemon.
            const pokemonResultPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url))
            // passing that promise array to axios.all()
            const pokemonData = await axios.all(pokemonResultPromise);  // axios.all() => taske an array and works similar as promise.all(), where it waits for each results to be successful.
            //console.log(pokemonData);  // pokemonData = array of 20 pokemons
            // iterate on data of each pokeman and extract some elements
            const res = pokemonData.map((pokeData) => {
                const pokemon = pokeData.data;
                return {
                    id : pokemon.id,
                    name : pokemon.name,
                    image : pokemon.sprites.other.dream_world.front_default,
                }
            });
            console.log(res);
            {/* 
                setPokemonlist(res); 
                setLoading(false)
            */}

            setPokemonListState((state) => (
                {
                    ...state,   //...pokemonListState, 
                    pokemonList : res, 
                    isLoading: false

                })
            );

            
        }catch(error){
            console.error('Error in fetching', error);
        }
    }

    useEffect( () => {
        downloadPokemons();
    }, [pokemonListState.pokedex_Url])

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