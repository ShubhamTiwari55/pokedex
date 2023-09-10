import './PokemonDetail.css'
import { Link, useParams } from 'react-router-dom';
//custom hook
import usePokemon from '../../hooks/usePokemon';
function PokemonDetail(){
    const { id } = useParams();
    const [pokemon, pokemonListState] = usePokemon(id);
    return(
        <>
        <h1 className="pokedex-redirect"><Link to="/">Pokedex</Link></h1>
        {pokemon && <div className='pokemon-details-wrapper'>
        <div>
        {pokemon.name}
        </div>
        <div>
        <img src= {pokemon.image} />
        </div>
        <div>
        height: {pokemon.height}
        weight: {pokemon.weight}
        </div>
        <div>
        Type: {pokemon.types.map(t=> <span key={t.type.name}>{t.type.name}</span>)}
        </div>
        </div>}
        <div>
        <h2>Similar pokemons</h2>
        <div className="pokemon-similar-boxes">
            {pokemonListState.pokemonList.length>0 && 
            pokemonListState.pokemonList.map((pokemon)=><div key={pokemon.id}>{pokemon.name}</div>)
                }
        </div>
        </div>
        </>
    )
}
export default PokemonDetail;