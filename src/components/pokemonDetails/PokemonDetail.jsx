import { useEffect } from 'react';
import './PokemonDetail.css'

function PokemonDetail(){

    function downloadPokemon(){
        
    }

    useEffect(()=>{
        downloadPokemon();
    },[])
    return(
        <>
        <h1>Pokemon details</h1>
        </>
    )
}
export default PokemonDetail;