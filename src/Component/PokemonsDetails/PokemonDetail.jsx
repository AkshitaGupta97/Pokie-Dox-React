
function PokemonDetail({name, image, id}) {
  return (
    <div className="pokemon-wrap">
        <div>{id}</div>
        <div>{name}</div>
        <div><img src={image} alt={name} /></div>
    </div>
  )
}

export default PokemonDetail