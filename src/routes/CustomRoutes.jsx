
import{Routes, Route} from 'react-router-dom'
import Pokedex from '../Component/Pokedex/Pokedex'
import PokePageDetail from '../Component/PokePageDetails/PokePageDetail'


function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Pokedex />} />
        <Route path='/pokemon/:id' element={<PokePageDetail />}  />
    </Routes>
  )
}

export default CustomRoutes