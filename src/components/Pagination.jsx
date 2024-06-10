
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    } else {
      onPageChange(1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    } else {
      onPageChange(totalPages);
    }
  };

  return (
    <div className="pagination">
      <button 
        onClick={handlePreviousPage} 
        className="paginationItems"
      >
        Anterior
      </button>
      <span className="pagItems"> Página {currentPage} de {totalPages}</span>
      <button 
        onClick={handleNextPage} 
        className="paginationItems"
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;