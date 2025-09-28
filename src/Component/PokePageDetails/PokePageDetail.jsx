import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from 'axios'
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokePageDetail({pokemonName}) {
    const {id} = useParams();
    const [pokemon] = usePokemonDetails(id, pokemonName);


  return (
     <div className="pokemon-page-detail">
        <div className="pokie-detail pokemon-name">Name : {pokemon.name}</div>
        <div className="pokie-detail"><img src={pokemon.image} alt={pokemon.name} /></div>
        <div className="pokie-detail">Height : {pokemon.height}</div>
        <div className="pokie-detail">Weight : {pokemon.weight}</div>
        <div className="pokie-detail">Moves : {pokemon.moves}</div>
        <div className="pokie-detail">Ability : {pokemon.ability}</div>
        <div className="pokie-detail"> 
            Types : {pokemon.types && pokemon.types.map((t) => <span key={t}>{t}</span> )}
        </div>

        {
            pokemon.types && pokemon.similarPokemons && 
            <div>
                more {pokemon.types[0]} type pokemons  
                <ul>
                    {pokemon.similarPokemons.map((p) => 
                        <li key={p.pokemon.url}>
                            {p.pokemon.name}
                        </li>
                    )}
                </ul>
            </div>
        }


    </div>
  )
}

export default PokePageDetail
