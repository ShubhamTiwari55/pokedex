import axios from 'axios';
import './PokemonList.css'
import { useEffect, useState } from 'react'
import Pokemon from '../pokemon/Pokemon';

function PokemonList(){
 
    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon"
    const [pokemonList, setPokemonList] = useState([]);
    const [pokedexUrl, setPokedexUrl] = useState(DEFAULT_URL);
    const [nextUrl, setNextUrl] = useState(DEFAULT_URL);
    const [PrevUrl, setPrevUrl] = useState(DEFAULT_URL);

    async function downloadPokemon(){
        const response = await axios.get(pokedexUrl ? pokedexUrl : DEFAULT_URL);
        
        const pokemonResult = (await response).data.results;       //array of pokemons
        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
        
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
        setPokemonList(finalListData);


    }

    useEffect(()=>{
        downloadPokemon();
    },[pokedexUrl]);
    return (
       <div className='pokemon-list-wrapper'>
        <div className='heading'>Pokemon List</div>
        <div className='page-controls'>
            <button onClick={()=>setPokedexUrl(PrevUrl)}>Prev</button>
            <button onClick={()=>setPokedexUrl(nextUrl)}>Next</button>
        </div>
        <div className='pokemon-list'>
        {pokemonList.map(pokemon=><Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.Image}/>)}
        </div>
       </div>
    )
}
export default PokemonList;
