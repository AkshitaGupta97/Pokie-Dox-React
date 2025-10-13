
import { Link } from 'react-router-dom';
import usePokemonDetails from '../../hooks/usePokemonDetails'

function SimilarPokemon({id}) {

    const [poke] = usePokemonDetails(id);
    if(!poke || !poke.image) return null;

    console.log("poke in cards ", poke)

  return (
    <div className='pokemon-card' key={id}>
      <Link to={`/pokemon/${id}`} >
          <div className='poke-card-name'>{poke.name}</div>
          <img src={poke.image} alt={poke.name} />
      </Link>
    </div>
  )
}

export default SimilarPokemon