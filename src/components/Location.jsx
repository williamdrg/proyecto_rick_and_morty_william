
const Location = ({ data }) => {

    return (
        <ul className="location_cont">
          <li>Nombre: <br/> {data.name}</li>
          <li>Tipo: <br/> {data.type}</li>
          <li>Dimensión: <br/> {data.dimension}</li>
          <li>Poblacion: <br/>{data.residents?.length}</li>
        </ul>
    );
};
    
export default Location;
    