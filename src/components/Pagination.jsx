/* import React, { useState } from 'react';


    const [pageNumber, setPageNumber] = useState(1)
const Pagination = ({fetchedData}) => {



    const itemsPerPage = 10 // muestra 20 residentes por página

    const startIndex = (pageNumber - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage;

       
    return (
         <div className="pagination">
            <button 
                disabled={pageNumber === 1} 
                onClick={() => setPageNumber(pageNumber - 1)}
            >
                Anterior
            </button>
            <span>Página {pageNumber}</span>
            <button 
                disabled={fetchedData.residents?.length <= endIndex} 
                onClick={() => setPageNumber(pageNumber + 1)}
            >
                Siguiente
            </button>
        </div> 
    );

}; 


export default Pagination;

 */