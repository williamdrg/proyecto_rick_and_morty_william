import axios from "axios"
import { useState } from "react"

const useFetch = () => {

  const [fetchedData, setFetchedData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);

  const getApi = async (url, handleError) => {
    setLoading(true)
    setError(null);
    try {
      const response = await axios.get(url)
      setFetchedData(response.data)
    } catch (error) {
      console.error("Error en la obtención de datos: ", error)
      setError('No se pudo realzar la petición');
      if (handleError) handleError('Hubo un problema al obtener los datos. Por favor, intenta de nuevo más tarde.');
    } finally {
      setTimeout(() => {
        setLoading(false)
      },500);
    }
  }

  return [ fetchedData, getApi, loading, setLoading, error ]
}

export default useFetch