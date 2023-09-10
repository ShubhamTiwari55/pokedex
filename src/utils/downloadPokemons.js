import axios from "axios";

async function downloadPokemons(pokemonListState, setPokemonListState, defaultUrl, limit=20){
    const response = await axios.get(pokemonListState.pokedexurl ? pokemonListState.pokedexurl : defaultUrl);
    
    //renders only initial 20 pokemons on 
    let pokemonResult = (await response).data.results ? (await response).data.results:response.data.pokemon;       //array of pokemons
    pokemonResult = pokemonResult.slice(0, limit);
    // setNextUrl(response.data.next);
    // setPrevUrl(response.data.previous);
    setPokemonListState((state) => ({...state, nexturl: response.data.next, prevUrl: response.data.previous}))
    
    const pokemonPromise = pokemonResult.map((p)=>{
       if(p.url){
       return axios.get(p.url)
       }else if(p.pokemon.url){
        return axios.get(p.pokemon.url);
       }
        });
    
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

export default downloadPokemons;