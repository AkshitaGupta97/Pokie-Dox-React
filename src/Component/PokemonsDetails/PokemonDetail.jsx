
function PokemonDetail({name, image, id}) {
  return (
    <div>
        <div>{id}</div>
        <div>{name}</div>
        <div><img src={image} alt={name} /></div>
    </div>
  )
}

export default PokemonDetail