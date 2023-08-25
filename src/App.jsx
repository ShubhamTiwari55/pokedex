import './App.css'
import Pokedex from './components/pokedex/pokedex'
import PokemonList from './components/pokemonList/PokemonList'
import Search from './components/search/Search'

function App() {
  return (
  <> <div className='pokedex-wrapper'>
    <Pokedex/>
    <Search/>
    <PokemonList/>
  </div>
  </> 
  )
}

export default App