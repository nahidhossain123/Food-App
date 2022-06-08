import React from 'react'

const PreviousSearches = () => {
    const searches = ['pizza','burger','cookies','juice','briyani','salad','ice cream','lasagna','pudding','soup'];
  return (
    <div className='preivous-searches section'>
      <h2>Previous Searches</h2>
      <div className='previous-searches-container'>
        {searches.map((searches,index )=> (
          <div className='search-item' key={index} style={{animationDelay: index*0.2 + 's'}}>{searches}</div>
        ))}
      </div>
      <div className='search-box'>
          <input type="text" placeholder="Search ..." />
          <button className='btn'><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
  )
}

export default PreviousSearches