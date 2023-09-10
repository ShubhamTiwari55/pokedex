import './Search.css'

function Search({updateSearchTerm}){
    return (
        <input 
        id='search-input'
        type="text" 
        placeholder='choose the pokemon' 
        onChange={(e)=>updateSearchTerm(e.target.value)}
        />
    )
}

export default Search