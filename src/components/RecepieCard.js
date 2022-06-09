import React from 'react'
import CustomImage from './CustomImage'

const RecepieCard = ({recipe}) => {
  return (
    <div className='recepie-card'>
        <CustomImage imgSrc={recipe.image} pt="65%" alt="recipeimage"/>
        <div className='recepie-card-info'>
          <img className='auther-img' src={recipe.authorImg} alt="authorImage" />
          <p className='recepie-title'>{recipe.title}</p>
          <p className='recipe-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <a className='view-btn' href='#!'>VIEW RECIPE</a>
        </div>
    </div>
  )
}

export default RecepieCard