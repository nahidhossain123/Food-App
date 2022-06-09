import React,{useState,useEffect} from 'react'

const Settings = () => {

  const [settings, Setsettings] = useState({
    "--background-color":"#FFF",
    "--background-light":"#FFF",
    "--shadow-color":"rgba(0,0,0,0.2)",
    "--primary-color":"rgb(255,0,86)",
    "--text-color":"#0a0a0a",
    "--text-light":"#575757",
    "--font-size":"16px",
    "--animation-speed":"1"
  })

  useEffect(()=>{
    const root = document.documentElement;
    for(let key in settings)
    {
      root.style.setProperty(key,settings[key])
    }
  },[settings])

  const [theme,setTheme] =useState("light");
  const themes = [
    {
      "--background-color":"#FFF",
      "--background-light":"#FFF",
      "--shadow-color":"rgba(0,0,0,0.2)",
      "--text-color":"#0A0A0A",
      "--text-light":"#575757"
    },
    {
      "--background-color":"rgb(29,29,29)",
      "--background-light":"rgb(77,77,77)",
      "--shadow-color":"rgba(0,0,0,0.2)",
      "--text-color":"#ffffff",
      "--text-light":"#eceaea"
    }
  ]

  function changeTheme(i)
  {
    const _theme = {...themes[i]};
    setTheme(i===0 ? "light":"dark");

    const _settings = {...settings}
    for(let key in _theme)
    {
      _settings[key] = _theme[key];
    }
    Setsettings(_settings);
  }

  const [primaryColor,setPrimaryColor] =useState(0);
  const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)"
]

function changeColor(i)
{
  const _color = primaryColors[i];
  let _settings = {...settings}
  _settings["--primary-color"] = _color;
  
  Setsettings(_settings);
  setPrimaryColor(i);
}

const [fontSize, setFontSize] = useState(1);
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

function changFontsize(i)
{
  const _font = fontSizes[i]
  let _setting = {...settings};
  _setting["--font-size"] = _font.value;
  Setsettings(_setting);
  setFontSize(i);
}

const [animationSpeed,setAnimationSpeed] = useState(2);
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
function changeAnimation(i)
{
  const _animSpeed= animationSpeeds[i]
  let _setting = {...settings}
  _setting["--animation-speed"] = _animSpeed.value;
  Setsettings(_setting);
  setAnimationSpeed(i)
}
  return (
    <div>
      <div className='section d-block'>
        <h2>Preferred Theme</h2>
        <div className='option-container'>
          <div className='option light' onClick={()=> changeTheme(0)}>
            {theme === "light" && (
              <div className='check'><i class="fa-solid fa-check"></i></div>
            )}
          </div>
          <div className='option dark' onClick={()=> changeTheme(1)}>
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
            <div className='option light' style={{backgroundColor: Color}} onClick={()=>changeColor(index)} >
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
            <button className='btn' onClick={()=>changFontsize(index)}>
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
            <button className='btn' onClick={()=>changeAnimation(index)}>
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