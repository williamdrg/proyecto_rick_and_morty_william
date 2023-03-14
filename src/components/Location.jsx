import axios from "axios";
import { useEffect, useState } from "react";

const Location = ({data}) => {

    
    // const [info, setInfo] = useState([])

    // useEffect(()=>{
    //     axios
    //         .get('https://rickandmortyapi.com/api/location?page=1')
    //         .then(resp => setInfo(resp.data.results))
    //         .catch(err => console.error(err))

    // },[])



    return (

        <div className="location_cont">

                <li>Nombre: <br/> {data.name}</li>
                <li>Tipo: <br/> {data.type}</li>
                <li>Dimensión: <br/> {data.dimension}</li>
                <li>Poblacion: <br/>{data.residents?.length}</li>
            
        </div> 

        // <div>
        //     {info.map(inf => (
        //     <div key={inf.id}>
        //         <li>Nombre: {inf.name}</li>
        //         <li>Tipo: {inf.type}</li>
        //         <li>Dimensión: {inf.dimension}</li>
        //         <li>Poblacion: {inf.residents?.length}</li>
        //     </div>
        //     ))}
        // </div>
    );
};
    
    export default Location;
    
    
        // <div>
        //     <ul>
        //         <li>Nombre: {info.name}</li>
        //         <li>Tipo: {info.type}</li>
        //         <li>Dimensión: {info.dimension}</li>
        //         <li>Poblacion: {info.residents?.length}</li>
        //     </ul>
            
        // </div> 