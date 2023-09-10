import './PokemonList.css'
import Pokemon from '../pokemon/Pokemon';
import usePokemonList from '../../hooks/usePokemonList';

function PokemonList(){
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon"
    const [pokemonListState, setPokemonListState] = usePokemonList(DEFAULT_URL);
    return (
       <div className='pokemon-list-wrapper'>
        <div className='heading'>Pokemon List</div>
        <div className='page-controls'>
            <button onClick={()=>setPokemonListState({...pokemonListState, pokedexurl: pokemonListState.prevUrl})}>Prev</button>
            <button onClick={()=>setPokemonListState({...pokemonListState, pokedexurl: pokemonListState.nexturl})}>Next</button>
        </div>
        <div className='pokemon-list'>
        {pokemonListState.pokemonList.map(pokemon=><Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.Image}/>)}
        </div>
       </div>
    )
}
export default PokemonList;
