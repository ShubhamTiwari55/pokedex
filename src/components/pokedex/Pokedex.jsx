import './Pokedex.css'
import Search from '../search/Search'
import PokemonList from '../pokemonList/PokemonList'
import { useState } from 'react'
import PokemonDetail from '../pokemonDetails/PokemonDetail';

function Pokedex(){

    const [searchTerm, setSearchterm] = useState('');

    return(
        <div className='pokedex-wrapper'>
            <h1>Pokedex</h1>
            <Search updateSearchTerm={setSearchterm}/>
            {searchTerm?<PokemonDetail pokemonName={searchTerm}/>:<PokemonList/>}
            </div>
    ) 
}
export default Pokedex;