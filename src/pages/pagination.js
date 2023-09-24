import React from 'react'
const Pagination = ({ totalTasks, postPerPage, setPage , currentPage}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalTasks/postPerPage) ; i++){
        pages.push(i);
    }
  return (
    <div className='flex items-center justify-between gap-4'>
        
        
        {pages && pages.map((page , index) => (
            <button 
            key={index} 
            onClick={() => setPage(page)}
            className={`w-8 py-1 rounded-md ${page === currentPage ? 'bg-white text-black' : 'bg-black text-white'}`}
            >{page}
            </button>
        ))}
      
    </div>
  )
}

export default Pagination;