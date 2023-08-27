import './Pokemon.css'
import { Link } from 'react-router-dom';
function Pokemon({name, url, id}){
    return(
        <div className="pokemon">
            <Link to={`/pokemon/${id}`} className='pokemon-wrapper'>
            <div className='pokemon-name'>{name}</div>
            <div><img className='pokemon-image' src={url} alt="" /></div>
            </Link>
        </div>
    )
}
export default Pokemon;