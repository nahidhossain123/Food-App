import React from 'react';
import {Link,useLocation} from 'react-router-dom';




const Sidebar = ({links,close}) => {
  const location = useLocation();
  return (
      <div className='sidebar' onClick={close}>
        {
            
            links.map(link =>(
                <Link className={location.pathname === link.path ? 'sidebar-link active' : 'sidebar-link'}  to={link.path} key={link.name}>
                    <i className={link.icons}></i>
                    {link.name}
                </Link>
            ))
        }
      </div>
  )
}

export default Sidebar