import axios from "axios";
import { useState, useEffect, useRef } from "react";


const Search = ({setSearch, modal, load}) => {

    const [text, setText] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const wrapperRef = useRef(null)

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        }
      }, [])

    const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSuggestions([]);
        }
    }
    
    const onSubmit = e => {
        e.preventDefault();
    }
    

    const handleInputChange = async (event) => {
        setText(event.target.value)
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/location/?name=${text}`)
            const results = response.data.results.map((location) => location.name)
            setSuggestions(results)
            } 
            catch(modal) { modal}      
        }

     const handleSuggestionClick = (suggestion) => {
            setText(suggestion)
            setSuggestions([])
          }
    
    const searchf = () => {
        load(true)
        axios
        .get(`https://rickandmortyapi.com/api/location/?name=${text}`)
        .then(resp => {
            load(true)
            setSearch(resp.data.results[0])
            load(false)    
            })
        .catch(modal,
            load(false)
            )
        setText('')   
    }


        return (
           <form onSubmit={onSubmit}>
                <div className="search__container" ref={wrapperRef}>
                    <input 
                        onChange={handleInputChange}
                        placeholder="Buscar"
                        className="input"
                        type="text"
                        value= {text}
                    />  

                    {suggestions.length > 0 && (
                        <ul className="list_ubication">
                            {suggestions.map((suggestion) => (
                            <li key={suggestion}  
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                   {suggestion} 
                            </li>
                            ))}
                        </ul>
                        )}
                                        
                    <button type="submit" onClick={searchf}className="btn__search">
                        Search  
                    </button>
                </div>            
          </form>
        
        )
     
}

export default Search;
