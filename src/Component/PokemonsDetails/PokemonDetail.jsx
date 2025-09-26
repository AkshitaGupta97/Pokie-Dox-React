
function PokemonDetail({name, image, id}) {
  return (
    <div className="pokemon-wrap">
        <div className="poke-name-id">
          <div id="poke-id">{id}</div>
          <div id="poke-name">{name}</div>
        </div>
        <div><img src={image} alt={name} /></div>
    </div>
  )
}

export default PokemonDetail