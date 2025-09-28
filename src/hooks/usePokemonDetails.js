import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonList from "./usePokemonList";


function usePokemonDetails(id, pokemonName) {
    const [pokemon, setPokemon] = useState({});

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

            console.log(response)
            const res = response.data;
            console.log(res);
            console.log("new api of types", pokemonofSameTypes);

            setPokemon({
                name: res.name,
                image: res.sprites.other.dream_world.front_default,
                moves: res.moves[0].move.name,
                ability: res.abilities[0].ability.name,
                weight: res.weight,
                height: res.height,
                types: res.types.map((t) => t.type.name),
                similarPokemons: pokemonofSameTypes.data.pokemon
            })
            console.log(pokemon);
            console.log("types of poke", res.types);

            setPokemonListState({ ...pokemonListState, type: res.types?.response })
        }
        catch(error) {
            console.log("Something went wrong", error)
        }

    }

    const [pokemonListState, setPokemonListState] = usePokemonList();

    useEffect(() => {
        downloadDetailsPoke()
    }, [])

    return [pokemon]
}

export default usePokemonDetails