import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Search from "./components/Search"
import ResidentInfo from "./components/ResidentInfo"
import Pagination from "./components/Pagination"
import Location from './components/Location'
import Loader from './components/Loader'



function App() {
  const [fetchedData, SetFetchedData] = useState({})
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [pageNumber, updatePageNumber] = useState(1);
 

  const api = `https://rickandmortyapi.com/api/location/${Math.floor(Math.random()*126)+1}`
 
  
  useEffect(()=>{

    axios
        .get(api)
        .then(resp => {
          SetFetchedData(resp.data)
          setTimeout(() => {
            setLoading(false)
          },500);
          })
        .catch(err => console.log(err))
  },[])

  
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
          setSearch={SetFetchedData} 
          modal = {()=> setModal(!modal)}
          load = {setLoading} 
        />
      </div>

       

      <ul>
      <Location data = {fetchedData}/>
      </ul>

  
    <div className="cardContainer">
      {fetchedData.residents?.map(residentUrl => (
      <ResidentInfo 
      key={residentUrl} 
      url = {residentUrl}/>))}
    </div>

    <div className={modal ? "container__modal" : "close__modal"}>
      <div className="modal">
          <div className='modalImg'>
            <img src="/logomodal.svg" alt="warning image" />
          </div>
          <p>Por favor ingrese un nombre de ubicación valido</p>
          <button className='custom-btn btn-1' 
            onClick={() => setModal(!modal)}>
            Cerrar
          </button>
      </div>
    </div>


      {/* <Pagination/> */}
    </div>
  )
}

export default App
