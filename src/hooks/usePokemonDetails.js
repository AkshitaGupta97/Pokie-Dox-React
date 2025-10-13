import axios from "axios";
import { useEffect, useState } from "react";
import downloadPokemons from "./downloadPokemons";

function usePokemonDetails(id, pokemonName) {
    const [pokemon, setPokemon] = useState({});

    const [pokemonListState, setPokemonListState] = useState({
        pokemonList : [],
        isLoading : true,
        pokedex_Url : 'https://pokeapi.co/api/v2/pokemon',
        nextUrl : '',
        prevUrl : ''
    })

    async function downloadDetailsPoke() {
        try {
            let response;
            if (pokemonName) {
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            }
            else {
                response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            }

            const pokemonofSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ''}`)

         //   console.log(response)

            const resPokemon = response.data;

          //  console.log('res -> ',resPokemon);
          //  console.log("new api of types", pokemonofSameTypes);

            setPokemon({
                name: resPokemon.name,
                image: resPokemon.sprites.other.dream_world.front_default,
                moves: resPokemon.moves[0].move.name,
                ability: resPokemon.abilities[0].ability.name,
                weight: resPokemon.weight,
                height: resPokemon.height,
                types: resPokemon.types.map((t) => t.type.name),
                similarPokemons: pokemonofSameTypes.data.pokemon
            })

           // console.log('use pokemons id  -> ',pokemon);
           // console.log("types of poke", resPokemon.types);

            setPokemonListState({ ...pokemonListState, type: resPokemon.types?.resPokemonponse })
        }

        catch(error) {
            console.log("Something went wrong", error)
        }
    }

    async function downloadPokemonAndRelated(id){
        await downloadDetailsPoke()
        await downloadPokemons(pokemonListState, setPokemonListState);
    }

   // console.log("Pokemon details : ", pokemon);

    //const [pokemonListState, setPokemonListState] = useState({});

    useEffect(() => {
        downloadPokemonAndRelated(id)
    }, [id, pokemonName])

    return [pokemon, pokemonListState]
}

export default usePokemonDetails