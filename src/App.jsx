import './App.css'
import Pokedex from './components/pokedex/Pokedex'
import { Route, Routes } from 'react-router-dom'
import PokemonDetail from './components/pokemonDetails/PokemonDetail'

function App() {
  return (
    <Routes>
        <Route path="/" element={<Pokedex />}/>
        <Route path="/pokemon/:id" element={<PokemonDetail />}/>
        <Route path="*" element={<h1>Not Found!</h1>}/>
    </Routes>
  )
}

export default App