import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from 'axios'

function PokePageDetail() {
    const {id} = useParams();
    const [pokemon, setPokemon] = useState({});

    async function downloadDetailsPoke(){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(response)
        const res = response.data;
        console.log(res);
        console.log(res.name);
        
        setPokemon({
            name : res.name,
            image : res.sprites.other.dream_world.front_default,
            moves : res.moves[0].move.name,
            ability : res.abilities[0].ability.name,
            weight : res.weight,
            height : res.height,
            types : res.types.map((t) =>t.type.name )
        }) 
        console.log(pokemon);
        
    }

    useEffect(() => {
        downloadDetailsPoke()
    }, [])


  return (
     <div className="pokemon-page-detail">
        <div className="pokemon-name">Name : {pokemon.name}</div>
        <div className="pokemon-image"><img src={pokemon.image} alt={pokemon.name} /></div>
        <div className="pokemon-height">Height : {pokemon.height}</div>
        <div className="pokemon-weight">Weight : {pokemon.weight}</div>
        <div className="pokemon-moves">Moves : {pokemon.moves}</div>
        <div className="pokemon-ability">Ability : {pokemon.ability}</div>
        <div className="pokemon-types"> Types : {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div> )}
        </div>
    </div>
  )
}

export default PokePageDetail



 