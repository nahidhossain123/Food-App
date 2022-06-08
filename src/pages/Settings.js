import React,{useState} from 'react'

const Settings = () => {
  const [theme,setTheme] =useState("light");
  const [primaryColor,setPrimaryColor] =useState(0);
  const [fontSize, setFontSize] = useState(1);
  const [animationSpeed,setAnimationSpeed] = useState(2);
  const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)"
]
const fontSizes = [
  {
      title: "Small",
      value: "12px"
  },
  {
      title: "Medium",
      value: "16px"
  },
  {
      title: "Large",
      value: "20px"
  }
]

const animationSpeeds = [
  {
        title: "Slow",
        value: 2
  },
  {
        title: "Medium",
        value: 1
  },
  {
        title: "Fast",
        value: .5
  }
]
  return (
    <div>
      <div className='section d-block'>
        <h2>Preferred Theme</h2>
        <div className='option-container'>
          <div className='option light'>
            {theme === "light" && (
              <div className='check'><i class="fa-solid fa-check"></i></div>
            )}
          </div>
          <div className='option dark'>
            {theme === "dark" && (
              <div className='check'><i class="fa-solid fa-check"></i></div>
            )}
          </div>
        </div>
      </div>


      <div className='section d-block'>
        <h2>Primary Color</h2>
        <div className='option-container'>
          {primaryColors.map((Color,index)=>(
            <div className='option light' style={{backgroundColor: Color}}>
            {primaryColor === index && (
              <div className='check'><i class="fa-solid fa-check"></i></div>
            )}
          </div>
          ))}
        </div>
      </div>


      <div className='section d-block'>
        <h2>Font Size</h2>
        <div className='option-container'>
          {fontSizes.map((size,index) =>(
            <button className='btn'>
              <span>{size.title}</span>
              {fontSize === index && (
              <i class="fa-solid fa-check"></i>
            )}</button>
          ))}
        </div>
      </div>

      <div className='section d-block'>
        <h2>Animation Speed</h2>
        <div className='option-container'>
          {animationSpeeds.map((speed,index) =>(
            <button className='btn'>
              <span>{speed.title}</span>
              {animationSpeed === index && (
              <i class="fa-solid fa-check"></i>
            )}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Settings