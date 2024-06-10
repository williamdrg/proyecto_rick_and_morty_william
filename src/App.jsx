import './App.css'
import { useState, useEffect } from 'react'
import Search from "./components/Search"
import ResidentInfo from "./components/ResidentInfo"
import Location from './components/Location'
import Loader from './components/Loader'
import useFetch from './hooks/useFetch'
import Modal from './components/Modal';
import usePagination from './hooks/usePagination';
import Pagination from './components/Pagination'

function App() {
  const [modal, setModal] = useState(false)
  const [errorMessage, setErrorMessage] = useState("");
  const [pageNumber, setPageNumber] = useState(1)
  const [searchResults, setSearchResults] = useState({});
  const [characters, getCharacters, loading, setLoading, error ] = useFetch()

  
  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${Math.floor(Math.random()*126)+1}`
    getCharacters(url, handleError)

  }, [])

  const itemsPerPage = 10;
  const [ paginatedData, totalPages ] = usePagination(searchResults.residents || characters.residents, pageNumber, itemsPerPage);

  const charactersToShow = searchResults.residents ? searchResults : characters;

  const handleError = (message) => {
    setErrorMessage(message);
    setModal(true);
  };

  return (
    <div className="App">
      {loading && <Loader/>}

      <div className='background_img'>
        <img src="/fondo/Frame 432.png" alt="background image"/>
        <img src="/fondo/Rick y Morty2.png" alt="background image"/>
      </div>
    
      <div className='container_logo'>
        <img src="/logo.svg" alt="logo image"/>
        <Search 
          setSearch={setSearchResults} 
          modal={() => handleError("Por favor ingrese un nombre de ubicación válido")}
          load = {setLoading} 
        />
      </div>

      <Location data = {charactersToShow}/> 

    <div className="cardContainer">
        {paginatedData?.map((residentUrl) => (
          <ResidentInfo key={residentUrl} url={residentUrl} />
        ))}
      </div>

      <Modal 
        isOpen={modal} 
        onClose={() => setModal(!modal)} 
        message={errorMessage}
        imageSrc="/logomodal.svg"
      />

      <Pagination 
        currentPage={pageNumber} 
        totalPages={totalPages} 
        onPageChange={setPageNumber} 
      />
    </div>
  )
}

export default App
