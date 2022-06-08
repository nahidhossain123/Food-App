import React from 'react'
import CustomImage from './CustomImage'

const HeroSection = () => {
    const image = [
        '/img/gallery/img_1.jpg',
        '/img/gallery/img_2.jpg',
        '/img/gallery/img_3.jpg',
        '/img/gallery/img_4.jpg',
        '/img/gallery/img_5.jpg',
        '/img/gallery/img_6.jpg',
        '/img/gallery/img_7.jpg',
        '/img/gallery/img_8.jpg',
        '/img/gallery/img_9.jpg',
    ]
  return (
    <div className='section hero'>
        <div className='col'>
            <h1 className='title'>What Are We About</h1>
            <p className='info'>FoodiesHub is a place where you can please your soul and tummy with delicious food recepeis with all cuisine. And our service is absolutely free. So Start exploring now.</p>
            <button className='btn'>Exploing Now</button>
        </div>
        <div className='col gallery'> 
            {image.map((src,index)=>(
                <CustomImage imgSrc={src} key={index} pt={"85%"} />
            ))}
 
        </div>
    </div>
  )
}

export default HeroSection