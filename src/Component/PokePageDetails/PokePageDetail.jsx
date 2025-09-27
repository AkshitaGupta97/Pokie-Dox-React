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
        <div className="pokie-detail pokemon-name">Name : {pokemon.name}</div>
        <div className="pokie-detail"><img src={pokemon.image} alt={pokemon.name} /></div>
        <div className="pokie-detail">Height : {pokemon.height}</div>
        <div className="pokie-detail">Weight : {pokemon.weight}</div>
        <div className="pokie-detail">Moves : {pokemon.moves}</div>
        <div className="pokie-detail">Ability : {pokemon.ability}</div>
        <div className="pokie-detail"> Types : {pokemon.types && pokemon.types.map((t) => <span key={t}>{t}</span> )}
        </div>
    </div>
  )
}

export default PokePageDetail



 