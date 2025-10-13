
import { useParams } from "react-router-dom"
import usePokemonDetails from "../../hooks/usePokemonDetails";
import SimilarPokemon from "../SimilarPokemon/SimilarPokemon";
import { useEffect } from "react";


function PokePageDetail({pokemonName}) {
    const {id} = useParams();
    const [pokemon] = usePokemonDetails(id, pokemonName);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])
    
    // Extract similar Pokemon Ids
    // Extract ID from URL, e.g. https://pokeapi.co/api/v2/pokemon/25/   parts[parts.length - 2] = 25
    const similarIds = pokemon.similarPokemons
    ? pokemon.similarPokemons.slice(0, 24).map((p) =>
        p.pokemon.id || Number(p.pokemon.url.split("/").filter(Boolean).pop())
      )
    : [];
      
   // console.log('similar ids of apge',similarIds);

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
            pokemon.types && similarIds.length > 0 && 
            <div className="pokemon-more-details">
                <p>More {pokemon.types[0]} type pokemons</p>  

                <div className="pokemon-more-items">
                    {
                        similarIds.map(id => (
                            <SimilarPokemon id={id} key={id} />
                        ))
                    }
                    
                </div>

            </div>
        }

    </div>
  )
}

export default PokePageDetail
