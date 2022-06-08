import React from 'react'

const ImproveSection = () => {
    const list = [
        "Learn new recepies",
        "Experiment with Food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get Ranked"
    ]
  return (
    <div className='section improve-skills'>
         <div className='col image'> 
           <img src='/img/gallery/img_10.jpg' />
        </div>
        <div className='col'>
            <h1 className='title'>Improve Your Culinary Skills</h1>
            {
                list.map((list,index)=>(
                    <p className='skill-item' key={index}>{list}</p>
                ))
            }
            <button className='btn'>SIGNUP NOW</button>
        </div>
       
    </div>
  )
}

export default ImproveSection