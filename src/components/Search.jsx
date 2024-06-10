import axios from "axios";
import { useState, useEffect, useRef } from "react";
import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";

const Search = ({ setSearch, modal, load }) => {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const wrapperRef = useRef(null);
  const debouncedText = useDebounce(text, 300);
  const [resident, getResidents] = useFetch(setSearch);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (debouncedText) {
      fetchSuggestions(debouncedText);
    } else {
      setSuggestions([]);
    }
  }, [debouncedText]);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setSuggestions([]);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchf();
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

   const fetchSuggestions = async (query) => {
    try {
      await getResidents(`https://rickandmortyapi.com/api/location/?name=${query}`);
      if (resident.results) {
        const results = resident.results.map((location) => location.name);
        setSuggestions(results);
      }
    } catch (error) {
      console.error("Error en la busqueda de sugerencias: ", error);
      modal();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setText(suggestion);
    setSuggestions([]);
  };

  const searchf = async () => {
    load(true);
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/location/?name=${text}`);
      if (response.data.results.length > 0) {
        setSearch(response.data.results[0]);
      } else {
        modal();
      }
    } catch (error) {
      console.error("Error al buscar la ubicación: ", error);
      modal();
    } finally {
      load(false);
    }
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="search__container" ref={wrapperRef}>
        <input
          onChange={handleInputChange}
          placeholder="Buscar"
          className="input"
          type="text"
          value={text}
        />
        {suggestions.length > 0 && (
          <ul className="list_ubication">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        <button type="submit" className="btn__search">
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;