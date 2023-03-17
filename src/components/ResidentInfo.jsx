import axios from "axios";
import { useState, useEffect } from 'react'


const ResidentInfo = ({url}) => {

    const [resident, setResident] = useState({})

    useEffect(()=>{

        axios
            .get(url)
            .then(resp => setResident(resp.data))
            .catch(err => console.log(err))
        
      },[])


      const episode = resident.episode?.length


      return (
        
            <div class="container_residentInfo">

                <span class="effect_3d"></span>
                <span class="effect_3d"></span>
                <span class="effect_3d"></span>
                <span class="effect_3d"></span>
                <span class="effect_3d"></span>
                <span class="effect_3d"></span>
                <span class="effect_3d"></span>
                <span class="effect_3d"></span>
                <span class="effect_3d"></span>

                <div class="box_residentInfo">
                <div className="cards">
                <div className="circle"><img src={resident.image} alt="image character" /></div>
                    <div className="box_1">
                        <div className="box_2">
                        <h3 className="names">{resident.name}</h3>
                        </div>
                        <div className="box_3"></div>
                        <div className="box_4">
                            <div className="box_tex">
                            <h3>Raza: <span>{resident.species}</span></h3>
                            <h3>Origen: <span>{resident.origin?.name}</span></h3>
                            <h3>Apariciones: <span>{episode > 1 ? episode + " veces": episode + " vez"}</span></h3>
                            </div>
                            {(() => {
                                if (resident.status === "Dead") {
                                    return (
                                    <div className='danger status'>
                                        {resident.status}
                                    </div>
                                    );
                                } else if (resident.status === "Alive") {
                                    return (
                                    <div className='success status'>
                                        {resident.status}
                                    </div>
                                    );
                                } else {
                                    return (
                                    <div className='secondary status'>
                                        {resident.status}
                                    </div>
                                    );
                                }
                            })()}
                            
                        </div>
                    </div> 
            </div> 
                
                </div>
            </div>

    );

 
};


export default ResidentInfo;

