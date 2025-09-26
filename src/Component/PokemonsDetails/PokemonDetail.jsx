
function PokemonDetail({name, image, id, ability, moves}) {
  return (
    <div className="pokemon-wrap">
        <div className="poke-name-id">
          <div id="poke-id">{id}</div>
          <div id="poke-name">{name}</div>
        </div>
        <div><img src={image} alt={name} /></div>
        <div className="ability-move">
          <p>Ability : <span>{ability}</span></p>
          <p>Moves : <span>{moves}</span></p>
        </div>
    </div>
  )
}

export default PokemonDetail