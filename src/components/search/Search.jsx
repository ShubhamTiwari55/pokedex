import useDebounce from '../../hooks/useDebounce'
import './Search.css'

function Search({updateSearchTerm}){
    const debounceUpdateSearch = useDebounce((e)=>updateSearchTerm(e.target.value));
    return (
        <input 
        id='search-input'
        type="text" 
        placeholder='choose the pokemon' 
        onChange={debounceUpdateSearch}
        />
    )
}

export default Search