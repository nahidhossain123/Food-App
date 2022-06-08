import React from 'react'

const CheifCard = ({chief}) => {
  return (
    <div className='cheif-card'>
        <img src={chief.img} alt="" />
        <div className='cheif-card-info'>
            <h3 className='cheif-card-name'>{chief.name}</h3>
            <p className='cheif-recepie-count'>Recepies: <b>{chief.recipesCount}</b> </p>
            <p className='cheif-cuisine'>Cuisine: <b>{chief.cuisine}</b> </p>
            <p className='cheif-icons'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
            </p>
        </div>
    </div>
  )
}

export default CheifCard