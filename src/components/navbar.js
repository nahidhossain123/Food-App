import React,{useState} from 'react';
import Sidebar from './sidebar';
import {Link,useLocation} from 'react-router-dom';


const links = [
  {
    name:'Home',
    path:'/',
    icons:"fa-solid fa-house-chimney"
  },
  {
    name:'Recipes',
    path:'/recepie',
    icons:"fa-solid fa-list"
  },
  {
    name:'Settings',
    path:'/settings',
    icons:"fa-solid fa-gear"
  }
]



const Navbar = () => {
  const [showsidebar,setshowsidebar] = useState(false);
  const location = useLocation();
  const closeSidebar = ()=>{
    setshowsidebar(false);
  }
  return (
    <>
      <div className='navbar container'>
        <Link to="/" className='logo'>F<span>oo</span>d Network</Link>
        <div className='nav-links'>
          {
            links.map(link =>(
              <Link to={link.path} className={location.pathname === link.path ? "active" : ""} key={link.name}>{link.name}</Link>
            ))
          }
        </div>
        <div onClick={()=>setshowsidebar(!showsidebar)} className={showsidebar?'sidebar-btn active':'sidebar-btn'}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
    </div>
   {showsidebar && <Sidebar close = {closeSidebar} links={links} />} 
    </>
  )
}

export default Navbar