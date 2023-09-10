import axios from 'axios';
import './PokemonList.css'
import { useEffect, useState } from 'react'
import Pokemon from '../pokemon/Pokemon';

function PokemonList(){
 
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon"
    // const [pokemonList, setPokemonList] = useState([]);
    // const [pokedexUrl, setPokedexUrl] = useState(DEFAULT_URL);
    // const [nextUrl, setNextUrl] = useState(DEFAULT_URL);
    // const [PrevUrl, setPrevUrl] = useState(DEFAULT_URL);

    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        pokedexurl: DEFAULT_URL,
        nexturl: DEFAULT_URL,
        prevUrl: DEFAULT_URL
    });

    async function downloadPokemon(){
        const response = await axios.get(pokemonListState.pokedexurl ? pokemonListState.pokedexurl : DEFAULT_URL);
        
        const pokemonResult = (await response).data.results;       //array of pokemons
        // setNextUrl(response.data.next);
        // setPrevUrl(response.data.previous);
        setPokemonListState((state) => ({...state, nexturl: response.data.next, prevUrl: response.data.previous}))
        
        const pokemonPromise = pokemonResult.map((pokemon)=>axios.get(pokemon.url));
        
        const pokemonListData = await axios.all(pokemonPromise);
        const finalListData = pokemonListData.map(pokemonData =>{
            const pokemon = pokemonData.data;
            return{
                id: pokemon.id,
                name: pokemon.name,
                types: pokemon.types,
                Image: pokemon.sprites.other.dream_world.front_default,
            }
        }
        )
        setPokemonListState((state)=>({...state, pokemonList: finalListData}));


    }

    useEffect(()=>{
        downloadPokemon();
    },[pokemonListState.pokedexurl]);
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
