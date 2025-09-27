import {Link} from 'react-router-dom'

function PokemonDetail({ name, image, id }) {
  return (
    <div className="pokemon-wrap">
      <Link to={`/pokemon/${id}`}>
        <div className="poke-name-id">
          <div id="poke-id">{id}</div>
          <div id="poke-name">{name}</div>
        </div>
        <div><img src={image} alt={name} /></div>
      </Link>
    </div>
  )
}

export default PokemonDetail