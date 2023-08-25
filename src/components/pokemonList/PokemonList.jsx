import axios from 'axios';
import './PokemonList.css'
import { useEffect, useState } from 'react'
import Pokemon from '../pokemon/Pokemon';

function PokemonList(){

    const POKEDEX_URL = "https://pokeapi.co/api/v2/pokemon";
    const [pokemonList, setPokemonList] = useState([]);

    async function downloadPokemon(){
        const response = axios.get(POKEDEX_URL);
        
        const pokemonResult = (await response).data.results;       //array of pokemons
        
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
       });
    return (
       <div className='pokemon-list-wrapper'>
        <div className='heading'>Pokemon List</div>
        <div className='page-controls'>
            <button>Prev</button>
            <button>Next</button>
        </div>
        <div className='pokemon-list'>
        {pokemonList.map(pokemon=><Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.Image}/>)}
        </div>
       </div>
    )
}
export default PokemonList
