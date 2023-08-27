import './Pokedex.css'
import Search from '../search/Search.jsx'
import PokemonList from '../pokemonList/PokemonList.jsx'

function Pokedex(){

    return(
        <div className='pokedex-wrapper'>
            <h1>Pokedex</h1>
            <Search/>
            <PokemonList/>
        </div>
    ) 
}
export default Pokedex;