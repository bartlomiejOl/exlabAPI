import React from 'react'
import './Pagination.css'

const Pagination = ({allBeers,howManyBeers,setCurrentPage,currentPage}) => {
  let numberOfPages = [];

  for( let i=1; i <= Math.ceil(allBeers/howManyBeers); i++){
    numberOfPages.push(i)
  }

  return (
    <div className='paginationBeers'>
      {
        numberOfPages.map((page, index) => {
          return <button
          key={index}
          className={page == currentPage ? 'active' : ''}
          onClick={()=>setCurrentPage(page)}>{page}</button>
        })
      }
      </div>
  )
}

export default Pagination