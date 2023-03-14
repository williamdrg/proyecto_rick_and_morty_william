import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/1')
      .then(response => setLocations(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <li>
          <h3> Nombre: {locations.name}</h3>
          <p>Tipo: {locations.type}</p>
          <p>Dimension: {locations.dimension}</p>
          <p>Poblacion: {locations.residents.length}</p>
      </li>
    </div>
  );
}

export default App;
