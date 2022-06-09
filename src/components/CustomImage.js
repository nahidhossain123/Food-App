import React from 'react'

const CustomImage = ({imgSrc,key,pt}) => {
  return (
    <div className='custom-image'   style={{paddingTop: pt}}>
        <img src={imgSrc} alt="customimage" />
    </div>
  )
}

export default CustomImage