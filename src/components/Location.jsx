import axios from "axios";
import { useEffect, useState } from "react";

const Location = ({data}) => {

    return (

        <div className="location_cont">

                <li>Nombre: <br/> {data.name}</li>
                <li>Tipo: <br/> {data.type}</li>
                <li>Dimensión: <br/> {data.dimension}</li>
                <li>Poblacion: <br/>{data.residents?.length}</li>
            
        </div> 

    );
};
    
    export default Location;
    