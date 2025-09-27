
import './App.css'
//import Pokedex from './Component/Pokedex/Pokedex'
import CustomRoutes from './routes/CustomRoutes'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
     <h1 className='pokie-heading'>
     <Link className='heading' to='/'> Pokedex</Link>
      </h1>
      <CustomRoutes />
    </>
  )
}

export default App
