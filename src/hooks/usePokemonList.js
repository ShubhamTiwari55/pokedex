import { useEffect, useState } from "react";
import downloadPokemon from "../utils/downloadPokemons";

function usePokemonList(DEFAULT_URL){

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

    useEffect(()=>{
        downloadPokemon(pokemonListState, setPokemonListState, DEFAULT_URL);
    },[pokemonListState.pokedexurl]);

    return [pokemonListState ,setPokemonListState]
}
export default usePokemonList;