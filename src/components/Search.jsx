import axios from "axios";
import { useState } from "react";


const Search = ({setSearch, modal}) => {

    const [text, setText] = useState('')
    
    const onSubmit = e => {
        e.preventDefault();
      }

    const searchf = () => {
        axios
            .get(`https://rickandmortyapi.com/api/location/${text}`)
            .then(resp => setSearch(resp.data))
            .catch(modal)
            setText('')
    }

        return (
           <><form onSubmit={onSubmit}>
                <div className="search__container">
                    <input onChange={e => {
                        setText(e.target.value)
                        }}
                        placeholder="Buscar ubicación por ID"
                        className="input"
                        type="text"
                        value= {text}
                    />  
                    
                    <button 
                        type="submit"
                        onClick={searchf}
                        className="btn__search">
                        Search  
                    </button>
                </div>            
          </form>
        
        </>
        )
     
}

export default Search;
