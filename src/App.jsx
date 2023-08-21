import './App.css'
import Pokedex from './components/pokedex/pokedex'
import Search from './components/search/Search'

function App() {
  return (
  <> <div className='pokedex-wrapper'>
    <Pokedex/>
    <Search/>
  </div>
  </> 
  )
}

export default App