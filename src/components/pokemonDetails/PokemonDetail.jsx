import { useEffect, useState } from 'react';
import './PokemonDetail.css'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
function PokemonDetail(){

    const { id } = useParams();
    const POKEMON_DETAIL_URL = 'https://pokeapi.co/api/v2/pokemon/';
    const [pokemon, setPokemon] = useState(null);

    async function downloadPokemon(){
        const response = await axios.get(POKEMON_DETAIL_URL + id);
        const pokemon = response.data;
        setPokemon({
            name: pokemon.name,
            height: pokemon.height,
            weight: pokemon.weight,
            types: pokemon.types,
            image: pokemon.sprites.other.dream_world.front_default
        })
    }   

    useEffect(()=>{
        downloadPokemon();
    },[]);
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
        </>
    )
}
export default PokemonDetail;