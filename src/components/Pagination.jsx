const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button 
        disabled={currentPage === 1} 
        onClick={() => onPageChange(currentPage - 1)} 
        className="paginationItems"
      >
        Anterior
      </button>
      <span className="pagItems"> Página {currentPage} de {totalPages}</span>
      <button 
        disabled={currentPage === totalPages} 
        onClick={() => onPageChange(currentPage + 1)} 
        className="paginationItems"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;