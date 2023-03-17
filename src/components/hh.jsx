import axios from "axios";
import { useState } from "react";


const Search = ({setSearch, modal, load, load2}) => {

    const [text, setText] = useState('')
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([])

    
    const onSubmit = e => {
        e.preventDefault();
      }

    const handleInputChange = async (event) => {
        const value = event.target.value;
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/location/?name=${value}`)
            const results = response.data.results.map((location) => location.name)
            setSuggestions(results)
            } catch(modal) {
                console.log(error)
            }

             
        }

     const handleSuggestionClick = (suggestion) => {
            // axios.then(resp => setSearch(resp.data.results[0]))
            // setInputValue(suggestion)
            setText(suggestion)
          }
          
        //  const searchf = () => {
        //     axios.then(resp => setSearch(resp.data.results[0]))
                                
        //  }

    const searchf = () => {
        load(true)
        axios
        .get(`https://rickandmortyapi.com/api/location/?name=${text}`)
        .then(resp => {
            setSearch(resp.data.results[0])
                load(false)
            })
        .catch(modal,
            load(false))
        setText('')   
    }

    // const searchf = () => {
    //         load(true)
    //         axios
    //         .get(`https://rickandmortyapi.com/api/location/?name=${text}`)
    //         .then(resp => {
    //             setSearch(resp.data.results[0])
    //                 load(false)
    //             })
    //         .catch(modal,
    //             load(false))
    //         setText('')   
    // }

        return (
           <><form onSubmit={onSubmit}>
                <div className="search__container">
                    <input 
                        onChange={handleInputChange}
                    // onChange={e => {
                    //     setText(e.target.value)
                    //     }}
                        placeholder="Buscar ubicación por ID"
                        className="input"
                        type="text"
                        // value={inputValue}
                        value= {text}
                    />  

                    {suggestions.length > 0 && (
                        <ul>
                            {suggestions.map((suggestion) => (
                            <li key={suggestion}  
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion} 
                            </li>
                            ))}
                        </ul>
                        )}
                                        
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
