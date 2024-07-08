'use client';
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  console.log('rendering ')
  return (
    <div className="join">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`join-item btn ${currentPage === index + 1 ? 'btn-active' : ''}`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
    )
};


export default Pagination;